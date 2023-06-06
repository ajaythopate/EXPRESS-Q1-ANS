const express = require('express');
const app = express();

app.get('/post', (req, res) => {
  const posts = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Post ${i + 1}`,
    content: `This is the content of Post ${i + 1}`,
  }));

  res.json(posts);
});

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
