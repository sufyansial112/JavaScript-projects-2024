const input = document.getElementById('input');
let imgBox = document.getElementById('img-box');
let img = document.getElementById('qrImg');



function generateQr(){
    if (input.value.length > 0){
        img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+ input.value;
        imgBox.classList.add('show-img');
    }else {
        imgBox.classList.remove('show-img')
    }
}