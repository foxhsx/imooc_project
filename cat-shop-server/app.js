const express = require('express');
const cors = require('cors')
const bodyParser = require("body-parser");

const app = express();

app.get("/", (req, res) => {
  res.send('啥都没')
});

// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: false,
    limit: "10000kb"
  })
);
// parse application/json
app.use(
  bodyParser.json({
    limit: "10000kb"
  })
);

app.all('/api/*', cors());

app.use("/api/v1/auth", require("./api/v1/auth"));

var port = process.env.PORT || 3009;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
require("./db");