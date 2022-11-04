

const button = getElementById('btn');
const userName = getElementById('username');
const Email = getElementById('email');
const MOb = getElementById('userNum');
const Clg = getElementById('userClg');
const pass = getElementById('password');



button.onmouseclick = fun();

const fun = () => {
    document.aller(`Thanks ${userName} for registering`);
    window.open('Login.html');
}