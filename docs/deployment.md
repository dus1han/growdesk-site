# Deployment — VPS · Docker · GitHub Actions

Same model as the landing pages (see `Landing Pages/Dr. Luis Fernando Reyes/Pages/docs/deployment.md`
for the server-level background): GitHub Actions builds the image, pushes it to GHCR, and the VPS
only pulls and restarts. Caddy fronts it with TLS once a domain exists.

| | |
|---|---|
| Public origin | `https://growdesk.site` (`www` redirects to it) |
| Server | `169.58.92.105` |
| Site directory | `/opt/sites/growdesk-site` |
| Container | `growdesk-site` |
| Image | `ghcr.io/dus1han/growdesk-site:latest` (public package — no GHCR secrets needed) |
| Port | **3103**, `127.0.0.1` once a domain exists (3101 Nicole, 3102 Luis, 3110 GrowDesk CRM, 3111 GrowDesk Marist) |
| Runtime | nginx serving the static export — no Node process in production |

## 1 · GitHub

1. Create the repository and push this folder to `main`.
2. **Settings → Secrets and variables → Actions → Secrets** — the same values the landing-page repos use:

   | Secret | Value |
   |---|---|
   | `VPS_HOST` | `169.58.92.105` |
   | `VPS_USER` | `deploy` |
   | `VPS_SSH_KEY` | the deploy user's private key |
   | `VPS_SITE_PATH` | `/opt/sites/growdesk-site` |
   | `GHCR_USERNAME` / `GHCR_PAT` | only if the package is private (`read:packages`) |

3. **Variables → `SITE_URL`** — leave unset for an IP preview; set to `https://<domain>` at launch.
   It is baked into the HTML at build time, so changing it needs a re-run, not a restart.

## 2 · The server (once, needs sudo)

```bash
sudo ss -ltnp | grep ':3103'   # must print nothing
sudo mkdir -p /opt/sites/growdesk-site
sudo chown -R deploy:deploy /opt/sites/growdesk-site
sudo -u deploy bash -c 'printf "IMAGE=ghcr.io/dus1han/growdesk-site:latest\nCONTAINER_NAME=growdesk-site\nSITE_PORT=3103\n" > /opt/sites/growdesk-site/.env'
```

Write `.env` with one command as above — an interrupted heredoc leaves an empty file.

While there is no domain the site is served on `http://169.58.92.105:3103` (plain HTTP).
If the firewall is active: `sudo ufw allow 3103/tcp`.

## 3 · Domain (at launch)

1. Namecheap → growdesk.site → Advanced DNS: A record `@` → `169.58.92.105` and A record `www` →
   `169.58.92.105`; delete Namecheap's default parking CNAME / URL-redirect records on `@` and `www`.
   Check: `nslookup growdesk.site 8.8.8.8`.
2. Append `deploy/Caddyfile.block` to `/opt/sites/caddy/Caddyfile` (root-owned — needs sudo), then
   `cd /opt/sites/caddy && docker compose exec caddy caddy reload --config /etc/caddy/Caddyfile`.
3. Set the `SITE_URL` variable to `https://growdesk.site` and re-run the workflow. The deploy script then rebinds the port to
   `127.0.0.1` automatically, closing the plain-HTTP preview, and the build becomes indexable.

## Deploying

Push to `main`, or **Actions → Build and deploy → Run workflow**. A failed deploy can be rerun by hand:

```bash
ssh deploy@169.58.92.105 'SITE_PATH=/opt/sites/growdesk-site bash -s' < deploy/remote-deploy.sh
```
