// Función para mostrar/ocultar el chat
function toggleChat() {
    const chatContainer = document.getElementById('chat-container');
    const openChatBtn = document.getElementById('open-chat-btn');

    if (chatContainer.style.right === '20px') {
        chatContainer.style.right = '-320px'; // Ocultar chat
        openChatBtn.style.display = 'block';  // Mostrar botón de abrir
    } else {
        chatContainer.style.right = '20px';   // Mostrar chat
        openChatBtn.style.display = 'none';   // Ocultar botón de abrir
    }
}
