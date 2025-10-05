import cors from "cors";
import {
	type Application,
	type NextFunction,
	type Request,
	type Response,
	json,
	static as static_,
} from "express";
import { routes } from "./routes.data";
import path from "path";
import { API_BASE } from "../utility/constants";
import { ResponseHandler } from "../utility/response_handler/response.handler";

export const registerRoutes = (app: Application) => {
  app.use(cors({
    origin: process.env.FRONTEND_URL || "https://onedha.vercel.app",
    credentials: true
  }));
  app.use(json());
  app.use(static_(path.join(__dirname, "public")));
  
  for (const route of routes) {
    app.use(API_BASE + route.path, route.router);
  }

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
		res.status(err.statusCode || 500).send(new ResponseHandler(null, err));
	});
}