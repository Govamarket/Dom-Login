const firstName = document.getElementById("name");
const lastNameInput = document.getElementById("lastly");
const emailInput = document.getElementById("email");
const password = document.getElementById("psw");
const passwordConfirmation = document.getElementById("psw2");
const form = document.getElementById("form");
const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const submitBtn = document.getElementById("button");


// firstname error messages
const empty = document.getElementById("empty");
const than = document.getElementById("than");
// Error lastname messages
const lastname = document.getElementById("lastname");
const lasthan = document.getElementById("lasthan");
// Error email messages
const deyempty = document.getElementById("emp");
const nocorrect = document.getElementById("invalid");
// error password messages
const deyNull = document.getElementById("emptypass");
const deyExceed = document.getElementById("passexceed");
// error confirm messages
const emptyMsg = document.getElementById("deyempty");
const deyhigherMsg = document.getElementById("deyhi");

 firstName.addEventListener('click',(event) => {
    setTimeout(() => {
      if (firstName.value == "") {
        empty.style.display = "flex";
        than.style.display = "none";
        // location.reload();
      }else if (firstName.value.length < 5) {
        than.style.display = "flex";
        empty.style.display = "none";
      }else{
        than.style.display = "none";
        empty.style.display = "none";
      }
    }, 1000);
   
 })

 lastNameInput.addEventListener('click', (event) => {
  setTimeout(() => {
    if (lastNameInput.value == "") {
      lastname.style.display = "flex";
      lasthan.style.display = "none";
    }else if (lastNameInput.value.length < 5) {
      lastname.style.display = "none";
      lasthan.style.display = "flex";
    }else {
      lastname.style.display = "none";
      lasthan.style.display = "none";
    }
  }, 1000);
 })

 emailInput.addEventListener('click', (event) =>{
  setTimeout(() => {
    if (emailInput.value == "") {
      deyempty.style.display = "flex";
      nocorrect.style.display="none";
    }else if (!emailInput.value.match(validRegex)) {
      nocorrect.style.display="flex";
      deyempty.style.display = "none";
    }else{
      nocorrect.style.display="none";
      deyempty.style.display = "none";
    }
  }, 1000);
 })
 password.addEventListener("click", (event) =>{
    setTimeout(() => {
      if (password.value == "") {
        deyNull.style.display="flex";
        deyExceed.style.display="none";
      }else if (password.value.length < 5) {
        deyExceed.style.display="flex";
         deyNull.style.display="none";
      }else {
           deyExceed.style.display="none";
          deyNull.style.display="none";
      }
    }, 1000);
 })

 passwordConfirmation.addEventListener('click', (event) =>{
  setTimeout(() => {
      if (passwordConfirmation.value == "") {
        emptyMsg.style.display="flex";
        deyhigherMsg.style.display="none";
      }else if (!passwordConfirmation.value.match(password.value)) {
        deyhigherMsg.style.display="flex";
        emptyMsg.style.display="none";
      }else{
         deyhigherMsg.style.display="none";
        emptyMsg.style.display="none";
      }
  }, 1000);
 })

 submitBtn.addEventListener("click", (event) =>{
  
    alert("Kindly check your email for verification");
    location.reload();
 })
// form.addEventListener("click", (event) => {
//   if () {
    
//   }
// })

// funtion