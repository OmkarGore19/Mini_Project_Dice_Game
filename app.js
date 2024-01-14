let image1 = document.getElementById('i1');//get elements
let image2 = document.getElementById('i2');
let message = document.getElementById('msg');

var randomNum1 = Math.floor((Math.random()*6)+1);//1 to 6 
let randomNum2 = Math.floor((Math.random()*6)+1);

var imgname1 = `dice${randomNum1}.png`;//dice1.png to dice6.png
console.log(imgname1);

var imgname2 = `dice${randomNum2}.png`;
console.log(imgname2);

var path1 = `./images/${imgname1}`;// ./images/dice1.png to ./images/dice6.png
console.log(path1);

var path2 = `./images/${imgname2}`;
console.log(path2);

image1.setAttribute("src", path1);//setting images
image2.setAttribute("src", path2);

//changing message
if(randomNum1>randomNum2){
    message.innerText = "Player 1 won!!";
}
else if(randomNum1<randomNum2){
    message.innerText = "Player 2 won!!";
}
else{
    message.innerText = "Match Draw :(";
}
