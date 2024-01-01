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
function winner(img11Src,img22Src){
    let win;
    let img1Src=img11Src.getAttribute('src');
    let img2Src=img22Src.getAttribute('src');
    console.log(img1Src)
    console.log(img2Src)
    console.log(image1)
    if(img1Src==img2Src){
        win="Match tie";
    }
    // img1-paper
    // img2-rock
    // img -scis
    else if (img1Src === image1 && img2Src=== image2) { 
        console.log(1)
        win = you;
    } else if (img1Src === image2 && img2Src === image3) {
        win = you;
        console.log(2)

    } else if (img1Src === image2 && img2Src === image1) {
        win = comp;
        console.log(3)

    } else if (img1Src === image3 && img2Src === image2) {
        win = comp;
        console.log(4)

    } else if (img1Src === image1 && img2Src === image3) {
        win = comp;
        console.log(5)

    } else {
        win = you;
        console.log(6)

    }
    console.log(win)
finaltext(win);
}
let h4=document.getElementById('h4');
let scoreu=document.getElementById('scoreyou');
let scorecomp=document.getElementById('scorecomp');
let score1=0,score2=0;;
function finaltext(win){
    console.log(win)
    if(win==you){
        score1++;
    }
    else if (win==comp){
        score2++;
    }
    console.log(score1)
    console.log(score2)
    h4.innerHTML=win;
    scoreu.innerText="YOU:"+score1;
    scorecomp.innerText="COMPUTER:"+score2;
}
