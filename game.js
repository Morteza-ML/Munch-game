let cookieString = document.cookie;
let plr1='';
let plr2='';
let lenh=cookieString.length;
for (let i = 0; i < lenh; i++) {
    let ver=cookieString.indexOf(',');
    plr1=cookieString.slice(0,ver);
    plr2=cookieString.slice(ver+1,lenh)
}
document.getElementById('pt1').textContent=plr1;
document.getElementById('pt2').textContent=plr2;





function clik(){ 
    for (i=0; i<6 ; i++){
        document.querySelector('.tts'+(i+1)).style.display='block';
        document.querySelector('.bbs'+(i+1)).style.display='block';
    }
    
    var a = Math.floor((Math.random()*6 +1));
    var b = Math.floor((Math.random()*6 +1));
    var plear1 = '.tts';
    var plear2 = '.bbs';
    function tas(adad,plear){
        for (i=0; i<(6-adad) ;i++){

            if (adad===3){
                document.querySelector( plear +((i+1)*2)).style.display='None';
            }

            else if ( adad===1 || adad===2 ){
                document.querySelector( plear +(7-(i+1))).style.display='None';
            }
            else{
                document.querySelector( plear +(i+1)).style.display='None';
            }
        }
    }
    tas(a,plear1);
    tas(b,plear2);
    if (a > b){
        document.getElementsByClassName('imgg')[0].setAttribute('src','./chap.jpg');
        document.getElementsByClassName('imgg')[1].setAttribute('src','./chap.jpg');
    }
    else if(a<b){
        document.getElementsByClassName('imgg')[0].setAttribute('src','./rast.jpg');
        document.getElementsByClassName('imgg')[1].setAttribute('src','./rast.jpg');
    }
    else{
        document.getElementsByClassName('imgg')[0].setAttribute('src','./hardo.jpg');
        document.getElementsByClassName('imgg')[1].setAttribute('src','./hardo.jpg');

    }
}
document.getElementsByClassName('refresh')[0].addEventListener("click",clik);
document.getElementById('svg').addEventListener("click", clik);
