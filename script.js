//all selector variables
let p = document.createElement("p");
let h1 = document.querySelector(".header");
let input = document.querySelector(".input");
let userInput;
let ghostImg = document.querySelector(".ghost-image");
let newImg = document.querySelector(".new-image");
let hideButton = document.querySelector(".hide-button");
let showButton = document.querySelector(".show-button");
let updateImg = document.querySelector(".update-img-button");
let messageButton = document.querySelector(".message-button");
let message = document.querySelector(".message");
let nameButton = document.querySelector(".name-button");


//create an onclick event for the Hide Me button
hideButton.onclick = (function (){  
   userInput = input.value;
  ghostImg.style.display="none";
  newImg.style.display="none";
});

//create an onclick event for the Show Me button
showButton.onclick = (function (){  
   userInput = input.value;
  ghostImg.style.display="";
  newImg.style.display="none";
});


//create an onclick event for the Update Img button
newImg.style.display="none";
updateImg.onclick = (function (){  
   userInput = input.value;
  ghostImg.style.display="none";
  newImg.style.display="";
});


//create an onclick event for the Send Message button
//update the userInput variable by saving the value of the input
//use the insertAdjacentHTML method to append the userInput in a <p> tag
messageButton.onclick = (function (){  
userInput = input.value;
  message.insertAdjacentHTML(‘before end’, userInput);
});


//create an onclick event for the Name Me button
//update the userInput variable by saving the value of the input
//use the innerHTML method to update the h1 tag
