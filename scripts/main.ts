function firstAnime(speeds: number[], results: number[]){

    if((<any>document).querySelector(`.rightPhotos`).classList.contains('animeReverse')){
        (<any>document).querySelector(`.rightPhotos`).classList.remove('animeReverse');
    }
    if((<any>document).querySelector(`.leftText`).classList.contains('animeReverse')){
        (<any>document).querySelector(`.leftText`).classList.remove('animeReverse');
    }

    (<any>document).querySelector(`.rightPhotos`).classList.add('anime');
    (<any>document).querySelector(`.leftText`).classList.add('anime');

    for(let i = 1; i <= 6; i++){
        let first: number = 0,
            second: number = 0,
            speed: number = speeds[i - 1],
            result: number = results[i - 1],
            play: boolean = true;
    
        setTimeout(() => {
            play = false;
            if(speed > 0){
                (<any>document).querySelector(`.item-${i} .third .result`).innerHTML = result.toString();
                (<any>document).querySelector(`.item-${i} .first`).style.display = `none`;
                (<any>document).querySelector(`.item-${i} .second`).style.display = `none`;
                (<any>document).querySelector(`.item-${i} .third`).classList.add('finish');
            }

            setTimeout(() => {   
                for(let i = 1; i <=6; i++){
                    
                    (<any>document).querySelector(`.item-${i} .first`).style.display = `block`;
                    (<any>document).querySelector(`.item-${i} .second`).style.display = `block`;
                    (<any>document).querySelector(`.item-${i} .third`).classList.remove('finish');
                }
                secondAnime([5, 10, 15, 20, 30, 40], [5, 2, 2, 6, 0, 0]);
                
            }, 5000);

        }, 2000 - i * -50);
    
        (function frame() {

            if(second > 1330 && second < 1380){
                first = -70;
            }
    
    
            first += speed;
            second += speed;
            
            if(second > 70 * 20){
                
                second = 0;
            }
    
    
            (<any>document).querySelector(`.item-${i} .first`).style.transform = `translateY(${-first}px)`;
            (<any>document).querySelector(`.item-${i} .second`).style.transform = `translateY(${-second}px)`;
    
            if(play){
                requestAnimationFrame(frame);
            }
        })();
    }
}

function secondAnime(speeds: number[], results: number[]){

    if((<any>document).querySelector(`.rightPhotos`).classList.contains('anime')){
        (<any>document).querySelector(`.rightPhotos`).classList.remove('anime');
    }
    if((<any>document).querySelector(`.leftText`).classList.contains('anime')){
        (<any>document).querySelector(`.leftText`).classList.remove('anime');
    }

    (<any>document).querySelector(`.rightPhotos`).classList.add('animeReverse');
    (<any>document).querySelector(`.leftText`).classList.add('animeReverse');


    for(let i = 1; i <= 6; i++){
        let first = -1330, second = -1330, speed = speeds[i - 1], result = results[i - 1], play = true;
    
        setTimeout(() => {
            play = false;
            if(speed > 0){
                (<any>document).querySelector(`.item-${i} .third .result`).innerHTML = result.toString();
                (<any>document).querySelector(`.item-${i} .first`).style.display = `none`;
                (<any>document).querySelector(`.item-${i} .second`).style.display = `none`;
                (<any>document).querySelector(`.item-${i} .third`).classList.add('finishReverse');
            }

        }, 2000 - i * -50);    
        (function rotate() {
            if(second > 0 && second < 150){
                first = -1330;
            }
     
            if(second > 0){
                second = -1330;
            }
    
            first += speed;
            second += speed;
           
    
    
            (<any>document).querySelector(`.item-${i} .first`).style.transform = `translateY(${first}px)`;
            (<any>document).querySelector(`.item-${i} .second`).style.transform = `translateY(${second}px)`;
    
            if(play){
                requestAnimationFrame(rotate);
            }
        })();
    }
}

firstAnime([5, 10, 15, 20, 30, 40], [0, 1, 0, 4, 5, 2]);

(function playAnimation() {
    setInterval(() => {

        for(let i = 1; i <=6; i++){  
            (<any>document).querySelector(`.item-${i} .first`).style.display = `block`;
            (<any>document).querySelector(`.item-${i} .second`).style.display = `block`;
            (<any>document).querySelector(`.item-${i} .first`).style.transform = ``;
            (<any>document).querySelector(`.item-${i} .second`).style.transform = ``;
            (<any>document).querySelector(`.item-${i} .third`).classList.remove('finishReverse');
        }
        firstAnime([5, 10, 15, 20, 30, 40], [0, 1, 0, 4, 5, 2]);

    }, 15000)
})(); 

