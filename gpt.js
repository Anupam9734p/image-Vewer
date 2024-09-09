function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');

    const userMessage = userInput.value;
    if (userMessage.trim() === '') return;

    const userMessageElement = document.createElement('div');
    userMessageElement.className = 'message user-message';
    userMessageElement.textContent = userMessage;
    chatBox.appendChild(userMessageElement);

    userInput.value = '';

    setTimeout(() => {
        const botMessageElement = document.createElement('div');
        botMessageElement.className = 'message bot-message';
        botMessageElement.textContent = getBotResponse(userMessage);
        chatBox.appendChild(botMessageElement);

        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
}

function getBotResponse(userMessage) {

    const responses = {
        'hello': 'Hi there!',
        'how are you': 'I\'m just a bot, but I\'m doing well!',
        'bye': 'Goodbye! Have a great day!',
    };

    const lowerCaseMessage = userMessage.toLowerCase();
    return responses[lowerCaseMessage] || 'Sorry, I didn\'t understand that.';
}
