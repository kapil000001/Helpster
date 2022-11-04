const { MongoUnexpectedServerResponseError } = require("mongodb");

const Login_btn = getElementById('Button');
Login_btn.addEventListner = Allert();

const username = getElementById('userName');
const pass = getElementById('pwd');

if (username == MongoUnexpectedServerResponseError.username){
    if (pass == MongoUnexpectedServerResponseError.password)
    {
        const Allert = () => {
            document.allert("Login Successful");
            window.open("index.html");
        }
    }
    else {
        allert("Wrong Password");
    }
}
else{
    document.allert("Wrong Username");
}