let getID = (id) =>{
    return document.getElementById(id);
}

const userName = getID('userName').value;
console.log(userName);
const password = getID('password').value;
console.log(password);

function handleLogin(){
    if(userName == "admin" && password == "1"){
        alert("Please enter");
        return window.location.href = "./controlDC/controlDC.html";
    }else{
        alert("sai tkmk")
    }

}