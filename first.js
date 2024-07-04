const signIn = document.querySelector(".signin");
const button = document.querySelector("button");
const btn1 = document.querySelector(".btn1");
const body = document.querySelector("body")
console.log(signIn,button,btn1);
button.onclick=()=>{
  signIn.innerText = "You have been Log In!Click Home Again";
  signIn.style.fontSize="20px";
  signIn.style.display="flex";
  signIn.style. justifyContent="center";
  signIn.style.alignItems="center";
}
//These for change to dark mode
// btn1.onclick=()=>{
//     body.style.backgroundColor="black";
//     body.style.Color="white";
    
// }
// btn1.ondblclick=()=>{
//     body.style.backgroundColor="#fdf0d5";    
// }