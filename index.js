const express = require('express');
const app = express();
const port = 3000;
app.get('/tin-tuc', (req, res) => {
    var a=1, b=2;
    
    var c = a+b;

      res.send(`<a href="/">'trang chủ ${c}'</a>`)
})

app.get('/', (req, res) => {
      res.send(`<a href="/tin-tuc">'User'</a>`)
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})