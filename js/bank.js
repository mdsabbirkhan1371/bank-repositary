document.getElementById('button').addEventListener('click',function(){
    const emailField = document.getElementById('emailField');
    const passwordField = document.getElementById('passwordFiled');
    const email=emailField.value;
    const password=passwordField.value;
    if(email==='mdsabbirkhan@gmail.com'&& password==='mdsabbirkhan@1371'){
        window.location.href='bank.html'
    }
    else{
       alert('your information is invalid')
    }
    
})