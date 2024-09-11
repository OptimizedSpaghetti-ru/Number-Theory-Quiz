function checkMCQ(buttonID) {
  const correctButtons = [
    "#correct",
    "#correct1",
    "#correct2",
    "#correct3",
    "#correct4",
  ];

  const buttonElement = document.querySelector(buttonID);
  if (buttonElement) {
    buttonElement.onclick = function () {
      if (correctButtons.includes(buttonID)) {
        buttonElement.style.backgroundColor = "green";
        document.querySelector("#mcqResponse").innerHTML = "Correct!";
      } else {
        buttonElement.style.backgroundColor = "red";
        document.querySelector("#mcqResponse").innerHTML = "Incorrect";
      }
      // Disable the button after it is clicked
      buttonElement.disabled = true;
    };
  } else {
    console.error(`Button with ID ${buttonID} not found.`);
  }
}

checkMCQ("#wrong1");
checkMCQ("#wrong2");
checkMCQ("#wrong3");
checkMCQ("#wrong4");
checkMCQ("#wrong5");
checkMCQ("#wrong6");
checkMCQ("#wrong7");
checkMCQ("#wrong8");
checkMCQ("#wrong9");
checkMCQ("#wrong10");

checkMCQ("#correct");
checkMCQ("#correct1");
checkMCQ("#correct2");
checkMCQ("#correct3");
checkMCQ("#correct4");

document.querySelector("#checkButton1").onclick = function () {
  const answerField = document.querySelector("#answerField1");
  const checkButton = document.querySelector("#checkButton1");

  if (answerField.disabled) {
    return;
  }

  const answer = answerField.value.trim().toLowerCase();
  const correctAnswers = ["fermat", "pierre de fermat"];
  if (correctAnswers.includes(answer)) {
    answerField.style.backgroundColor = "green";
    document.querySelector("#freeResponse1").innerHTML = "Correct!";
  } else {
    answerField.style.backgroundColor = "red";
    document.querySelector("#freeResponse1").innerHTML = "Incorrect";
  }

  answerField.disabled = true;
  checkButton.disabled = true;
};

document.querySelector("#checkButton2").onclick = function () {
  const answerField = document.querySelector("#answerField2");
  const checkButton = document.querySelector("#checkButton2");

  if (answerField.disabled) {
    return;
  }

  const answer = answerField.value.trim().toLowerCase();
  const correctAnswers = ["marin mersenne", "mersenne"];
  if (correctAnswers.includes(answer)) {
    answerField.style.backgroundColor = "green";
    document.querySelector("#freeResponse2").innerHTML = "Correct!";
  } else {
    answerField.style.backgroundColor = "red";
    document.querySelector("#freeResponse2").innerHTML = "Incorrect";
  }

  answerField.disabled = true;
  checkButton.disabled = true;
};

document.querySelector("#checkButton3").onclick = function () {
  const answerField = document.querySelector("#answerField3");
  const checkButton = document.querySelector("#checkButton3");

  if (answerField.disabled) {
    return;
  }

  const answer = answerField.value.trim().toLowerCase();
  const correctAnswers = ["counting numbers" || "counting number"];
  if (correctAnswers.includes(answer)) {
    answerField.style.backgroundColor = "green";
    document.querySelector("#freeResponse3").innerHTML = "Correct!";
  } else {
    answerField.style.backgroundColor = "red";
    document.querySelector("#freeResponse3").innerHTML = "Incorrect";
  }

  answerField.disabled = true;
  checkButton.disabled = true;
};

document.querySelector("#checkButton4").onclick = function () {
  const answerField = document.querySelector("#answerField4");
  const checkButton = document.querySelector("#checkButton4");

  if (answerField.disabled) {
    return;
  }

  const answer = answerField.value.trim().toLowerCase();
  const correctAnswers = ["mersenne prime" || "mersenne primes"];
  if (correctAnswers.includes(answer)) {
    answerField.style.backgroundColor = "green";
    document.querySelector("#freeResponse4").innerHTML = "Correct!";
  } else {
    answerField.style.backgroundColor = "red";
    document.querySelector("#freeResponse4").innerHTML = "Incorrect";
  }

  answerField.disabled = true;
  checkButton.disabled = true;
};

document.querySelector("#checkButton5").onclick = function () {
  const answerField = document.querySelector("#answerField5");
  const checkButton = document.querySelector("#checkButton5");

  if (answerField.disabled) {
    return;
  }

  const answer = answerField.value.trim().toLowerCase();
  const correctAnswers = ["number theory"];
  if (correctAnswers.includes(answer)) {
    answerField.style.backgroundColor = "green";
    document.querySelector("#freeResponse5").innerHTML = "Correct!";
  } else {
    answerField.style.backgroundColor = "red";
    document.querySelector("#freeResponse5").innerHTML = "Incorrect";
  }

  answerField.disabled = true;
  checkButton.disabled = true;
};
