function goHome() {
  window.location.href = "index.html";
}

function goHome2() {
  window.location.href = "../index.html";
}

function openGame() {
    window.location.href = "pag/game.html";
}

function openGame2() {
    window.location.href = "../pag/game.html";
}
  
function openCharacters() {
    window.open("pag/characters.html", "_blank");
}
  
  window.addEventListener("load", function() {
    var sideCard = document.querySelector(".side-card");
    if (sideCard) {
      setTimeout(function() {
        sideCard.classList.add("open");
      }, 500);
    }
  });
  
  // --- Gioco ---
  
  var remainingCharacters = characters.slice();
  var askedQuestions = [];
  var askedTypes = new Set();
  var currentQuestions = base_questions.slice();
  var alternativeQuestions = [];
  var nextPhase = false;
  
  function startGame() {
    askedQuestions = [];
    askedTypes.clear();
    remainingCharacters = characters.slice();
    currentQuestions = base_questions.slice();
    alternativeQuestions = currentQuestions.slice(); 
    nextPhase = false;
    var firstQuestion = getRandomQuestion();
    if (firstQuestion) {
      displayQuestion(firstQuestion);
    } else {
      console.log("Nessuna domanda disponibile.");
    }
  }
  
  function getRandomQuestion() {
    var remainingQuestionsFiltered = currentQuestions.filter(function(q) {
      return askedQuestions.indexOf(q.id) === -1 && !askedTypes.has(q.type);
    });
  
    if (remainingQuestionsFiltered.length > 0) {
      var randomIndex = Math.floor(Math.random() * remainingQuestionsFiltered.length);
      return remainingQuestionsFiltered[randomIndex];
    }
  
    if (!nextPhase) {
      nextPhase = true;
      currentQuestions = questions.slice();
      alternativeQuestions = questions.slice(); 
      return getRandomQuestion();
    }
  
    return null;
  }
  
  function displayQuestion(question) {
    document.getElementById("question").innerText = question.question;
    document.getElementById("yes").onclick = function() {
      handleAnswer("yes", question);
    };
    document.getElementById("no").onclick = function() {
      handleAnswer("no", question);
    };
    document.getElementById("dontKnow").onclick = function() {
      handleAnswer("dontKnow", question);
    };
  }
  
  function handleAnswer(answer, question) {
    askedQuestions.push(question.id);
    askedTypes.add(question.type);
  
    updateCharacters(answer, question);
  
    if (answer === "yes") {
      alternativeQuestions = alternativeQuestions.filter(function(q) {
        return q.type !== question.type;
      });
    } else {
      alternativeQuestions = alternativeQuestions.filter(function(q) {
        return q.id !== question.id;
      });
    }
  
    var nextQuestion = getRandomQuestion();
  
    if (remainingCharacters.length <= 1) {
      displayResult();
      return;
    }
  
    if (nextQuestion) {
      displayQuestion(nextQuestion);
    } else if (alternativeQuestions.length > 0) {
      var randomIndex = Math.floor(Math.random() * alternativeQuestions.length);
      var altQuestion = alternativeQuestions.splice(randomIndex, 1)[0];
      displayQuestion(altQuestion);
    } else {
      displayResult();
    }
  }
  
  function updateCharacters(answer, question) {
    if (answer === "dontKnow") {
      askedQuestions = askedQuestions.filter(function(qid) {
        return qid !== question.id;
      });
      return;
    }
  
    remainingCharacters = remainingCharacters.filter(function(character) {
      if (answer === "yes") {
        if (Array.isArray(character[question.type])) {
          return character[question.type].indexOf(question.value) !== -1;
        } else {
          return character[question.type] === question.value;
        }
      } else {
        if (Array.isArray(character[question.type])) {
          return character[question.type].indexOf(question.value) === -1;
        } else {
          return character[question.type] !== question.value;
        }
      }
    });
  }
  
  function displayResult() {
    var resultData = {};
  
    if (remainingCharacters.length === 1) {
      resultData.guessed = true;
      resultData.character = remainingCharacters[0];
    } else {
      resultData.guessed = false;
      resultData.message = "Non ce l'ho fatta, mi hai battuto";
    }
  
    localStorage.setItem("gameResult", JSON.stringify(resultData));
    window.location.href = "result.html";
  }
  
  document.addEventListener("DOMContentLoaded", startGame);

  
