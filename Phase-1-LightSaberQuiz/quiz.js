const quizQuestions = [`1. Would you ignore the pineapple pizza if a regularly cheese pizza was going to be delivered in 2 hours?`,
`2. If you have a nose, does it itch?`,
`3.Would you be silent if you stubbed your toe?`,
`4.Is this quiz cool?`,
`5.Was your last answer No?`,
`6.Is a tomato a fruit?`,
`7. Is Yes stronger then No?`,
`8. Would you drive a car over a spaceship, if you had no knowledge of spaceships?`,
`9. Do bald eagles get dandruff?`,
`10.If a relative started posting minion memes on social media would you try to stop them?`,
`11. If someone said "This statement is false" would it be true?`,
`12. Would you help Robin Hood?`,
`13. Did Heath Ledger play the best live action Joker?`, `14. If you saw someone drop money unknowingly would you return it?`,
`15. Are you introverted?`];

const gifArray = ["assets/quizGifs/may4_18_800.gif", "assets/quizGifs/83781.gif",
"assets/quizGifs/1241.gif", "assets/quizGifs/giphy.gif", "assets/quizGifs/200 (1).gif",
"assets/quizGifs/2193.gif", "assets/quizGifs/xqJn6R.gif", "assets/quizGifs/200.gif", "assets/quizGifs/sesame-street-star-wars.gif",
"assets/quizGifs/BZ8DQDX.gif", "assets/quizGifs/tumblr_27a07056a878d7df2d36ae32091480db_edde7faa_540.gif", "assets/quizGifs/darth-vader-star-wars.gif", 
"assets/quizGifs/YXnw.gif","assets/quizGifs/hello-there-general-kenobi.gif", "assets/quizGifs/d3ab43c8fda8c5303b31ef1690b2f17d.gif"
];

let placeOfGif = 0;
let scoringButtons = 0;
let clicks = 0;
document.addEventListener("DOMContentLoaded", () => {
    const gif = document.querySelector("#gif");
    const button = document.querySelector("#buttons");
    const question = document.querySelector("#question");

    buttonsFunction(button);
})
function buttonsFunction(button){

    button.addEventListener("click", (e) =>{
        clicks >= 14 ? endQuiz() : switchFunction(e);
    })
    function switchFunction(e) {
        switch(e.target.innerHTML) {
            case "Restart":
                start(button)
                break;
            case "Start":
                start(button)
                break;
            case "Yes":
                iterateThroughMemesAndGifs();
                scoringButtons ++;
                clicks ++;
                break;
            case "Maybe":
                iterateThroughMemesAndGifs();
                scoringButtons += 2;
                clicks ++;
                break;
            case "No":
                iterateThroughMemesAndGifs();
                scoringButtons += 3;
                clicks ++;
                break;
        }

    }
    function iterateThroughMemesAndGifs(){
        question.innerHTML = quizQuestions[quizQuestions.indexOf(question.innerHTML) + 1];
        gif.src = gifArray[placeOfGif += 1];
    };
    function endQuiz(){
        button.innerHTML = "";
        let h4;
        iterateThroughMemesAndGifs();
        if(scoringButtons <= 19){
            h4 = "Your LightSaber Color is Green!";
            gif.src = "assets/colors/greenSabergif.gif";
        } else if (scoringButtons <= 25) {
            h4 = "Your LightSaber Color is Blue!";
            gif.src = "assets/colors/blueSaber.gif";
        } else if (scoringButtons <= 35){
            h4 = "Your LightSaber Color is Purple!";
            gif.src = "assets/colors/purpleSaber.gif";
        } else { 
            h4 = "Your LightSaber Color is Red!";
            gif.src = "assets/colors/redSaber.gif";
        }
        question.innerHTML = h4;
        restartButton(button);
    };
};

function addButtons(button) {
    const yes = document.createElement("button");
    yes.innerHTML = "Yes";
    const maybe = document.createElement("button");
    maybe.innerHTML = "Maybe";
    const no = document.createElement("button");
    no.innerHTML = "No";
    button.appendChild(yes);
    button.appendChild(maybe);
    button.appendChild(no);
}
function start(button){
    button.innerHTML = "";
    addButtons(button)
    gif.src = gifArray[placeOfGif];
    question.innerHTML = quizQuestions[0];
}
function restartButton(button) {
    const restart = document.createElement("button");
    restart.innerHTML = "Restart";
    button.appendChild(restart);
    placeOfGif = 0;
    scoringButtons = 0;
    clicks = 0;
}