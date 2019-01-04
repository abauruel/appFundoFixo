const server = require("./server");
server.listen(3001 || process.env.PORT, () =>
  console.log("Server is running in port 3001")
);
