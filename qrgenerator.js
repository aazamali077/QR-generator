let imgBox = document.getElementById("img-box");
let qrImage = document.getElementById("qrImage");
let QRText = document.getElementById("qrText");


function generateQR(){
    if(QRText.value.length>0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QRText.value;
        imgBox.classList.add("show-img");
    }
    else{
        //QRText.placeholder = "Empty text";
        QRText.classList.add('error');
        setTimeout(()=>{
            QRText.classList.remove('error');
        }, 800);
    }
   
}