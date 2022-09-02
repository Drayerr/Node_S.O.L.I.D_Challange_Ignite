import AppError from "../../../../errors/AppError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    
    const caller = this.usersRepository.findById(user_id)
    

    if(!caller) {

      throw new AppError("User ID not exists!")
    }
    
    const adminPerm = caller.admin

    if (!adminPerm) {
      throw new AppError("You must be an Admin to use this route!", 401)
    }

    const users = this.usersRepository.list()

    return users
  }
}

export { ListAllUsersUseCase };
