const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const startedAt = Date.now();
let requestCount = 0;

app.use((req, _res, next) => {
  requestCount += 1;
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/health', (_req, res) => {
  res.status(200).json({
    status: 'ok',
    uptime_seconds: Math.floor((Date.now() - startedAt) / 1000),
  });
});

app.get('/metrics', (_req, res) => {
  res.type('text/plain').send(
    [
      '# HELP app_requests_total Total HTTP requests handled by app',
      '# TYPE app_requests_total counter',
      `app_requests_total ${requestCount}`,
    ].join('\n')
  );
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Todo app listening on port ${PORT}`);
  });
}

module.exports = app;
