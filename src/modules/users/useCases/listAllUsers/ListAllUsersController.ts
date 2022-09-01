import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const headers = request.headers
    const userid = headers.userid

    const allUsers = this.listAllUsersUseCase.execute({user_id : userid as string })

    return response.status(200).json(allUsers)

  }
}

export { ListAllUsersController };
