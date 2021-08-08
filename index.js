const http=require("htpp");

http.createSever((req,res)=>{
  res.end("ok");
}).listen(80);
