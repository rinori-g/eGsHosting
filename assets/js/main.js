// NAVBAR change color while scroll //

$(document).ready(function(){
    var scroll_start = 0;
    var startchange = $('.banner-scroll');
    var offset = startchange.offset();
    $(document).scroll(function(){
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $('.main-header').css('background-color', 'rgba(0,0,0, 0.7)');
        } else {
            $('.main-header').css('background-color', 'transparent');
        }
    });
});

// Mobile nav //

var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

for(var i = 0; i < selectPlanButtons.length; i++)
{
    selectPlanButtons[i].addEventListener('click', function() 
    {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // modal.className = "open"; override the complete class list
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

backdrop.addEventListener("click", function() {
    mobileNav.classList.remove('open');
    closeModal();
});
if(modalNoButton) {

    modalNoButton.addEventListener("click", closeModal);
}

function closeModal()
{
    if(modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}
toggleButton.addEventListener("click", function() {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});

 function validate() {
     var firstname = document.registerform.firstname.value;
     var lastname = document.registerform.lastname.value;
     var email = document.registerform.email.value;
     var mobile = document.registerform.mobile.value;
     var password = document.registerform.password.value;
     var confirmpassword = document.registerform.confirmpassword.value;
     
     
     if(firstname == "" || lastname == "" || email == "" || mobile == "" || password == "") {
         alert("Please fill out fields!");
         return false;
     }
     else if(password.length < 6) {
             alert("Password length should be minimum 6!");
             return false;
         }
    
     else {
         if(password != confirmpassword) {
             alert("Passwords don't match!");
             return false;
         }
     }
     if(/^([\+]?[0-9]{1}[0-9]{0,2})[\s-]?[\(]?(0?[0-9]\d{0,4}[\)]?[-\s]?)([0-9][\d-\s]{5,7}[\s]?)(x[\d-]{0,4})?$/g.test(mobile)) {
        return true;
    }
    else {
        alert("Invalid mobile number!");
        return false;
    }
 }

