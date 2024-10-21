function correctQ1() {
    document.getElementById("quesOne").innerHTML="Correct!";
}

function incorrectQ1() {
    document.getElementById("quesOne").innerHTML="Incorrect!";
}

function correctQ2() {
    document.getElementById("quesTwo").innerHTML="Correct!";
}

function incorrectQ2() {
    document.getElementById("quesTwo").innerHTML="Incorrect!";
}

function correctQ3() {
    document.getElementById("quesThree").innerHTML="Correct!";
}

function incorrectQ3() {
    document.getElementById("quesThree").innerHTML="Incorrect!";
}

function correctQ4() {
    document.getElementById("quesFour").innerHTML="Correct!";
}

function incorrectQ4() {
    document.getElementById("quesFour").innerHTML="Incorrect!";
}

function correctQ5() {
    document.getElementById("quesFive").innerHTML="Correct!";
}

function incorrectQ5() {
    document.getElementById("quesFive").innerHTML="Incorrect!";
}

function correctQ6() {
    document.getElementById("quesSix").innerHTML="Correct!";
}

function incorrectQ6() {
    document.getElementById("quesSix").innerHTML="Incorrect!";
}

function quesSeven() {
    const answerSeven = document.getElementById("quesSeven").value
    if (answerSeven === "-0.18 or -2.82") {
        document.getElementById("questSeven").innerHTML="Correct!";
    } else if (answerSeven === "-2.82 or -0.18") {
        document.getElementById("questSeven").innerHTML="Correct!";
    } else {
        document.getElementById("questSeven").innerHTML="Incorrect!";
    }
}

function quesEight() {
    const answerEight = document.getElementById("quesEight").value
    if (answerEight === "noble gases") {
        document.getElementById("questEight").innerHTML="Correct!";
    } else {
        document.getElementById("questEight").innerHTML="Incorrect!";
    }
}

const one = document.getElementById("quesOne").textContent;
const two = document.getElementById("quesTwo").textContent;
const three = document.getElementById("quesThree").textContent;
const four = document.getElementById("quesFour").textContent;
const five = document.getElementById("quesFive").textContent;
const six = document.getElementById("quesSix").textContent;
const seven = document.getElementById("questSeven").textContent;
const eight = document.getElementById("questEight").textContent;

if (one == "Correct!" && two == "Incorrect!" && three == "Correct!" && four == "Correct!" && five == "Incorrect!" && six == "Incorrect!" && seven == "Incorrect!" && eight == "Correct!") {
    document.getElementById("secretPage").style.visibility = "visible";
    document.getElementById("secretPage").style.display="inline";
}