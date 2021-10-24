import { Response, Request } from "express";
import { GetLast3MessagesServices } from "../services/GetLast3MessagesServices";

class GetLast3MessagesController {
  async handle(request: Request, response: Response) {
    const { code } = request.body;

    const service = new GetLast3MessagesServices();

    try {
      const result = await service.execute();

      return response.json(result);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { GetLast3MessagesController };
