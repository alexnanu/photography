const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const folderPath = './'; // Change this to the path of your folder with .html files

const server = http.createServer(async (req, res) => {
  if (req.url === '/get-files') {
    try {
      // Read the directory
      const files = await fs.readdir(folderPath);
      // Filter for .html files
      const htmlFiles = files.filter(file => path.extname(file).toLowerCase() === '.html');
      
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(htmlFiles));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error reading directory');
    }
  } else {
    // Serve the HTML file
    try {
      const html = await fs.readFile(path.join(__dirname, 'index.html'));
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    } catch (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File not found');
    }
  }
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));