// Baut eine einzige HTML-Datei mit allem drin (dist/klausurtrainer.html), z. B. zum Weitergeben.
// Aufruf: node tools/build.js
'use strict';
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const lies = p => fs.readFileSync(path.join(root, p), 'utf8');

let out = html
  .replace('<link rel="stylesheet" href="css/styles.css">', () => '<style>\n' + lies('css/styles.css') + '\n</style>')
  .replace(/<script src="([^"]+)"><\/script>/g, (m, src) => '<script>\n' + lies(src).replace(/<\/script/gi, '<\\/script') + '\n</script>');

fs.mkdirSync(path.join(root, 'dist'), { recursive: true });
fs.writeFileSync(path.join(root, 'dist', 'klausurtrainer.html'), out);

// Variante ohne <html>/<head>/<body> für die Veröffentlichung als Claude-Artifact
const head = out.match(/<head>([\s\S]*?)<\/head>/)[1]
  .replace(/<meta charset[^>]*>\s*/, '')
  .replace(/<meta name="viewport"[^>]*>\s*/, '<meta name="claude:viewport-fit-sides" content="cover">\n');
const body = out.match(/<body>([\s\S]*?)<\/body>/)[1];
fs.writeFileSync(path.join(root, 'dist', 'artifact.html'), head.trim() + '\n' + body.trim() + '\n');
console.log('dist/klausurtrainer.html und dist/artifact.html geschrieben');
