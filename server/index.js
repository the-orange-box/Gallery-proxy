const path = require('path');
const express = require('express');
const app = express();
const port = 4000;

app.use('/:id', express.static(path.resolve(__dirname, '../public')));

app.listen(port, (err)=>{
  if(err) console.log(err);
  else console.log('listening on port: ' + port)
});