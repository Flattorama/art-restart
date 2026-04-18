#!/usr/bin/env node
// Prerender script for GitHub Pages.
// Boots the built SSR worker via wrangler, fetches "/", saves dist/client/index.html
// and dist/client/404.html (SPA fallback). Exits cleanly so CI can upload dist/client.

import { spawn } from "node:child_process";
import { writeFile, mkdir } from "node:fs/promises";
import { setTimeout as sleep } from "node:timers/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

const PORT = 8788;
const URL = `http://127.0.0.1:${PORT}/`;
const OUT_DIR = "dist/client";

if (!existsSync("dist/server/index.js")) {
  console.error("dist/server/index.js missing — run `bun run build` first.");
  process.exit(1);
}

console.log("Starting wrangler dev to prerender /...");
const child = spawn(
  "bunx",
  [
    "wrangler",
    "dev",
    "--port",
    String(PORT),
    "--ip",
    "127.0.0.1",
    "--local",
    "--log-level",
    "warn",
  ],
  { stdio: ["ignore", "inherit", "inherit"] },
);

const cleanup = () => {
  try {
    child.kill("SIGTERM");
  } catch {}
};
process.on("exit", cleanup);
process.on("SIGINT", () => {
  cleanup();
  process.exit(1);
});

// Poll until server responds
let html = null;
for (let i = 0; i < 60; i++) {
  await sleep(1000);
  try {
    const res = await fetch(URL);
    if (res.ok) {
      html = await res.text();
      break;
    }
  } catch {}
}

cleanup();

if (!html) {
  console.error("Could not reach prerender server.");
  process.exit(1);
}

await mkdir(OUT_DIR, { recursive: true });
await writeFile(join(OUT_DIR, "index.html"), html, "utf8");
await writeFile(join(OUT_DIR, "404.html"), html, "utf8");
console.log(`Wrote ${OUT_DIR}/index.html and ${OUT_DIR}/404.html (${html.length} bytes).`);
process.exit(0);
