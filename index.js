function zakhere(){
    var ll =document.getElementById('nam1').value;
    var dd =document.getElementById('nam2').value;
    if (ll.length > 10||dd>10){
        alert('The number of characters must be less than 10!');
    }
    else if (ll===''||dd===''){
        alert('It should not be empty!')
    }
    else if (ll===dd){
        alert('The names must not be the same');
    }

    else{
        let consoldita=[]
        consoldita.push(ll);
        consoldita.push(dd);
        document.cookie= consoldita;
        window.location.href='./game.html';
    }
}
