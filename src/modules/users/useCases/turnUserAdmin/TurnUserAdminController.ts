import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.params

    const updatedUser = this.turnUserAdminUseCase.execute({ user_id })

    return response.status(201).json(updatedUser)
  }
}

export { TurnUserAdminController };
