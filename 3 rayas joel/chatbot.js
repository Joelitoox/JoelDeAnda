const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

// ✅ Detecta correctamente frases como “tres rayas”, “tres en raya”, “jugar al gato”, etc.
function abreTresRayaSiAplica(texto) {
  const intent = /tres\s*(en\s*)?raya(s)?|gato/i;
  if (intent.test(texto)) {
    agregarMensaje("bot", "Abriendo el juego de Tres Rayas... 🎮");
    // ✅ “./” asegura que busque el archivo en la misma carpeta, sin importar desde dónde se abra
    window.open("./tres_rayas.html", "_blank", "noopener");
    return true;
  }
  return false;
}

function agregarMensaje(remitente, texto) {
  const msg = document.createElement("div");
  msg.classList.add("msg", remitente);
  msg.innerHTML = texto;
  chatbox.appendChild(msg);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function procesarMensaje() {
  const texto = userInput.value.trim();
  if (texto === "") return;

  agregarMensaje("user", texto);
  userInput.value = "";

  // 🔍 Detecta si el usuario quiere jugar
  if (abreTresRayaSiAplica(texto)) return;

  // Respuestas básicas
  let respuesta = "No entendí 🤔, ¿puedes repetirlo?";
  if (/hola|buenas/i.test(texto)) respuesta = "¡Hola! 😄 ¿Quieres jugar Tres Rayas?";
  if (/adiós|bye|nos vemos/i.test(texto)) respuesta = "Hasta luego 👋";

  agregarMensaje("bot", respuesta);
}

// 🎮 Eventos
sendBtn.addEventListener("click", procesarMensaje);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") procesarMensaje();
});
