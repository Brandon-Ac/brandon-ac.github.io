const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

function appendMessage(sender, message) {
  const messageElement = document.createElement("div");
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const message = userInput.value.trim();
  if (message !== "") {
    appendMessage("Tú", message);
    userInput.value = "";

    // Simulación de respuesta
    setTimeout(() => {
      appendMessage("Bot", "Respuesta automática...");
    }, 500);
  }
}
