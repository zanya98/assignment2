const express = require("express");
const app = express();


app.get("/hello", (req, res) => {
  res.sendFile("C:/Users/zanya/OneDrive/Desktop/NCC_JS_Class" + "/assig2_a.html");
})

app.get("/hello/poem", (req, res) => {
  res.sendFile("C:/Users/zanya/OneDrive/Desktop/NCC_JS_Class" + "/assig2_b.html");
})

app.get("/hello/poem/table", (req, res) => {
  res.sendFile("C:/Users/zanya/OneDrive/Desktop/NCC_JS_Class" + "/assig2_c.html");
})

app.get("/hello/poem/table/story", (req, res) => {
  res.sendFile("C:/Users/zanya/OneDrive/Desktop/NCC_JS_Class" + "/assig2_d.html");
})

app.listen(8080, () => {
  console.log("Application started and Listening on port 8080");
});