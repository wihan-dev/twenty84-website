import { execFileSync, spawn } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
process.chdir(__dirname);

const env = { ...process.env };
env.PATH = `/opt/homebrew/bin:/usr/local/bin:${env.PATH || "/usr/bin:/bin"}`;

const node = "/opt/homebrew/bin/node";
const nextCli = join(__dirname, "node_modules", "next", "dist", "bin", "next");

// Build first, then serve in production mode (avoids Turbopack)
execFileSync(node, [nextCli, "build"], { stdio: "inherit", cwd: __dirname, env });

const child = spawn(node, [nextCli, "start", "-p", "3000"], {
  stdio: "inherit",
  cwd: __dirname,
  env,
});

child.on("exit", (code) => process.exit(code ?? 0));
