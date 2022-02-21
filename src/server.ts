import express, { Response } from "express";

const app = express();
const port = process.env.PORT || 8080;

const testFun = (req, res: Response) => {
  res.status(200).json({ message: "server is running now" });
};
app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});

app.get("/", testFun);
