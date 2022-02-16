import express, { Response } from "express";

const app = express();
const port = 3000;

const testFun = (req, res: Response) => {
  res.status(200).json({ message: "server is running" });
};

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});

app.get("/", testFun);
