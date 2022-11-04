const mongoose = require("mongodb");

const Login_btn = getElementById('Button');
Login_btn.addEventListner = Allert();

const username = getElementById('userName');
const pass = getElementById('pwd');

if (username == users.username){
    if (pass == users.password)
    {
        const Allert = () => {
            document.allert("Login Successful");
            window.open("index.html");
        }
    }
    else {
        document.allert("Wrong Password");
    }
}
else{
    document.allert("Wrong Username");
}