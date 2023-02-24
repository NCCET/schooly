window.onload = function(){
    let skilllist= new Array[
        { img: "./Icons/html-5.png", item: "hmtl"},
        {img:"./Icons/css-3.png", item: "css"},
        {img:"./Icons/java-script.png", item: "java-script"}
    ]

    let listUL = "<div>";
    for(let id = 0; i <listItems.lenght; i++) {
        console.log(listItems[i].item);
        listUL +=
        "<table border='1'><tr><td rowspan='2'><img src='"+
        listItem.img +
        "' alt='' style='width: 100px; object-fit: cover; boder-raduis: 50%' />" + 
        "</td></tr><tr><td>"+listItems[i].item+"</td></tr><tr><td>"+listItems[i].level+"</td></tr></table>";
}

listUL +="</div>";
document.getElementById("listUL").innerHTML = listUL

consol.log(new date())

function thumbsUp() {
    document.getElementById('myImg').src ="./img.thumps up.png";
}
function thumbsDown() {
    document.getElementById('myImg').src="./img.thumbsdown.png";
}

var name =""
var surname =""
var bio ="<h1>gregory kgosiejang</h1>"

<p style="width: 100vw;">gregory is a hard-working person,<br> able to communicate well with others,<br> and aslo self-driven to complete any task handed onto me or my team </p>"

var achievments =""

var contact ="0"

document.getElementById("name").innerHTML=name;

document.getElementById("surname").innerHTML=surname;

document.getElementById("bio").innerHTML=bio;

document.getElementById("achievments").innerHTML=achievments;

document.getElementById("contact number").innerHTML=contact;

