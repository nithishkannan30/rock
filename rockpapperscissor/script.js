let img1=document.getElementById('img1');
let img2=document.getElementById('img2');
let image1='images/paper.jpeg';
let image2='images/rock.jpeg';
let image3='images/scissor.jpeg';
let comimage;
function player(image){
    img1.src=image;
    let a=Math.floor(Math.random()*3)+1;
    if(a==1){
        comimage=image1;
    }
    else if(a==2){
        comimage=image2;
    }
    else{
        comimage=image3;
    }
    img2.src=comimage;
    winner(img1,img2);
}

let you="YOU WINS";
let comp="COMPUTER WINS";
function winner(img1Src,img2Src){
    let win;
    if(img1Src==img2Src){
        win="Match tie";
    }
    else if (img1Src === image1 && img2Src=== image2) {
        win = comp;
    } else if (img1Src === image2 && img2Src === image3) {
        win = you;
    } else if (img1Src === image2 && img2Src === image1) {
        win = you;
    } else if (img1Src === image3 && img2Src === image2) {
        win = comp;
    } else if (img1Src === image1 && img2Src === image3) {
        win = comp;
    } else {
        win = you;
    }
finaltext(win);
}
let h4=document.getElementById('h4');
let scoreu=document.getElementById('scoreyou');
let scorecomp=document.getElementById('scorecomp');
let score1=0,score2=0;;
function finaltext(win){
    if(win==you){
        score1++;
    }
    else{
        score2++;
    }
    h4.innerHTML=win;
    scoreu.innerHTML="YOU:"+score1;
    scorecomp.innerHTML="COMPUTER:"+score2;
}
