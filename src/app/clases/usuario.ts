export class Usuario {
    email: string;
    pass: string;

    LogInUsuario()
    {
        return this.email === "admin" && this.pass === "admin";
    }
}
