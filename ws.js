const ws = new WebSocket('ws://localhost:3000');
ws.onopen = onOpened;
ws.onclose = onClosed;
ws.onmessage = onMessage;

function setStatus(status) {
    const statusElement = document.getElementById('ws-status');
    statusElement.innerText = `WS status: ${status}`;
}

function getInputMessage() {
    const inputTextElement = document.getElementById('text-input');
    return inputTextElement.value;
}

function clearInput() {
    const inputTextElement = document.getElementById('text-input');
    inputTextElement.value = "";
}

function onSendButtonClick() {
    const message = getInputMessage();
    ws.send(message);
    clearInput();
}

function printMessage(message) {
    const chatAreaElement = document.getElementById('chat-area');
    chatAreaElement.append(`${message}\n`);
}

function onOpened() {
    setStatus('OPENED');
}

function onClosed() {
    setStatus('CLOSED');
}

function onMessage(response) {
    const {data} = response;
    printMessage(data);
}
