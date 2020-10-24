import express from 'express';

const app = express();
const port = process.env.PORT || 3500;

app.use(express.json());

const posts = [];

app.post('/card', (req, res) => {
  console.log('Headers:', req.headers);
  const stamp = new Date();
  posts.push({ stamp, type: 'card', ...req.body });
  console.log(posts);
  res.status(200).json({ ok: true });
});

app.post('/scan', (req, res) => {
  console.log('Headers:', req.headers);
  const stamp = new Date();
  posts.push({ stamp, type: 'scan', ...req.body });
  console.log(posts);
  res.status(200).json({ ok: true });
});

app.listen(port, () => {
  console.log('Connected on port', port);
});
