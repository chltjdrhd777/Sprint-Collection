const express = require("express");
const cors = require("cors");

const router = express();
router.use(cors());
router.use(express.json({ strict: false }));

const PORT = 5000;
const ip = "localhost";

router.post("/lower", (request, response) => {
  console.log(`Routing request type ${request.method} for ${request.url}`);

  const data = request.body;
  response.json(data.toLowerCase());
});

router.post("/upper", (request, response) => {
  console.log(`Routing request type ${request.method} for ${request.url}`);

  const data = request.body;
  response.json(data.toUpperCase());
});

router.listen(PORT, ip, () => {
  console.log(`express router listening at http://${ip}:${PORT}`);
});