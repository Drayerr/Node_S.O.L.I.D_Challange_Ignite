import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    const user = new User()

    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
      admin: false
    })

    this.users.push(user)

    return user
  }

  findById(id: string): User | undefined {
    // Complete aqui
    const user = this.users.find((users) => users.id === id)
    return user
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
    const user = this.users.find((users) => users.email === email)
    return user
  }

  turnAdmin(recivedUser: User): User {
    // Complete aqui
    const updatedUser = {
      name: recivedUser.name,
      email: recivedUser.email,
      created_at: recivedUser.created_at,
      updated_at: new Date(),
      admin: true
    }

    const userIndex = this.users.findIndex((users) => recivedUser.id === users.id)

    this.users[userIndex] = updatedUser
    
    return updatedUser
  }

  list(): User[] {
    // Complete aqui
    return this.users
  }
}

export { UsersRepository };
