import { cp, readdir, stat, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import {
  astroConfigPath,
  backupAstroConfigPath,
  backupPagesPath,
  pagesPath,
} from "./config.mts";

main();

async function main() {
  await backupFolder(pagesPath, backupPagesPath);
  await removeTinaDirectives(pagesPath);
  await backupFile(astroConfigPath, backupAstroConfigPath);
  await removeAdmin(astroConfigPath);
}

async function backupFolder(originalDir: string, backupDir: string) {
  await cp(originalDir, backupDir, { recursive: true });
}

async function backupFile(originalPath: string, backupPath: string) {
  await cp(originalPath, backupPath);
}

async function removeTinaDirectives(pagesPath: string) {
  const tinaDirective = "client:tina";
  const files = await readdir(pagesPath);

  for (const file of files) {
    const fullPath = join(pagesPath, file);
    const stats = await stat(fullPath);

    if (stats.isDirectory()) {
      await removeTinaDirectives(fullPath);
      continue;
    }

    if (!file.endsWith(".astro")) {
      console.log("Skipping non .astro file");
      continue;
    }

    const content = await readFile(fullPath, "utf-8");
    if (!content.includes(tinaDirective)) {
      continue;
    }

    const cleanedTemplate = content.replaceAll(tinaDirective, "");
    await writeFile(fullPath, cleanedTemplate, "utf-8");
  }
}

async function removeAdmin(configPath: string) {
  const adminRedirect = `"/admin": "/admin/index.html",`;
  const content = await readFile(configPath, "utf-8");
  if (!content.includes(adminRedirect)) {
    return;
  }

  const cleanedTemplate = content.replaceAll(adminRedirect, "");
  await writeFile(configPath, cleanedTemplate, "utf-8");
}
