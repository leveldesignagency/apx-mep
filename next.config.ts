import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

/** Pin Turbopack to this app so a parent monorepo lockfile does not steal the workspace root. */
const appRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  /** Aligns styled-components with SWC; avoids odd client-bundle behaviour with CSS-in-JS. */
  compiler: {
    styledComponents: true,
  },
  turbopack: {
    root: appRoot,
  },
};

export default nextConfig;
