const express = require('express');

const router = express.Router();

router.post("/https://jsonplaceholder.typicode.com/posts/[postId]/comments",
fetch('https://jsonplaceholder.typicode.com/posts/[postId]/comments')
  .then(response => response.json())
  .then(json => console.log(json))
);



module.exports = router;