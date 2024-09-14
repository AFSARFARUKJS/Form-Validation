const form=document.querySelector("#form");
const username=document.querySelector("#username");
const email=document.querySelector("#Email");
const Password=document.querySelector("#Password");
const conf=document.querySelector("#cp");


form.addEventListener(('submit'),(e)=>{
    e.preventDefault();
    valid();

});
function valid(){
    const uname=username.value.trim();
    
    const mail=email.value.trim();
    const pass=Password.value.trim();
    const cpass=conf.value.trim();
   console.log("hi");
    if(uname===''){
        seterror(username,"Username is not Empty");
    }
    else{
        setsuccess(username);
    }
    if(mail===''){
        seterror(email,"Mail ID is not empty");
    }
    else if(!validateEmail(mail)){
   seterror(email, "Mail ID is not Valid");
        
    }
    else{
        setsuccess(email);
    }
    if(pass===''){
        seterror(Password,"Password is not Empty");
    }
    else if(pass.length<8){
        seterror(Password,"Password length is too small");
    }
    else{
        setsuccess(Password);
    }
    if(cpass===''){
        seterror(conf,"password is not empty");
    }
    else if(pass!==cpass){
        seterror(conf,"Password isn't same");
    }
    else{
        setsuccess(conf);
    }

}
function seterror(element,message){
const ig=element.parentElement;
const errorelement=ig.querySelector(".error");
document.querySelector(".error").style.dispaly = "block";
errorelement.innerText=message;
ig.classList.add("error");
ig.classList.remove("success");
}
function setsuccess(element) {
  const ig = element.parentElement;
  const errorelement = ig.querySelector(".error");
  document.querySelector(".error").style.dispaly="block";
  errorelement.innerText = '';
  ig.classList.add("success");
  ig.classList.remove("error");
}
const validateEmail = (mail) => {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(mail);
};