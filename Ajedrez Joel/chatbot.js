const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

function abrirAjedrezSiAplica(texto) {
  const intent = /ajedrez|juguemos\s*ajedrez|vamos\s*a\s*jugar\s*ajedrez/i;
  if (intent.test(texto)) {
    agregarMensaje("bot", "Abriendo el tablero de Ajedrez ♟️...");
    window.open("./ajedrez.html", "_blank", "noopener");
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

  if (abrirAjedrezSiAplica(texto)) return;

  let respuesta = "No entendí 🤔, prueba con: Juguemos ajedrez";
  if (/hola|buenas/i.test(texto)) respuesta = "¡Hola! 😄 ¿Listo para jugar ajedrez?";
  if (/adiós|bye|nos vemos/i.test(texto)) respuesta = "Hasta luego 👋";

  agregarMensaje("bot", respuesta);
}

sendBtn.addEventListener("click", procesarMensaje);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") procesarMensaje();
});
