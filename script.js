function validateName(){
    let nameError = document.getElementById('username-error')
    let name = document.getElementById('username')

    if(name.value.trim()== ''){
        nameError.innerHTML='username cannot be blank'
        return false
    }else if(name.value.length<5){
        nameError.innerHTML = 'username must not be less than 5 characters'
        return false

    }
    else{
        nameError.innerHTML = ''
        return true
    }
}

function validateEmail(){
    let email = document.getElementById('email')
    let emailError = document.getElementById('email-error')

    let regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
    if(email.value.trim() ==''){
        emailError.innerHTML = 'Email cannot be blank!!'
        return false
    }else if(!email.value.match(regEx)){
        emailError.innerHTML = "Email not in global format"
        return false
    }else{
        emailError.innerHTML =''
        return true
    }
}

function validatePassword(){
    let password = document.getElementById('password')
    let passwordError = document.getElementById('password-error')

    
    if(password.value.length <4){
        passwordError.innerHTML = "Password is Weak";
        passwordError.style.color = "red"
        return false
    }
    else if(password.value.length >=4 && password.value.length<8){
        passwordError.innerHTML = "Password is Medium";
        passwordError.style.color = "orange"
        return false
    }
    else if(password.value.length >=8 || password.value.length<20){
        passwordError.innerHTML = "Password is Strong";
        passwordError.style.color = "green"
        return true
    }
    else{
        passwordError.innerHTML = ''
        return true
    } 
    
}

function validateConfirm(){
    let password = document.getElementById('password')
    let confirmPassword = document.getElementById('Confirm')
    let confirmError = document.getElementById('Confirm-error')

    if(password.value != confirmPassword.value){
        confirmError.innerHTML = 'Password mismatch'
        return false
    }else{
        confirmError.innerHTML = ''
        return true
    }
}

function validateForm(){
    let submitError = document.getElementById('submit-error')
    if(!validateEmail()|| !validateName()|| !validatePassword()|| !validateConfirm()){
        submitError.innerHTML = 'Please resolve the errors'
        return false
    }else{
        submitError.innerHTML = ''
        return true
    }
}

function validateLoginEmail(){
    let loginError = document.getElementById('login-error')
    if(!validateEmail()){
        loginError.innerHTML = 'Please type your registerd Email'
        return false
    }else{
        loginError.innerHTML =''
        return true
    }
    
}    