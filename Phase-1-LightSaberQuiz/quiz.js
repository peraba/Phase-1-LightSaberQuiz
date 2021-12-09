let counter = 0;
let scoringButtons = 0;
document.addEventListener("DOMContentLoaded", () => {
    const gif = document.querySelector("#gif");
    const button = document.querySelector("#buttons");
    const question = document.querySelector("#question");

    fetch("db.json")
    .then(resp => resp.json())
    .then(data => buttonsFunction(button, data))
})
function buttonsFunction(button, data){
    button.addEventListener("click", (e) =>{
        counter >= 15 ? endQuiz(e, data) : switchFunction(e, data);
    })
    function switchFunction(e, data) {
        switch(e.target.innerHTML) {
            case "Restart":
                start(button, data)
                break;
            case "Start":
                start(button, data)
                break;
            case "Yes":
                iterateThroughMemesAndGifs(e, data);
                scoringButtons ++;
                counter ++;
                break;
            case "Maybe":
                iterateThroughMemesAndGifs(e, data);
                scoringButtons += 2;
                counter ++;
                break;
            case "No":
                iterateThroughMemesAndGifs(e, data);
                scoringButtons += 3;
                counter ++;
                break;
        }
    }
    function iterateThroughMemesAndGifs(e, data){
        
        console.log(counter)
        question.innerHTML = data[counter].question
        gif.src = data[counter].gif
    };
    function endQuiz(){
        button.innerHTML = "";
        let h4;
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
function restartButton(button) {
    const restart = document.createElement("button");
    restart.innerHTML = "Restart";
    button.appendChild(restart);
    scoringButtons = 0;
    counter = 0;
}
function start(button, data){
    button.innerHTML = "";
    addButtons(button)
    gif.src = data[counter].gif
    question.innerHTML = data[counter].question
    counter ++;
}
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

//Comment section
$(document).ready(function(){ 
 
    $(".primaryContained").on('click', function(){
    $(".comment").addClass("commentClicked");
  });//end click
  $("textarea").on('keyup.enter', function(){
    $(".comment").addClass("commentClicked");
  });//end keyup
  });//End Function
 
new Vue({
    el: "#app",
    data:{
       title: 'Add a comment',
      newItem: '',
      item: [],
    },
    methods:{
      addItem  (){
      this.item.push(this.newItem);
        this.newItem = "";
      }
  }
 
  });