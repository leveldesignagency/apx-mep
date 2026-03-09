# Vercel: build only this landing page

In Vercel → **Project Settings** → **Build and Deployment** → **Root Directory**:

Set **Root Directory** to: **`landing`**

Leave "Include files outside the root directory" enabled if needed. Save and redeploy.

When you want to deploy the full MEP website instead, clear the Root Directory (leave it empty) so Vercel builds from the repo root.
