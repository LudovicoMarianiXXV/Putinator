function goHome() {
  window.location.href = "index.html";
}

function goHome2() {
  window.location.href = "../index.html";
}

function openGame() {
  window.location.href = "pag/game.html";
}

function openCharacters() {
  window.open("pag/characters.html", "_blank");
}

// Mostra la scheda laterale al caricamento della pagina
window.addEventListener("load", () => {
  const sideCard = document.querySelector(".side-card");
  setTimeout(() => {
    sideCard.classList.add("open");
  }, 500);
});

let remainingCharacters = [...characters];  
let askedQuestions = [];
let askedTypes = new Set();

function startGame() {
  console.log("Gioco avviato");
  askedQuestions = [];  // Reset delle domande
  askedTypes.clear(); // Reset dei tipi di domande già fatte
  remainingCharacters = [...characters];  // Reset dei personaggi
  let firstQuestion = getRandomQuestion(); // Ottieni la prima domanda
  if (firstQuestion) {
    displayQuestion(firstQuestion); // Mostra la prima domanda
  } else {
    console.log("Nessuna domanda disponibile.");
  }
}

function getRandomQuestion() {
  var remainingQuestions = questions.filter(q => !askedQuestions.includes(q.id) && !askedTypes.has(q.type));
  if (remainingQuestions.length > 0) {
    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    return remainingQuestions[randomIndex];
  }
  return null; // Restituisce null se non ci sono più domande
}

function displayQuestion(question) {
  console.log("Visualizza domanda:", question.question);
  document.getElementById("question").innerText = question.question;
  document.getElementById("yes").onclick = function () {
    handleAnswer("yes", question);
  };
  document.getElementById("no").onclick = function () {
    handleAnswer("no", question);
  };
  document.getElementById("dontKnow").onclick = function () {
    handleAnswer("dontKnow", question);
  };
}

function handleAnswer(answer, question) {
  console.log(`Risposta alla domanda ${question.id}: ${answer}`);
  askedQuestions.push(question.id); // Aggiungi la domanda alla lista delle domande già fatte
  askedTypes.add(question.type); // Aggiungi il tipo alla lista dei tipi già usati
  updateCharacters(answer, question.id); // Filtra i personaggi in base alla risposta
  let nextQuestion = getRandomQuestion(); // Prendi la prossima domanda

  if (nextQuestion) {
    displayQuestion(nextQuestion); // Mostra la nuova domanda
  } else {
    displayResult(); // Mostra il risultato finale quando non ci sono più domande
  }
}

function updateCharacters(answer, questionId) {
  if (answer === "dontKnow") {
    askedQuestions = askedQuestions.filter(qid => qid !== questionId);
    return;
  }
  
  switch(questionId) {
    case "1":
      remainingCharacters = remainingCharacters.filter(c => (answer === "yes" ? c.era === "pre-19" : c.era !== "pre-19"));
      break;
    case "2":
      remainingCharacters = remainingCharacters.filter(c => (answer === "yes" ? c.era === "19" : c.era !== "19"));
      break;
    case "3":
      remainingCharacters = remainingCharacters.filter(c => (answer === "yes" ? c.era === "20" : c.era !== "20"));
      break;
    case "4":
      remainingCharacters = remainingCharacters.filter(c => (answer === "yes" ? c.alive === true : c.alive === false));
      break;
    case "5":
      remainingCharacters = remainingCharacters.filter(c => (answer === "yes" ? c.field === "Arte" : c.field !== "Arte"));
      break;
    case "6":
      remainingCharacters = remainingCharacters.filter(c => (answer === "yes" ? c.gender === "female" : c.gender !== "female"));
      break;
    case "7":
      remainingCharacters = remainingCharacters.filter(c => (answer === "yes" ? c.region === "Europa" : c.region !== "Europa"));
      break;
    case "8":
      remainingCharacters = remainingCharacters.filter(c => (answer === "yes" ? c.nation_b === "USA" : c.nation_b !== "USA"));
      break;
  }
}

// Funzione per visualizzare il risultato
function displayResult() {
  if (remainingCharacters.length === 1) {
    let character = remainingCharacters[0];
    document.getElementById("result").innerText = `Il personaggio che stai pensando è: ${character.name}`;
  } else if (remainingCharacters.length > 1) {
    document.getElementById("result").innerText = "Non sono riuscito a indovinare il personaggio. Riprova!";
  } else {
    document.getElementById("result").innerText = "Nessun personaggio corrisponde alle risposte fornite.";
  }
}

// Avvio del gioco
document.addEventListener("DOMContentLoaded", function () {
  startGame();
});
