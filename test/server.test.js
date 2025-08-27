const test = require('node:test');
const assert = require('node:assert');
const server = require('../server');

test('adds competitor and returns insight', async (t) => {
  await new Promise(resolve => server.listen(0, resolve));
  const { port } = server.address();
  const base = `http://localhost:${port}`;

  const addRes = await fetch(`${base}/competitors`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'example.com' })
  });
  assert.strictEqual(addRes.status, 201);

  const insightRes = await fetch(`${base}/insights`);
  assert.strictEqual(insightRes.status, 200);
  const data = await insightRes.json();
  assert.match(data.message, /1/);

  server.close();
});
