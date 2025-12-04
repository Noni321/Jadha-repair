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

  // Serve static files with proper MIME types
  app.use(express.static(distPath, {
    index: 'index.html',
    extensions: ['html'],
    setHeaders: (res, filepath) => {
      if (filepath.endsWith('.html')) {
        res.setHeader('Content-Type', 'text/html');
      } else if (filepath.endsWith('.js')) {
        res.setHeader('Content-Type', 'application/javascript');
      } else if (filepath.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css');
      }
    }
  }));

  // Fallback to index.html for client-side routing (SPA)
  app.get('*', (_req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(path.join(distPath, 'index.html'));
  });
}