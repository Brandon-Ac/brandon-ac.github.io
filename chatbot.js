const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

let inactivityAlertTimer;
let inactivityResetTimer;

function resetInactivityTimers() {
  clearTimeout(inactivityAlertTimer);
  clearTimeout(inactivityResetTimer);

  inactivityAlertTimer = setTimeout(() => {
    addMessage("¿Sigues ahí? Han pasado 2 minutos sin actividad.", "bot", true);
  }, 2 * 60 * 1000);

  inactivityResetTimer = setTimeout(() => {
    addMessage("Sesión finalizada por inactividad. Chat limpiado automáticamente.", "bot", true);
    setTimeout(() => {
      chatBox.innerHTML = "";
    }, 3000);
  }, 5 * 60 * 1000);
}

function addMessage(text, sender, italic = false) {
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.innerHTML = `
    <div class="bubble ${sender}-bubble${italic ? ' italic' : ''}">
      <span>${italic ? `<em>${text}</em>` : text}</span>
    </div>
  `;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

resetInactivityTimers();

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  resetInactivityTimers();

  const pregunta = input.value.trim();
  if (!pregunta) return;

  addMessage(pregunta, "user");
  input.value = "";

  const typingId = `typing-${Date.now()}`;
  const typingMsg = document.createElement("div");
  typingMsg.className = "message bot";
  typingMsg.id = typingId;
  typingMsg.innerHTML = `
    <div class="bubble bot-bubble typing">
      Dame un segundo<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>
    </div>
  `;
  chatBox.appendChild(typingMsg);
  chatBox.scrollTop = chatBox.scrollHeight;

  try {
    const response = await fetch("http://127.0.0.1:8000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pregunta })
    });

    const data = await response.json();
    typingMsg.innerHTML = `
      <div class="bubble bot-bubble">
        <span>${data.respuesta}</span>
      </div>
    `;
  } catch (error) {
    typingMsg.innerHTML = `
      <div class="bubble bot-bubble error">
        <span><strong>Error:</strong> No se pudo conectar al servidor.</span>
      </div>
    `;
  }

  chatBox.scrollTop = chatBox.scrollHeight;
});

input.addEventListener("keydown", resetInactivityTimers);
chatBox.addEventListener("scroll", resetInactivityTimers);

// Estrellas dinámicas
const starsContainer = document.querySelector(".stars");
for (let i = 0; i < 50; i++) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.animationDelay = `${Math.random() * 5}s`;
  starsContainer.appendChild(star);
}
