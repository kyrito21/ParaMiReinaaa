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

function handleNoClick() {
    const noButton = document.querySelector('.nop-button');
    const yesButton = document.querySelector('.sipp-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(sippButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
