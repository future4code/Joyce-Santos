import express, { Request, Response } from "express";
import cors from "cors";
import { countries, country } from "./countries";

const app = express();

app.use(express.json());
app.use(cors());

app.put("/countries/edit/:id", (req: Request, res: Response) => {

    // const result = 
});
  

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
