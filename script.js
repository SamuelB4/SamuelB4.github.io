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

function macbeth() {
    document.getElementById("actScene1").innerHTML="The play begins with the brief appearance of a trio of witches and then moves to a military camp, where the Scottish King Duncan hears the news that his generals, Macbeth and Banquo, have defeated two separate invading armies—one from Ireland, led by the rebel Macdonwald, and one from Norway. Following their pitched battle with these enemy forces, Macbeth and Banquo encounter the witches as they cross a moor. The witches prophesy that Macbeth will be made thane (a rank of Scottish nobility) of Cawdor and eventually King of Scotland. They also prophesy that Macbeth’s companion, Banquo, will beget a line of Scottish kings, although Banquo will never be king himself."
    document.getElementById("actScene2").innerHTML="The witches vanish, and Macbeth and Banquo treat their prophecies skeptically until some of King Duncan’s men come to thank the two generals for their victories in battle and to tell Macbeth that he has indeed been named thane of Cawdor. The previous thane betrayed Scotland by fighting for the Norwegians and Duncan has condemned him to death. Macbeth is intrigued by the possibility that the remainder of the witches’ prophecy—that he will be crowned king—might be true, but he is uncertain what to expect. He visits with King Duncan, and they plan to dine together at Inverness, Macbeth’s castle, that night. Macbeth writes ahead to his wife, Lady Macbeth, telling her all that has happened."
    document.getElementById("hide1").style.visibility = "hidden";
    document.getElementById("hide1").style.display="none"
    document.getElementById("hide2").style.visibility = "visible";
    document.getElementById("hide2").style.display="inline"
}

function showLess1() {
    document.getElementById("actScene1").innerHTML="The play begins with the brief appearance of a trio of witches and then moves to a military camp, where the Scottish King Duncan hears the news that his generals, Macbeth and Banquo, have defeated two separate invading armies—one from Ireland, led by the rebel Macdonwald, and one from Norway..."
    document.getElementById("actScene2").innerHTML=""
    document.getElementById("hide1").style.visibility = "visible";
    document.getElementById("hide1").style.display="inline"
    document.getElementById("hide2").style.visibility = "hidden";
    document.getElementById("hide2").style.display="none"
}

function anInspectorCalls() {
    document.getElementById("inspectorCalls1").innerHTML="An Inspector Calls is a play in three acts, set in Brumley, an English manufacturing town, in 1912. Arthur Birling has convened a dinner for the engagement of his daughter, Sheila, to her boyfriend, Gerald Croft. Arthur and his wife Sybil seem happy, although Sybil is reserved at the meal. Eric, Sheila’s brother, drinks heavily and appears mildly upset. Gerald gives Sheila her ring, and Sheila and Sybil leave the room to try on wedding clothes. Eric goes upstairs. Arthur tells Gerald he knows the Croft family considers themselves social superiors of the Birlings, but that’s easily remedied, he says, as he expects a knighthood for his business successes. Gerald promises to relay the news to his mother. Eric returns, and Arthur gives the two young men advice about professional life, saying that people ought to look out for themselves and their families, and not fall prey to socialist propaganda about the collective good. Edna, the maid, announces that an Inspector Goole is here to speak to Arthur."
    document.getElementById("inspectorCalls2").innerHTML="The Inspector, whom Arthur does not know despite his positions in local government, announces that a girl named Eva Smith has died of an apparent suicide. The Inspector asks Arthur if he knows anyone by that name. Arthur initially denies it, but after seeing a picture, he admits to employing Eva at his factory, and firing her when she incites a failed strike for higher wages. Arthur says he is not sorry for doing so, even though he is sad to hear of the girl’s death. Arthur believes that his foremost obligation is to his profits. When Sheila returns to the room, the Inspector begins interrogating her. It is revealed that Sheila got a girl fired from Milward’s, a local shop, for giving Sheila mean looks as she was trying on clothing. Sheila regrets to hear that the person she incriminated was none other than Eva Smith, and that she and Arthur are responsible, in part, for Eva’s poverty and suicide."
    document.getElementById("inspectorCalls3").innerHTML="The Inspector turns to Gerald and asks if he knows someone named Daisy Renton. Sheila realizes, from Gerald’s expression, that Gerald knows this name. When all but Sheila and Gerald leave the room, Sheila accuses Gerald of having had an affair with Daisy Renton the previous summer. Gerald admits to this. He asks Sheila to hide this information from the Inspector, but she says it won’t be possible because the Inspector probably already knows. Act One ends."
    document.getElementById("hide3").style.visibility = "hidden";
    document.getElementById("hide3").style.display="none"
    document.getElementById("hide4").style.visibility = "visible";
    document.getElementById("hide4").style.display="inline"
}

function showLess2() {
    document.getElementById("inspectorCalls1").innerHTML="An Inspector Calls is a play in three acts, set in Brumley, an English manufacturing town, in 1912. Arthur Birling has convened a dinner for the engagement of his daughter, Sheila, to her boyfriend, Gerald Croft. Arthur and his wife Sybil seem happy, although Sybil is reserved at the meal..."
    document.getElementById("inspectorCalls2").innerHTML=""
    document.getElementById("inspectorCalls3").innerHTML=""
    document.getElementById("hide3").style.visibility = "visible";
    document.getElementById("hide3").style.display="inline"
    document.getElementById("hide4").style.visibility = "hidden";
    document.getElementById("hide4").style.display="none"
}

function aChristmasCarol() {
    document.getElementById("christmasCarol1").innerHTML="A mean-spirited, miserly old man named Ebenezer Scrooge sits in his counting-house on a frigid Christmas Eve. His clerk, Bob Cratchit, shivers in the anteroom because Scrooge refuses to spend money on heating coals for a fire. Scrooge's nephew, Fred, pays his uncle a visit and invites him to his annual Christmas party. Two portly gentlemen also drop by and ask Scrooge for a contribution to their charity. Scrooge reacts to the holiday visitors with bitterness and venom, spitting out an angry 'Bah! Humbug!' in response to his nephew's 'Merry Christmas!'"
    document.getElementById("christmasCarol2").innerHTML="Later that evening, after returning to his dark, cold apartment, Scrooge receives a chilling visitation from the ghost of his dead partner, Jacob Marley. Marley, looking haggard and pallid, relates his unfortunate story. As punishment for his greedy and self-serving life his spirit has been condemned to wander the Earth weighted down with heavy chains. Marley hopes to save Scrooge from sharing the same fate. Marley informs Scrooge that three spirits will visit him during each of the next three nights. After the wraith disappears, Scrooge collapses into a deep sleep."
    document.getElementById("hide5").style.visibility = "hidden";
    document.getElementById("hide5").style.display="none"
    document.getElementById("hide6").style.visibility = "visible";
    document.getElementById("hide6").style.display="inline"
}

function showLess3() {
    document.getElementById("christmasCarol1").innerHTML="A mean-spirited, miserly old man named Ebenezer Scrooge sits in his counting-house on a frigid Christmas Eve..."
    document.getElementById("christmasCarol2").innerHTML=""
    document.getElementById("hide5").style.visibility = "visible";
    document.getElementById("hide5").style.display="inline"
    document.getElementById("hide6").style.visibility = "hidden";
    document.getElementById("hide6").style.display="none"
}

function open_window() {
    window.open("https://github.com/SamuelB4/SamuelB4.github.io", "_blank", "width=400, height=300, top=230, left=540");
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