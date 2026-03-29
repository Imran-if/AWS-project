const app = require('./app');

async function run() {
  const server = app.listen(0);

  try {
    const { port } = server.address();

    const health = await fetch(`http://127.0.0.1:${port}/health`);
    if (!health.ok) {
      throw new Error(`/health returned status ${health.status}`);
    }

    const metrics = await fetch(`http://127.0.0.1:${port}/metrics`);
    const metricsBody = await metrics.text();

    if (!metricsBody.includes('app_requests_total')) {
      throw new Error('metrics endpoint did not expose app_requests_total');
    }

    console.log('All tests passed');
  } finally {
    server.close();
  }
}

run().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
