//Classe top top que serve para tratar TODOS os erros da aplicação
class AppError {
  public readonly code : number  
  public readonly message : string

  constructor(msg : string, code = 400) {

    this.code = code
    this.message = msg
  }
}

export default AppError