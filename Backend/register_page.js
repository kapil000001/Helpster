
const form = document.getElementById("register-form")

// const userName = document.getElementById('username');
const userEmail = document.getElementById('email').value;
// const MOb = document.getElementById('userNum');
const userClg = document.getElementById('clg-name').value;
const userPass = document.getElementById('psw').value;
const confirmPass = document.getElementById('psw-repeat').value;

form.addEventListener('submit' , registeruser);

async function registeruser(event){
    event.preventdefault();

    const result = await fetch('/api/regsiter' , {
        method: 'POSt',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userEmail,
            userClg,
            userPass
        })
    }).then(res => res.json())
}