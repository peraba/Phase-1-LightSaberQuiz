const quizQuestions = [`1. Would you ignore the pineapple pizza if a regularly cheese pizza was going to be delivered in 2 hours?`,
`2. If you have a nose, does it itch?`,
`3.Would you be silent if you stubbed your toe?`,
`4.Is this quiz "cool"?`,
`5.Was your last answer "No"?`,
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
"assets/quizGifs/2193.gif", "assets/quizGifs/xqJn6R.gif", "assets/quizGifs/200.gif", "https://via.placeholder.com/200x100",
"assets/quizGifs/BZ8DQDX.gif", "assets/quizGifs/tumblr_27a07056a878d7df2d36ae32091480db_edde7faa_540.gif", "assets/quizGifs/darth-vader-star-wars.gif", 
"assets/quizGifs/YXnw.gif","assets/quizGifs/hello-there-general-kenobi.gif", "assets/quizGifs/d3ab43c8fda8c5303b31ef1690b2f17d.gif"
];
let placeOfGif = 0;
document.addEventListener("DOMContentLoaded", () => {
    const gif = document.querySelector("#gif");
    const button = document.querySelector("#buttons");
    const question = document.querySelector("#question");

    
    gif.src = gifArray[placeOfGif];
    question.innerHTML = quizQuestions[0];
    buttonsFunc(button);
})
function buttonsFunc(button){
    let score = 0;
    let clicks = 0;
    button.addEventListener("click", (e) =>{
        clicks >= 14 ? endQuiz() : switchFunc(e);
    })
    function switchFunc(e) {
        switch(e.target.innerHTML) {
            case "Yes":
                iterate();
                score ++;
                clicks ++;
                break;
            case "Maybe":
                iterate();
                score += 2;
                clicks ++;
                break;
            case "No":
                iterate();
                score += 3;
                clicks ++;
                break;
        }
    }
    function iterate(){
        question.innerHTML = quizQuestions[quizQuestions.indexOf(question.innerHTML) + 1];
        gif.src = gifArray[placeOfGif += 1];
    };
    function endQuiz(){
        button.innerHTML = "";
        let h4;
        iterate()
        if(score <= 19){
            h4 = "Your LightSaber Color is Green!";
            gif.src = "assets/colors/greenSabergif.gif";
        } else if (score <= 25) {
            h4 = "Your LightSaber Color is Blue!";
            gif.src = "assets/colors/blueSaber.gif";
        } else if (score <= 35){
            h4 = "Your LightSaber Color is Purple!";
            gif.src = "assets/colors/purpleSaber.gif";
        } else { 
            h4 = "Your LightSaber Color is Red!";
            gif.src = "assets/colors/redSaber.gif";
        }
        question.innerHTML = h4;
        // retakeBtn(button);
        // resetScore();
    };
};

// function retakeBtn(button){
//     let btn = document.createElement("button");
//     btn.innerHTML = "Retake";
//     button.appendChild(btn);
//     btn.addEventListener("click", (e) => {
//         btn.remove()
//         console.log(e.target)
//         question.innerHTML = "";
//     })
// }