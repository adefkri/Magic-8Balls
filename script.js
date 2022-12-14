
const options =[
    'Yes','Absolutely','No Doubt','Ask Again',"You're Hot",
    'May be','Count on it','It will Pass','No','It is Ok',
    'Very Likely',"Can't tell now",'Not now','Wait for it','Go for it'
]



 const magicBall = document.getElementById("mb-container");
const response = document.getElementById("response");
 let form = document.forms.myform;


       function myfunc(){
        
    const index=Math.floor(Math.random()*options.length); 
    const message = options[index];
    response.textContent=message;
 
 setTimeout(()=> {
        response.textContent= message;
          response.style.fontSize = "18px"
  },3000)
    
}

  function checkInput() {
   let ele = form.elements;
 let allFilled = true;

  for(let i = 0; i < ele.length; i++) {
    if(ele[i].value.length === 0) {
       allFilled = false;
   }
 }
  if(allFilled) {
 form.submit.removeAttribute("disabled");
  }
 }





// function ask(){
//     let answers=document.getElementById("response");
//     answers.innerHTML=Math.floor(Math.random("potions")*14)
// }


// magicBall.addEventListener("cli", function(){
//         const index=Math.floor(Math.random()*15)
//       const message = options[index]
//          response.textContent=message;)}


//  magicBall.addEventListener("click", function(){
//      const index=Math.floor(Math.random()*15);
//      const message = options[index];
//       response.textContent=message;
     
//   setTimeout(()=> {
//       response.textContent= message;
//       response.style.fontSize = "1.1rem"
//   },3000)

//   })
