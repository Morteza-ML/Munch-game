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