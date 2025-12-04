import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(import.meta.dirname, "../dist/public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find build directory: ${distPath}. Did you forget to run 'npm run build'?`,
    );
  }

  app.use(express.static(distPath, {
    index: 'index.html',
    extensions: ['html']
  }));

  // Fallback to index.html for client-side routing
  app.get('*', (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}