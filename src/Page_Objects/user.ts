export class User{
    private userName:string;
    private email:string;
    private passWord:string;
    private comfirmPassword:string;


    constructor(username?:string, password?:string, comfirmpas?:string, email?:string){
        this.userName = username;
        this.email = email;
        this.passWord = password;
        this.comfirmPassword = comfirmpas;
    }

    public async getUsername():Promise<string>{
        return this.userName;
    }

    public async getPassWord():Promise<string>{
        return this.passWord;
    }

    public async getEmail():Promise<string>{
        return this.passWord;
    }

    public async getPassWordComfirm():Promise<string>{
        return this.passWord;
    }
}