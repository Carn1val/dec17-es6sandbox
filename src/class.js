(function(){
  class User {
  constructor (username, password, email){
    this.username = username;
    this.password = password;
    this.email = email;
  }
  static countRegisteredUsers(){
    console.log('2 users is registered');
  }

  register(){
    console.log(this.username + ' is registered. His password: ' + this.password + ' and email: ' + this.email);
  }
}

let john = new User('John', 'Password1', 'john@mail.com');
john.register();
let mark = new User('Mark', 'Password2', 'mark@mail.com');
mark.register();
User.countRegisteredUsers();

class Member extends User {
  constructor (username, password, email, memberPackage){
    super(username, password.email);
    this.package = memberPackage;
  }
  getMemberPackage(){
    console.log(this.username + ' is subscribed to ' + this.package);
  }
}

let eric = new Member('Eric', 'Password3', 'eric@email.com', 'epic channels');
eric.getMemberPackage();
})();
