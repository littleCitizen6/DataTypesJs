const passwardSymbol = Symbol("passward");
class User{
    userName;
    connected;
    constructor(userName, passward2) {
        this.userName = userName;
        this[passwardSymbol] = passward2;
        this.connected = false;
    }
    get userName(){
        return this.userName;
    }
    get isConnected(){
        return this.connected;
    }
    connect(passward){
        if (this[passwardSymbol] == passward) {
            this.connected = true;
        }
        else{
            console.log("invalid passward")
        }
    }
    disconnect(){
        this.connected = false;
    }
}

class UserHandler{
    users;
    constructor() {
        this.users = new Map();
    }
    signup(userName,passward){
        if(this.users.has(userName)){
            console.log("user already exist");
        }
        else{
            this.users.set(userName, new User(userName, passward));
            console.log("added succesflly")
        }
    }
    login(userName, passward){
        if(this.users.has(userName)){
            this.users.get(userName).connect(passward);
        }
        else {
            console.log("there is no such a user name")
        }
    }
    IsConnected(userName){
        return this.users.get(userName).isConnected;
    }
    logout(userName){
        if(this.users.has(userName)){
            this.users.get(userName).disconnect();
        }
    }

}