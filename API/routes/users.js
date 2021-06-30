const express = require('express');

const router = express.Router();


router.get("/https://jsonplaceholder.typicode.com/posts",
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
);




module.exports = router;
