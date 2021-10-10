let container = document.getElementById('container');
let optionIterator;
let options = [];
let question = document.getElementById('question');
let questionCounter = 0, correct = 0;

function loadQuestion(){
    question.innerHTML = Questions[questionCounter].text;
    for(optionIterator = 0; optionIterator < 4; ++optionIterator){
        options[optionIterator].innerHTML =
            Questions[questionCounter].options[optionIterator];
    }
}

function Answer(event){
    let index = event.target.index;
    if (Questions[questionCounter].correct == index){
        correct++;
    }
    questionCounter++;
    if(questionCounter == Questions.length){
        if(correct > 1){
            document.body.innerHTML = '<h1>Поздравляем! Правильных ответов ' + correct + '<h1/>';
        }
        else{
            document.body.innerHTML = '<h1>Вам стоит больше читать... Правильных ответов ' + correct + '<h1/>';
        }
    }
    else{
        loadQuestion();
    }
}

for(optionIterator = 0; optionIterator < 4; ++optionIterator){
    let option = document.createElement('div');
    option.classList.add('panel', 'panel-option');
    option.index = optionIterator;
    option.addEventListener('click', Answer);
    container.appendChild(option);
    options.push(option)
}
loadQuestion();