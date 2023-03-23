const secretlogin="booleanteach";
const secretpassword="12345";
const log=console.log


const getbyId=(id)=>{
    
    return document.getElementById(id);
}

let signinbtn=getbyId("signin")
let inputlogin=getbyId("exampleInputEmail1")
let inputpassword=getbyId("exampleInputPassword2")
let card_1=getbyId("card_1")
let card_2=getbyId("card_2")

const checksecretinput=function(){

    if(secretlogin===inputlogin.value && secretpassword!=inputpassword.value)
    {
        alert("Password yanlisdir")
    }
    else if(secretlogin!=inputlogin.value && secretpassword===inputpassword.value)
    {
         alert("Login yalnisdir")
    }
    else if(secretlogin===inputlogin.value && secretpassword===inputpassword.value)
    {  
        card_1.classList.add("hide")
        card_2.classList.remove("hide")           
        card_2.classList.add("show")
    }
    event.preventDefault();
}

signinbtn.addEventListener("click",checksecretinput)

