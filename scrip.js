let counter = 0;
function increment(){
    if (counter>=0) {
        counter++;
        document.getElementById('counter').innerHTML = counter;
        document.getElementById('error').innerHTML ="";
        document.getElementById('btnID').style.display='inline';
    }
}
 
function decrement(){
    {
        if (counter>0) {
            counter--;
            document.getElementById('counter').innerHTML = counter;
        } 
        
    }
    if (counter==0) {
        document.getElementById('btnID').style.display='none';
    }
}
 
function reset(){
    counter = 0;
    document.getElementById('counter').innerHTML = counter;
    if (counter==0) {
        document.getElementById('btnID').style.display='none';
    }
}