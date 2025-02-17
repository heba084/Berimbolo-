
        let speechSynthesisInstance = null;

        function speak() {
            const speach = new SpeechSynthesisUtterance();
            const thetext = document.getElementById("Firsttext").textContent;
            speach.text = thetext;
            speechSynthesisInstance = window.speechSynthesis;
            speechSynthesisInstance.speak(speach);
        }

       
  // عند المرور على الصورة التي تحتوي على الرابط تظهر الرسالة
  function showMessage(event) {
    const message = event.currentTarget.querySelector('.message');
    message.style.display = 'block';
}

// عند مغادرة الصورة تختفي الرسالة
function hideMessage(event) {
    const message = event.currentTarget.querySelector('.message');
    message.style.display = 'none';
}