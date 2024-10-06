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
    } else if (answerSeven === "-2.82 or -0.18"){
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

function macbeth() {
    document.getElementById("actScene51").innerHTML="The play begins with the brief appearance of a trio of witches and then moves to a military camp, where the Scottish King Duncan hears the news that his generals, Macbeth and Banquo, have defeated two separate invading armies—one from Ireland, led by the rebel Macdonwald, and one from Norway. Following their pitched battle with these enemy forces, Macbeth and Banquo encounter the witches as they cross a moor. The witches prophesy that Macbeth will be made thane (a rank of Scottish nobility) of Cawdor and eventually King of Scotland. They also prophesy that Macbeth’s companion, Banquo, will beget a line of Scottish kings, although Banquo will never be king himself."
    document.getElementById("actScene52").innerHTML="The witches vanish, and Macbeth and Banquo treat their prophecies skeptically until some of King Duncan’s men come to thank the two generals for their victories in battle and to tell Macbeth that he has indeed been named thane of Cawdor. The previous thane betrayed Scotland by fighting for the Norwegians and Duncan has condemned him to death. Macbeth is intrigued by the possibility that the remainder of the witches’ prophecy—that he will be crowned king—might be true, but he is uncertain what to expect. He visits with King Duncan, and they plan to dine together at Inverness, Macbeth’s castle, that night. Macbeth writes ahead to his wife, Lady Macbeth, telling her all that has happened."
    document.getElementById("hide1").style.visibility = "hidden";
    document.getElementById("hide1").style.display="none"
    document.getElementById("hide2").style.visibility = "visible";
}

function showLess1() {
    document.getElementById("actScene51").innerHTML="The play begins with the brief appearance of a trio of witches and then moves to a military camp, where the Scottish King Duncan hears the news that his generals, Macbeth and Banquo, have defeated two separate invading armies—one from Ireland, led by the rebel Macdonwald, and one from Norway..."
    document.getElementById("actScene52").innerHTML=""
    document.getElementById("hide1").style.visibility = "visible";
    document.getElementById("hide2").style.visibility = "hidden";
    document.getElementById("hide2").style.display="inline"
}