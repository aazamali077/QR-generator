let imgBox = document.getElementById("img-box");
let qrImage = document.getElementById("qrImage");
let QRText = document.getElementById("qrText");
let downloadQR = document.getElementById("downloadBtn");



function generateQR(){
    if(QRText.value.length>0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QRText.value;
        imgBox.classList.add("show-img");
        downloadQR.style.visibility = 'visible';
    }
    else{
        //QRText.placeholder = "Empty text";
        QRText.classList.add('error');
        setTimeout(()=>{
            QRText.classList.remove('error');
        }, 800);
    }
   
}

function downloadQRFunc() {
    // Create a temporary link to download the QR image
    const link = document.createElement('a');
    link.href = qrImage.src;
    link.download = 'QR_Code.png'; // Set the download file name
    link.click(); // Programmatically click the link to trigger download
}