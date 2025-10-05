import express from "express";
import { registerRoutes } from "./routes/routes";
import http from "http";

export const startServer = () => {
  try{
    const app = express();
    const { PORT} = process.env;
    registerRoutes(app);

    const httpServer = http.createServer(app);
    httpServer.listen(PORT || 5000, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }catch(error){
    console.log(error);
    process.exit(1);
  }
}