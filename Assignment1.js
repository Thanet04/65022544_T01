let reanNum  = Math.floor(Math.random()*101);
let rd = 0;

function GN(){
    const Guess_Number = document.getElementById('G_N').value;
    if(Guess_Number < reanNum){
        rd = rd+1;
        alert ("น้อยกว่า");
    }else if(Guess_Number>reanNum){
        rd = rd+1;
        alert ("มากกว่า");
    }else if(Guess_Number == reanNum){
        rd = rd+1
        alert("ถูกต้อง ค่าที่ถูกต้อง คือ : " + reanNum +" คุณทายไปทั้งหมด : " + rd + " ครั้ง");
    }
}