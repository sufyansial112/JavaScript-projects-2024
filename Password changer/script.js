const inputField = document.querySelector('.inputField');


const length = 12;
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const char = '!@#$%^&*(){}+_":?><';


// let password = "";
// password += upperCase[Math.floor(Math.random() * upperCase.length)]
// password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
// password += numbers[Math.floor(Math.random() * numbers.length)]
// password += char[Math.floor(Math.random() * char.length)]


const allChar = upperCase + lowerCase + numbers + char;

// function randomPass(length){


//     while (length > password.length){
//         password += allChar[Math.floor(Math.random() * allChar.length)]
//     }
// inputField.value = password;
// }



     function randomPAss(){
    
        
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += char[Math.floor(Math.random() * char.length)];
        while(length > password.length){
            password += allChar[Math.floor(Math.random() * allChar.length)];
        }
        inputField.value = password;
    console.log(password);
    }


    function copyPassword(){
        inputField.select();
        document.copyPassword();
    }