# 📱 QR Code Generator

A simple web application to generate QR codes for any text or URL in seconds!

## 🌟 Features

- Input any text or URL to generate a QR code.
- Interactive UI with clean design.
- Error handling for empty input fields.
- Uses the [QR Code Generator API](https://goqr.me/api/).

## 🚀 How to Use

1. **Enter your text or URL**:  
   Type the desired text or link in the input box provided on the webpage.

2. **Generate QR Code**:  
   Click the "Generate QR Code" button to instantly create a QR code.

3. **View Your QR Code**:  
   Your QR code will appear below the input box once generated.

## 🛠️ Project Structure

- **index.html**:  
  The main structure of the web page. It includes the input field, the button to generate the QR code, and a section to display the generated QR code.
- **style.css**:  
  The styles for the page, giving it a clean and user-friendly look. This file ensures proper spacing, button design, and responsive layout.
- **qrgenerator.js**:  
  JavaScript file responsible for handling the QR code generation. It fetches the QR code from the API and displays it on the page.

## 📦 Installation

No installation required! Simply open the `index.html` file in your browser, and you're ready to start generating QR codes.

## 🔧 How It Works

1. When the button is clicked, the JavaScript function `generateQR()` is triggered.
2. The text entered in the input box is sent to the [QR Server API](https://api.qrserver.com/) to generate the QR code image.
3. If the input field is empty, an error animation is triggered to prompt the user to enter some text.

## ⚙️ Technologies Used

- **HTML** for structure.
- **CSS** for styling and layout.
- **JavaScript** for dynamic QR code generation using the [QR Code Generator API](https://goqr.me/api/).

## 🖼️ Demo

![QR Code Generator](https://via.placeholder.com/150)

Try it yourself by entering any text or URL and clicking "Generate QR Code."

## 🎨 Styling

The design uses a modern and minimal approach with soft shadows and a responsive layout for different screen sizes.

## 🤔 Issues or Suggestions?

Feel free to open an issue or submit a pull request!

---

Made with 💻 and ☕ by [Your Name].
