import express from 'express';

const app = express();
const port = process.env.PORT || 3500;

app.use(express.json());

const posts = [];

app.post('/card', (req, res) => {
  const stamp = new Date();
  posts.push({ stamp, ...req.body });
  console.log(posts);
  res.status(200).json({ ok: true });
});

app.listen(port, () => {
  console.log('Connected on port', port);
});
