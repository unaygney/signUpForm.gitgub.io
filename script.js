const input = document.getElementById('email')
const error = document.getElementById('error')
const inputArea = document.getElementById('email')
const paragraph = document.getElementById('success-text')



function getValidate(){
    let email = input.value
    let emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValidEmail = emailRegex.test(email);
    localStorage.setItem('email' , email)

    if(isValidEmail){
       window.location.href = 'success.html'
 
 

    } else{
        error.classList.add('active')
        inputArea.style.border = '1px solid red'
        inputArea.style.background = '#F9716C'

    }

}

window.addEventListener('DOMContentLoaded', function() {
    let email = localStorage.getItem('email');
    if (email) {
        let successText = document.getElementById('success-text');
        successText.innerHTML = `A confirmation email has been sent to <b>${email}</b>. Please open it and click the button inside to confirm your subscription.`;
    } else{
        successText.innerHTML = `Beklenmedik bir hata oluştu.`;
    }
});


window.addEventListener('DOMContentLoaded' , function() {
    let imageAtt = document.getElementById('image');
    let newSrc = './images/illustration-sign-up-mobile.svg'
    function handleResize() {
        if (window.innerWidth <= 478) {
            imageAtt.setAttribute('src' , newSrc )
        } else{
            imageAtt.setAttribute('src' , './images/illustration-sign-up-desktop.svg'  )
        }
    }

    handleResize();

    window.addEventListener('resize' , handleResize);
})
