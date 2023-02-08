const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;
app.use(cors());

app.get('/', function (req, res) {
  res.send('Alwar Server')
});

app.get('/test', function (req, res) {
  res.send({
    data: {
      test: 'test'
    },
    message: 'success'
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});