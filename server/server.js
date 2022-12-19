const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const http = require('http').createServer(app);
const fs = require('fs');
const fileName = 'res.json';
// const file = require(fileName);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

app.post('/ping', function (req, res) {
  const data = req.body;
  console.log(data);
  


var file_content = fs.readFileSync(fileName);
console.log(file_content);
if(file_content != ''){
  var content = JSON.parse(file_content);

  if(!content['X' + data.xId])
  {
    content['X'+data.xId] = {};
  }
  if(!content['X'+data.xId]['Y'+data.yId])
  {
    content['X'+data.xId]['Y'+data.yId] = '';
  }
  content['X'+data.xId]['Y'+data.yId] = data.Name;
  
  fs.writeFile(fileName, JSON.stringify(content), function writeJSON(err) {
      if (err) return console.log(err, "error");
      console.log(JSON.stringify(content));
      console.log('writing to ' + fileName);
    });
}
res.send(req.body)


})

http.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running ${process.env.PORT || 3000}`);
});