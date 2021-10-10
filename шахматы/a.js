var square;
var container = document.getElementById("container");

function sh(){
    for(i = 0; i < 8; i++){
        for(j = 0; j < 8; j++){
            square = document.createElement('div');
            if((i + j) % 2 != 0) {
                square.style.backgroundColor = 'black';
            }
            else{
                square.style.backgroundColor = 'white';
            }
            if(i == 0){
                if(j == 0 || j == 7){
                    square.style.backgroundImage = "url('bR.jpg')";
                }
                if(j == 1 || j == 6){
                    square.style.backgroundImage = "url('bN.jpg')";
                }
                if(j == 2 || j == 5){
                    square.style.backgroundImage = "url('bB.jpg')";
                }
                if(j == 3){
                    square.style.backgroundImage = "url('bQ.jpg')";
                }
                if(j == 4){
                    square.style.backgroundImage = "url('bK.jpg')";
                }
            }
            if(i == 1){
                square.style.backgroundImage = "url('bP.jpg')";
            }
            if(i == 6){
                square.style.backgroundImage = "url('wP.jpg')";
            }
            if(i == 7){
                if(j == 0 || j == 7){
                    square.style.backgroundImage = "url('wR.jpg')";
                }
                if(j == 1 || j == 6){
                    square.style.backgroundImage = "url('wN.jpg')";
                }
                if(j == 2 || j == 5){
                    square.style.backgroundImage = "url('wB.jpg')";
                }
                if(j == 3){
                    square.style.backgroundImage = "url('wQ.jpg')";
                }
                if(j == 4){
                    square.style.backgroundImage = "url('wK.jpg')";
                }
            }
            square.classList.add('square');
            container.appendChild(square);
        }
    }
}

sh()
