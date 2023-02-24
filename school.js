Window.onload = function(){i}
    let skilllist= new Array[
        { img: "./Icons/html-5.png", item: "hmtl"},
        {img:"./Icons/css-3.png", item: "css"},
        {img:"./Icons/java-script.png", item: "java-script"}
    ]

    let listUL = "<div>";
    for(let i = 0; i <listItems.lenght; i++) {
        console.log(listItems{i}.item);
        listUL +=
        "<table border='1'><tr><td rowspan='2'><img src='"+
        listItems{i}.img +
        "' alt='' style='width: 100px; object-fit: cover; boder-raduis: 50%' />" + 
        "</td></tr><tr><td>"+listItems[i].item+"</td></tr><tr><td>"+listItems[i].level+"</td></tr></table>";
}

listUL +="</div>";
document.getElementById("listUL").innerHTML = listUL

consol.log(new date())

function thumbsUp() {
    document.getElementById('myImg').src ="./images/like.png";
}
function thumbsDown() {
    document.getElementById('myImg').src="./images/dislike.png";
}

var name =""
var surname =""
var bio ="I'm a vervy passionate person who enjoys teamwork<br>and carry responsibilty well. My broad range of interest brings<br>me into contact with the divirsity of people and talent that the world offers. I wish to promote this talent and the creative output of local<br> people of different comunities of the world"

var achievments =""

var contact ="0"

document.getElementById("name").innerHTML=name;

document.getElementById("surname").innerHTML=surname;

document.getElementById("bio").innerHTML=bio;

document.getElementById("achievments").innerHTML=achievments;

document.getElementById("contact number").innerHTML=contact;