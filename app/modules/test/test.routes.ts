import {
	type NextFunction,
	type Request,
	type Response,
	Router,
} from "express";
import { Route } from "../../routes/routes.types";
import { ResponseHandler } from "../../utility/response_handler/response.handler";

const router = Router();

router.get("/msg",async (req: Request, res: Response, next: NextFunction) => {
    try{
      const response = new ResponseHandler("Backend is running baby");
      res.send(response);
    }catch(error){
      next(error);
    }
})

export default new Route("/test", router);