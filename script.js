const messages = [
    "Estas seguraaa?",
    "Realmente segura??",
    "Puedes ser mas positiva >:c?",
    "Mi amoor porfavoor...",
    "Solo piénsalo un ratico",
    "Usted me dice que no, y lloro...",
    "me estoy poniendo muy triste...",
    "me estoy poniendo demasiado demasiado demasiadoo triste...",
    "Ok esta bien, voy a dejar de preguntar...",
    "era broma JAKSJA, solo di que si egh ❤️"
];

let messageIndex = 0;

function handleNopClick() {
    const noButton = document.querySelector('.Nop-button');
    const yesButton = document.querySelector('.Sipp-button');
    NopButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(SippButton).fontSize);
    SippButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleSippClick() {
    window.location.href = "yes_page.html";
}
