//Global Variables\\
let counter = 0;
let scoringButtons = 0;
let numberVar;
//DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    //Quiz Variables\\
    const gif = document.querySelector("#gif");
    const button = document.querySelector("#buttons");
    const question = document.querySelector("#question");
    //Navbar Variables\\
    const dropDown = document.querySelector(".dropdown-content");
    const textInfo = document.querySelector("#content-h4");
    const navImage = document.querySelector("#nav-image");
    //Ad variable\\
    const ad = document.querySelector("#ad");
    //Comment Variables\\
    const comment  = document.querySelector("#comment")
    const commentSection = document.querySelector("#comment-section")
    //Comment Section\\
    comment.addEventListener('submit', (e) => {
        e.preventDefault();
        let userInput = e.target["new-comment"];
        userInput.value === "" || commentSection.children.length >= 5 ? userInput.value = "" : createEl(userInput.value);
        userInput.value = "";
    })
    //Quiz Api\\
    fetch("db.json")
    .then(resp => resp.json())
    .then(data => {
        buttonsFunction(button, data)
    })
    //NavBar\\
    dropDown.addEventListener("click", (e) => {
        switch (e.target.innerHTML) {
            case "Green":
                textInfo.innerHTML = "Green lightsaber holders tend to be calm, wise and possess powerful force powers.";
                navImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwZlfplZO17zRAexSYAUzpIdLCZo0HpF8BsQ&usqp=CAU";
                break;
            case "Blue":
                textInfo.innerHTML = "Blue lightsabers are granted to those who aren't as strong with those force but are highly skilled in physical combat."
                navImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAiDDy7LCgLqYFVwb7P37FJ1e2IC78eaxPvQ&usqp=CAU"
                break;
            case "Purple":
                textInfo.innerHTML = "Purple is a rare color and usually represents someone who dabbles in the dark side but stays on the light side.";
                navImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPuKGIKqEybqnoOdcuKKn5KPD2mLogy_FtGw&usqp=CAU";
                break;
            case "Red":
                textInfo.innerHTML = "Red reflects the corrupt sinister nature od its holder.";
                navImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUEi4PAjNvScSzHOFTUsWLB7UIfCFwKntPCw&usqp=CAU";
                break;
            case "Random Character":
                apiFunction(`https://swapi.dev/api/people/${randomNumber(82)}`, textInfo);
                navImage.src = "";
                fetch("characters.json")
                .then(resp => resp.json())
                .then(data => navBarCharacter(data, navImage));
                break;
        }
    })    
    let i = 0;
    setInterval(() =>{
        switch (i) {
            case 0:
                ad.src = "https://assets.wordstream.com/s3fs-public/styles/simple_image/public/images/media/images/persuasive-ads-trusted-by-moms.jpg?.CvqVrfQ6Rw4qg5UaZwpw905G1sw8YyF&itok=poiQ0kRz"
                i ++;
                break;
            case 1:
                ad.src = "assets/IMG_4925.jpg"
                i++;
                break;
            case 2:
                ad.src = "https://digivizer.com/wp-content/uploads/2020/06/Dominos-Image-Ad-with-Text.png"
                i++;
                break;
            case 3:
                ad.src = "assets/d6pw2o7-cd83d14b-e077-4fa9-81a9-6543fa436653.jpg";
                i = 0;
                break;
        } 
    }, 5000);
})
function changeAd(ad){
   let i = 0;
    switch (i) {
        case 0:
            ad.src = "https://assets.wordstream.com/s3fs-public/styles/simple_image/public/images/media/images/persuasive-ads-trusted-by-moms.jpg?.CvqVrfQ6Rw4qg5UaZwpw905G1sw8YyF&itok=poiQ0kRz"
            i++;
            break;
        case 1:
            ad.src = "https://digivizer.com/wp-content/uploads/2020/06/Dominos-Image-Ad-with-Text.png"
            i++;
        case 2:
            ad.src = "assets/d6pw2o7-cd83d14b-e077-4fa9-81a9-6543fa436653.jpg";
            i = 0;
            break;
    } 
}
function apiFunction(url, textInfo){
    fetch(url)
    .then(resp => resp.json())
    .then(data => textInfo.innerHTML = data.name);
}
function randomNumber(upToNumber){
    //from 1 up to given number.
    numberVar = Math.floor(Math.random() * upToNumber + 1);
    return numberVar;
}
function navBarCharacter(data, navImage){
    console.log(numberVar);
    numberVar <= 15 ? navImage.src = data[numberVar - 1].image : navImage.src = "assets/star-wars-backgrounds-14.jpg";
}
    
//Quiz Worker\\
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
//Comment Section\\
function createEl(userInput){
    let p = document.createElement('p');
    p.textContent = `${userInput}`;
    document.querySelector('#comment-section').appendChild(p);

    p.addEventListener('click', (e) =>{
      p.remove();
    });
  }