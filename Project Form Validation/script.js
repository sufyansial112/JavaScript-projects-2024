let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');






function validatename(){

    let name = document.getElementById('contact-name').value;

    if (name.length == 0){
        nameError.innerHTML = 'name is required';
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-za-z]*$/)){
        nameError.innerHTML = 'enter full name';
        return false
    }
    nameError.innerHTML = 'valid';
    nameError.style.color = '#008000';
    return true;
};


function validateContact(){
    let contact = document.getElementById('contact-number').value;

    if (contact.length == 0){
        phoneError.innerHTML = 'contact number is required';
        return false;
    }
    if (contact.length !== 11){
        phoneError.innerHTML = 'Phone no should be 11 digits long';
        return false;
    }
    if (!contact.match(/^[0-9]{11}$/)){
        phoneError.innerHTML = 'only digits please';
        return false;
    }else {
        phoneError.innerHTML = 'valid';
        phoneError.style.color = '#008000';
        return true;
    }
    };

    function validateEmail(){

        let email = document.getElementById('email-address').value;

        if (email.length == 0){
            emailError.innerHTML = 'email is mandatory';
            return false;
        }

        if (!email.match(/^[A-Za-z]*[[A-za-z]*$/)){
            emailError.innerHTML = 'enter complete email';
            return false
        }
        else {

            emailError.innerHTML = 'valid';
            emailError.style.color = '#008000';
            return true;

        }

    };


    function validateMessage(){

        let message = document.getElementById('message').value;
        let alphabets = 30;
        let left = alphabets - message.length;

        if ( left > 0){
            messageError.innerHTML = left + ' characters remaining';
            messageError.style.color = 'red'
            return false;
        } else {
            messageError.style.color = '#008000'
            messageError.innerHTML = 'valid';
        }

};

function validateForm(){



if(!validatename() || !validateMessage() || validateContact() || validateEmail()){
    submitError.style.display = 'block';

    submitError.innerHTML = 'please fill all fields';

    setTimeout(function(){submitError.style.display = 'none'},3000)
    submitError.style.color = 'red';
    return false;
}
else{

    submitError.innerHTML = 'Form submitted Successfully'
    submitError.style.color = '#008000';
}

}

