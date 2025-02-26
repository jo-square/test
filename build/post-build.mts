import { cp, rm } from "node:fs/promises";
import {
  astroConfigPath,
  backupAstroConfigPath,
  backupPagesPath,
  pagesPath,
} from "./config.mts";

main();

async function main() {
  await restoreFolder(pagesPath, backupPagesPath);
  await restoreFile(astroConfigPath, backupAstroConfigPath);
}

async function restoreFolder(originalDir: string, backupDir: string) {
  await rm(originalDir, { recursive: true });
  await cp(backupDir, originalDir, { recursive: true });
  await rm(backupDir, { recursive: true });
}

async function restoreFile(originalPath: string, backupPath: string) {
  await rm(originalPath);
  await cp(backupPath, originalPath);
  await rm(backupPath);
}
