#!/usr/bin/env node
import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const exportedSite = path.join(root, "out");
const clientBundle = path.join(root, "dist", "client");

if (!existsSync(path.join(exportedSite, "index.html"))) {
  throw new Error("Missing Next.js static export: out/index.html");
}

rmSync(clientBundle, { recursive: true, force: true });
mkdirSync(path.dirname(clientBundle), { recursive: true });
cpSync(exportedSite, clientBundle, { recursive: true });

console.log("Copied Next.js static export to dist/client");
