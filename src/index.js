console.log('Hello From JS');
const form = document.querySelector("form");
const input = document.getElementsByClassName('.form-title');
const lastName = document.getElementById('last-name');
const passwordConfirmation = document.getElementById('password-confirm');
passwordConfirmation.addEventListener("input", (event) => {
    const password = document.getElementById('password');
    if (password.value !== passwordConfirmation.value){
        console.log('pass are not equal: '+password.value+' : '+ passwordConfirmation.value);
        password.className = 'invalid';
        passwordConfirmation.className = 'invalid';
    }else{
        password.className = 'valid';
        passwordConfirmation.className = 'valid';
    }

    
    // if the email field is valid, we let the form submit
    // if (!email.validity.valid) {
    //   // If it isn't, we display an appropriate error message
    //   showError();
    //   // Then we prevent the form from being sent by canceling the event
    //   event.preventDefault();
    // }
  });
