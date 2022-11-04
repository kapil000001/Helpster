const button = getElementById('btn');
const userName = getElementById('username');

button.onmouseclick = fun();

const fun = () => {
    document.aler(`Thanks ${userName} for registering`);
    window.open('Login.html');
}