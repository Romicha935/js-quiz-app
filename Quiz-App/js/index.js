const MyBtn = document.querySelector(".myBtn button");
const RulesBox = document.querySelector(".RulesBox");
const ExitButton = document.querySelector(".buttons .ExitButton");
const ContinueButton = document.querySelector(".buttons .ContinueButton");
const Questions = document.querySelector(".Questions");


MyBtn.onclick = () => {
  RulesBox.classList.add("activeInfo");
}

ExitButton.onclick = () => {
     RulesBox.classList.remove("activeInfo") ;  
}

ContinueButton.onclick = () => {
    RulesBox.classList.remove("activeInfo");
  Questions.classList.add("activeQuiz");
  showQuestions(0)
}

const nextBtn = document.querySelector(".nextBtn");

let que_count = 0;

nextBtn.onclick = ()=> {
  if(que_count  <questions.length - 1 ){
      que_count ++ 
      showQuestions(que_count);
  }


    else{
      console.log("You heve completed your task");
    }
  }

function showQuestions(index){
  const que_text1 = document.querySelector(".text1"); 
  const option_list = document.querySelector(".MyOptions");
  let option_tag = '<div class="options"><span>' + questions[index].options[0]+ '</span></div>'
  +'<div class="options"><span>' + questions[index].options[1]+ '</span></div>'
  +'<div class="options"><span>' + questions[index].options[2]+ '</span></div>'
  +'<div class="options"><span>' + questions[index].options[3]+ '</span></div>'
  let que_tag = "<span>" + questions[index].numb+'.' + questions[index].question + "</span>";
  que_text1.innerHTML = que_tag;

  option_list.innerHTML = option_tag;
  const total_que = document.querySelector(".total_que");
  let total_queTag = '<p>' + questions[index].numb + ' of 5 </p>'
  total_que.innerHTML = total_queTag



  const option = option_list.querySelector(".options");
  for(let i=0; i<option.length; i++){
    option[i].setAttributr("onclick", "optionSelected(this)")
  }
}