(function () {
        'use strict';
    

    var area = document.body,
        areaHeight = window.innerHeight,
        areaWidth = window.innerWidth,
        points = document.getElementById('points'),
        duck = document.createElement('img'),
        score = 0,
        timer = 100;


    function addAndPrintScore() {
        score = score + 1;
        points.innerHTML = score;
        
        if(score == 10){
            alert('Grattis du vann!');
            
            document.location.reload();
            
            
        }
    }
    
    



    duck.src = 'duck.png'; 
    duck.style.position = 'absolute'; 
    duck.style.left = '0px'; 
    duck.style.top = '0px'; 
    duck.style.zIndex = 10000; 
    duck.addEventListener('click', addAndPrintScore);

    function newDuck() {
        var newX = Math.floor(Math.random() * (areaWidth - duck.width)),
            newY = Math.floor(Math.random() * (areaHeight - duck.height));

        duck.style.left = newX + 'px';
        duck.style.top = newY + 'px';
        area.appendChild(duck);
    }

    
    function startGame() {
        window.setInterval(newDuck, timer);
    }


    startGame();

    alert('Klicka på ankan och samla poäng');
    
    
})();
