const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
//Added for https
const http = require("http");
const enforce = require("express-sslify");
//Static file declaration
app.use(express.static(path.join(__dirname, "client/build")));
//production mode
if (process.env.NODE_ENV === "production") {
  //HTTPS CODE
  // Use enforce.HTTPS({ trustProtoHeader: true }) in case you are behind
  // a load balancer (e.g. Heroku). See further comments below
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  //End https section

  app.use(express.static(path.join(__dirname, "client/build"))); //  app.get('*', (req, res) => {    res.sendfile(path.join(__dirname = 'client/build/index.html'));  })}
  //build mode
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/public/index.html"));
  });
  //start server
  app.listen(port, (req, res) => {
    console.log(`server listening on port: ${port}`);
  });
}
