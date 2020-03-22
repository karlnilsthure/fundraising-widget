const express = require("express");
const app = express();
const port = 4000;

const fs = require("fs");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  next();
});

app.use(
  express.json({
    type: ["application/json", "text/plain"]
  })
);

app.get("/api/totalAmountPledged", getTotalAmount);
app.post("/api/addNewPledge", addNewPledge);

function getTotalAmount(req, res) {
  fs.readFile("pledges.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const { pledges } = JSON.parse(data);
      const totalAmount = calculateTotalAmount(pledges);
      res.send({ totalAmount });
    }
  });
}

function addNewPledge(req, res) {
  const { pledge } = req.body;
  const stringifiedPledge = JSON.stringify(pledge);

  fs.readFile("pledges.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const obj = JSON.parse(data);
      obj.pledges.push({ amount: stringifiedPledge });
      json = JSON.stringify(obj);
      fs.writeFile("pledges.json", json, "utf8", () => {
        const { pledges } = JSON.parse(json);
        const totalAmount = calculateTotalAmount(pledges);
        res.send({ totalAmount });
      });
    }
  });
}

const calculateTotalAmount = pledges => {
  return pledges.reduce((total, pledge) => {
    const { amount } = pledge;
    return total + amount * 1;
  }, 0);
};

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
