class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<style>


 header {
justify-content: space-around;
align-items: center;
    display: flex;
    background-color: #46464a;
    height: 60px;
    z-index: 1;


}
#bar{
font-size: 2em;
 margin: 5px;
 display: none;
}

 .nav-link{
    list-style-type: none;
    display: flex;
    align-items: center;
width: 650px;
height: auto;
    right: 50px;
    border: blue solid 4px;
}


.logo{
width: 60px;
height: auto;
} .triangle{
display: none;
}

@media screen and (max-width: 800px){
.triangle{
position: absolute;
right: 0;
display: inline-block;
margin-right: 20px;
bottom: 45%;
} .triangle {
font-size: 4em;
color: #6A6A75;
}
header {
display: block;

position: fixed;
left: -13em;
top:0;
padding-right:150px;
width: 20em;
border-right: solid #F8F8F8 4px;
min-width: 300px;
  transition: left 1s linear 3.4ms;

height: 100%;


}
header:hover{
padding: 0;
left: 0;
}
article, footer, .photo_Background:not(header){
    margin-left: 6.280em;
}

header .logo{ margin: auto;
width: 80%;
height: auto;

}
#bar{
display: block;
position: fixed;
top: 2px;
}

#nav1 {
 width: 50%;
 height: 50%;
 display: grid;
 margin-left: 10%;
 margin-top: 5%;
}
 .nav-link li {
 width: 100%;
display: block;
padding: 
float: none;
}

}

a:active {
    color: yellow;
    background-color: transparent;
}
 .logo img{
   width: 100%; 

  
}
.nav-link{
width: 650px;
height: 60px;
list-style-type: none;
}
/*.nav-link li {*/

/*    float: left;*/
/*    */


/*}*/

li {
    border-right: none;
}

li a {
    color: #6A6874;
    text-align: center;
    padding: 14px 30px;
    text-decoration: none;
    font-size: 20px;
    display: inline;
    font-weight: bold;
}



a:hover {
    color: #AEADB2;
    background-color: transparent;
}
a:active {
    color: yellow;
    background-color: transparent;
}

.sticky {
    position: fixed;
    top: 0;
    width: 100%;
}
.photo_Background {
display: flex;
flex-wrap: wrap;
    height: 300px;
    background-image: url(../images/TVPhoto/tvphoto6.jpg);
    background-position: center;
    justify-content: center;
}
 .photo_Background h1 {
    padding-top: 100px;
    color: #FBFBFB;
    font-size: 4rem;
    font-weight: bolder;
    text-shadow: 5px 5px 10px black;
     text-align: center;
    background-position: center;
}



 /*.photo_Background h1{*/
 /*   font-size: 60px;*/
 /*}*/

/*dropdown styling section*/
.dropbtn {
  background-color: transparent;
  color: #6A6874;
  padding: 16px;
  font-size: 20px;
  font-weight: bold;
  border: none;
  display: inline;
  cursor: pointer;
}



.dropdown-content {
  display: none;
  position: absolute;
  background-color: #46464a;
  min-width: 160px;
  border: blue 4px solid;
  border-top: none;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: #6A6874;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {color: #AEADB2;
    background-color: transparent;}
 

.dropdown:hover .dropdown-content, .dropdown-content li {
  display: grid;
  
}

.dropdown:hover .dropbtn {
  color: #AEADB2;
    background-color: transparent;
}

</style><title></title></head>
<body>
 <div class="photo_Background">
    <h1>Bain Communications</h1>
 </div>
<header id="myHeader">
<div class="triangle"><i class="fa fa-play"></i></div>
    <div class="logo">
        <img src="../images/bainLogo91.png" alt="logo"/>
   </div>
    <ul class="nav-link" id="nav1">
        <li class="li-nav"><a href="/">Home</a></li>
        <li class="li-nav"><a href="/about">About</a></li>
        <li class="dropdown">
            <span  style="z-index: 3; " class="dropbtn"> Services<i style='padding-left:10px' class='fa fa-chevron-down'></i></span>
            <ul class="dropdown-content">
                 <li class="li-nav"><a href="#">Phone Consultation</a></li>
                 <li class="li-nav"><a href="/reserve">Home Consultation</a></li>
            </ul>
        </li>
        <li class="li-nav"><a href="#">Reviews</a></li>
        <li class="li-nav"><a href="/contact">Contact</a></li>
    </ul>
    
</header>

 </body>
    `;
    }
}

customElements.define('header-component', Header);
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.scrollY > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

var path = window.location.pathname;
var page = path.split("/").pop();

if (page !== "") {
    let head_nav = document.querySelector("#myHeader");
    let dropdown_content = document.querySelector(".dropdown-content");
    head_nav.style.borderBottom = "grey 1px solid";

changeBackgroundColor("#myHeader", "#6A6A75");
    changeBackgroundColor(".dropdown-content", "#303035");
    changeColor("li a", "#46464a");
    changeColor(".dropbtn", "#46464a");
    changeColor(".dropbtn i", "#46464a");
    changeColor(".triangle", "#46464a");



    dropdown_content.style.border = "grey 1px solid";
    dropdown_content.style.borderTop = "none";
    document.querySelector("#myFooter").style.backgroundColor = "#6A6A75";

    document.querySelector(".nav-link").style.border = "none";

    document.querySelector(".photo_Background").style.display = "none";

} else {
    if (window.onresize > 600) {
        window.onscroll = function () {
            myFunction()
        };
    }
}

function changeBackgroundColor(tag, color){
   const nodeList= document.querySelectorAll(tag);
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.backgroundColor = color;
    }
}
function changeColor(tag, color){
    const nodeList= document.querySelectorAll(tag);
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.color = color;
    }
}