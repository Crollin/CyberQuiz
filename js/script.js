//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const feedback_text = document.querySelector(".feedback_text");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
    document.getElementById('myAudio').play();
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
let feedback;
function showQuetions(index){
	feedback_text.innerHTML = '';
	
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");
	feedback = questions[index].textereponse;
	
    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
       option[i].setAttribute('onclick', 'optionSelected(this, " '+feedback+' ")');
    }
}

// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><img src="media/Icones/pouce.png" alt=""></div>';
let crossIconTag = '<div class="icon cross"><img src="media/Icones/skull.png" alt=""></div>';

//if user clicked on option
function optionSelected(answer, feedback){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items

    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct", ); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }   
        }
    }
    feedback_text.innerHTML = feedback;

    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    
    next_btn.classList.add("show"); //show the next button if user selected any option
}



function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore == 10){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<b class="scoregras"><p>'+ userScore +'</p> / <p>'+ questions.length +'</p></b> <br> <p class="grade">Roi de la Cyber <img src="media/Icones/King.png" alt=""> </p><br><p class="resulttexte">Bazinga ! Vous avez réussi haut la main notre test et avez prouvé votre capacité à stopper la majorité des cybermenaces tel un Gandalf surpuissant ! Mais ne vous reposez pas sur vos lauriers, les menaces évoluent constamment. Parlez-en avec nos <a href="https://www.on-x.com/contact?pole=securite-numerique" target="_blank">cyber experts !</a> !</p><br><p class="citation">La citation qui vous représente : « Vous ne passerez pas ! »</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 7){ // if user scored more than 
        let scoreTag = '<b class="scoregras"><p>'+ userScore +'</p> / <p>'+ questions.length +'</p></b> <br> <p class="grade">Cyber Avenger<img src="media/Icones/Avengers.png" alt=""></p><br><p class="resulttexte">C’est indéniable, vous maîtrisez clairement les notions fondamentales pour vous protéger des cybermenaces. Pour développer les stratégies les plus pointues, faites appel à nos <a href="https://www.on-x.com/contact?pole=securite-numerique" target="_blank">cyber experts !</a></p><br><p class="citation">La citation qui vous représente : « Un grand pouvoir implique de grandes responsabilités »</p> </span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 5){ // if user scored more than 6
        let scoreTag = '<b class="scoregras"><p>'+ userScore +'</p> / <p>'+ questions.length +'</p></b> <br> <p class="grade">Cyber Padawan <img src="media/Icones/sabre.png" alt=""></p><br><p class="resulttexte">Bien joué, vous commencez à avoir de bons réflexes en cybersécurité mais il vous reste encore quelques notions à approfondir ! Appuyez-vous sur l’expertise de nos <a href="https://www.on-x.com/contact?pole=securite-numerique" target="_blank">équipes en Sécurité Numérique.</a> </p><br><p class="citation">La citation qui vous représente : « Que la force soit avec toi »</p> </span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 5
        let scoreTag = '<b class="scoregras"><p>'+ userScore +'</p> / <p>'+ questions.length +'</p></b> <br> <p class="grade">Cyber Noobie <img src="media/Icones/groot.png" alt=""></p><br><p class="resulttexte">La cybersécurité a encore de nombreux secrets pour vous, mais c’est un bon début. Vous souhaitez approfondir vos connaissances ? Nos <a href="https://www.on-x.com/contact?pole=securite-numerique" target="_blank">experts en cybersécurité</a> sont là pour vous guider !</p><br><p class="citation">La citation qui vous représente : « On ne laisse pas bébé dans un coin »</p> </span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Temps écoulé"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag,); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            feedback_text.innerHTML = feedback;
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 36);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 440){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p>/<p>'+ questions.length +'</p></span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}