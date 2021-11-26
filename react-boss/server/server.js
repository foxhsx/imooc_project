import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import userRouter from "./user";
import model from "./model";
import { resolve } from "path";

import csshook from "css-modules-require-hook/preset"; // import hook before routes
import assethook from "asset-require-hook";

import React from "react";
import { renderToString, renderToNodeStream } from "react-dom/server";

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import App from "../src/App";
import reducers from "../src/reducer";
import { files as staticPath } from "../build/asset-manifest.json";

// 调用
assethook({
  extensions: ["png"],
});

const Chat = model.getModel("chat");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3001", // 设置跨域
  },
});

io.on("connection", function (socket) {
  // 当前链接的 socket
  socket.on("sendmsg", function (data) {
    const { from, to, msg } = data;
    const chatid = [from, to].sort().join("_");
    Chat.create({ chatid, from, to, content: msg }, function (err, doc) {
      io.emit("recvmsg", Object.assign({}, doc._doc));
    });
  });
});

app.use(cookieParser());
app.use(bodyParser.json());
app.use("/user", userRouter);

// 中间件
app.use(function (req, res, next) {
  // 匹配到 user 或者 static 开头的时候，会调用 next 方法，从而进入到下一步去，这样
  // 不会影响到接口
  if (req.url.startsWith("/user/") || req.url.startsWith("/static/")) {
    return next();
  }
  const store = createStore(reducers, compose(applyMiddleware(thunk)));
  let context = {};
  res.write(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Web site created using create-react-app"
      />
      <title>React App</title>
      <link rel="stylesheet" href="${staticPath["main.css"]}">
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">`);
  const markupStream = renderToNodeStream(
    // react 16 的新方法
    // const markup = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  markupStream.pipe(res, { end: false });
  markupStream.on("end", () => {
    res.write(`</div>
    //     <script src="${staticPath["main.js"]}"></script>
    //   </body>
    // </html>`);
    res.end();
  });

  // const template = `<!DOCTYPE html>
  // <html lang="en">
  //   <head>
  //     <meta charset="utf-8" />
  //     <meta name="viewport" content="width=device-width, initial-scale=1" />
  //     <meta name="theme-color" content="#000000" />
  //     <meta
  //       name="description"
  //       content="Web site created using create-react-app"
  //     />
  //     <title>React App</title>
  //     <link rel="stylesheet" href="${staticPath["main.css"]}">
  //   </head>
  //   <body>
  //     <noscript>You need to enable JavaScript to run this app.</noscript>
  //     <div id="root">${markup}</div>
  //     <script src="${staticPath["main.js"]}"></script>
  //   </body>
  // </html>
  // `;

  // res.send(template);

  // 可以在这里使用 renderToString API 将组件渲染成静态标签，返回给前端
  /**
   * const htmlRes = renderToString(<App />)
   * res.send(htmlRes)
   */
  // return res.sendFile(resolve("build/index.html"));
});
// 静态资源转发
app.use("/", express.static(resolve("build")));

server.listen(9333, function () {
  console.log("Node app start at port 9333");
});
