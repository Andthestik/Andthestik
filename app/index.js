const http = require('http');

function analyzeContract(text) {
  // Placeholder analysis; in production, integrate with OpenAI API
  return {
    summary: text.slice(0, 100) + '...',
    risks: ['Non-disparagement clause may be overly broad.']
  };
}

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/api/analyze') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const data = JSON.parse(body || '{}');
      const result = analyzeContract(data.text || '');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(result));
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('ContractMate API');
  }
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`ContractMate API listening on port ${port}`);
});
