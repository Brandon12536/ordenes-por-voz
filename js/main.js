const messages = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  messages.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  if (e.results[0].isFinal) {
    if (text.includes("lobo prende foco uno")) {
      document.getElementById("led").checked = true;
      document.querySelector(".bulb").style.background =
        "url(../img/bulb_on.jpg)";
    }
    if (text.includes("lobo apaga foco uno")) {
      document.getElementById("led").checked = false;
      document.querySelector(".bulb").style.background =
        "url(../img/bulb_off.jpg)";
    }
    if (text.includes("lobo prende foco dos")) {
      document.getElementById("diodo").checked = true;
      document.querySelector(".bulb1").style.background =
        "url(../img/bulb_on.jpg)";
    }
    if (text.includes("lobo apaga foco dos")) {
      document.getElementById("diodo").checked = false;
      document.querySelector(".bulb1").style.background =
        "url(../img/bulb_off.jpg)";
    }
    if (text.includes("lobo prende foco tres")) {
      document.getElementById("diodo1").checked = true;
      document.querySelector(".bulb2").style.background =
        "url(../img/bulb_on.jpg)";
    }
    if (text.includes("lobo apaga foco tres")) {
      document.getElementById("diodo1").checked = false;
      document.querySelector(".bulb2").style.background =
        "url(../img/bulb_off.jpg)";
    }

    if (text.includes("lobo apaga foco cuatro")) {
      document.getElementById("luz").checked = false;
      document.querySelector(".bulb3").style.background =
        "url(../img/bulb_off.jpg)";
    }
    if (text.includes("lobo prende foco cuatro")) {
      document.getElementById("luz").checked = true;
      document.querySelector(".bulb3").style.background =
        "url(../img/bulb_on.jpg)";
    }

    if (text.includes("lobo apaga foco cinco")) {
      document.getElementById("foquito").checked = false;
      document.querySelector(".bulb4").style.background =
        "url(../img/bulb_off.jpg)";
    }
    if (text.includes("lobo prende foco cinco")) {
      document.getElementById("foquito").checked = true;
      document.querySelector(".bulb4").style.background =
        "url(../img/bulb_on.jpg)";
    }

    if (text.includes("lobo")) {
      const audio = document.getElementById("linux-sound");
      audio.play();
    }
    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
