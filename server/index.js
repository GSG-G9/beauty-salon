const cookieParser = require("cookie-parser");
const app = require("./app");
const port = app.get("PORT");

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
