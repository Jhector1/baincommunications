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
/*#bar{*/
/*font-size: 2em;*/
/* margin: 5px;*/
/* display: none;*/
/*}*/

 .nav-link{
    list-style-type: none;
    display: flex;
    align-items: center;
width: 650px;
height: auto;
    right: 50px;
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
right: 5%;
display: inline-block;
top: 5%;
} 
.triangle {
font-size: 6vw;
color: cornflowerblue;
}
span, a, .description{
font-size: 1em;
}
header {
display: block;

position: fixed;
left: -30%;
top:0;
padding-right: 20%;
width: 40%;
border-right: solid #F8F8F8 4px;
  transition: left 1s linear 3.4ms;

height: 100%;


}
/*.triangle:hover{*/
/*padding: 0;*/
/*left: 0;*/
/*}*/
article, footer, .photo_Background:not(header){
    margin-left: 12.56%;
}

header .logo{ margin: auto;
width: 80%;
height: auto;

}
/*#bar{*/
/*display: block;*/
/*position: fixed;*/
/*top: 2px;*/
/*}*/

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
    font-size: 1.25rem;
    display: inline;
    font-weight: bold;
}





.sticky {
    position: fixed;
    top: 0;
    width: 100%;
}
.photo_Background {
display: block;
height: auto;
    background-image: url(../images/TVPhoto/tvphoto6.jpg);
    background-position: center;
    justify-content: center;
}
 .photo_Background h1 {
    padding-top: 100px;
    color: #FBFBFB;
    font-size: 5vw;
    padding-bottom: 10%;
    font-max-size: 4rem;
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
  font-size: 1.25rem;
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
<div id="bar" class="triangle"><i class="fa fa-bars"></i></div>
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

const path = window.location.pathname;
const page = path.split("/").pop();

if (page !== "") {
    document.querySelector(".nav-link").style.border = "none";
    document.querySelector(".photo_Background").style.display = "none";
    let head_nav = document.querySelector("#myHeader");
    let dropdown_content = document.querySelector(".dropdown-content");
    head_nav.style.borderBottom = "black 1px solid";

    changeBackgroundColor("#myHeader", "#6A6A75");
    changeBackgroundColor(".dropdown-content", "#303035");
-    changeColor(".dropbtn", "#46464a");
    changeColor(".dropbtn i", "#46464a");
    dropdown_content.style.border = "grey 1px solid";
    dropdown_content.style.borderTop = "none";
    document.querySelector(".photo_Background").style.display = "none";
} else {
   myFunc();
}

const x = window.matchMedia("(max-width: 801px)");
if(x.matches) {
    function funcChange(){
    document.addEventListener('click', function handleClickOutsideBox(event) {
        const bar = document.querySelector('#bar');
        const header = document.querySelector("header");

        if (!bar.contains(event.target)) {
            header.style.display = 'block';
            header.style.position = 'fixed';
            header.style.left = '-30%';
            header.style.top = '0px';
            header.style.paddingRight = '20%';
            header.style.width = '40%';
            header.style.borderRight = 'solid #F8F8F8 4px';
            header.style.height = '100%';

        } else {
            header.style.padding = "0px";
            header.style.left = "0px";

        }
    });
}
}
else{
    const header2= document.querySelector("header").style;
    header2.justifContent='space-around';
    header2.alignItems="center";
    header2.display= "flex";
    header2.backgroundColor= "#46464a";
    header2.height= "60px";
    header2.zIndex= "1";
}
funcChange();
window.addEventListener('resize', funcChange);

function myFunc() {
    const x = window.matchMedia("(min-width: 801px)");
    function myFunction2() {
        if (x.matches) {
            window.onscroll = function () {
                myFunction()
            };
        }
    }
    myFunction2();
    x.addEventListener("resize", myFunction2);
}

function changeBackgroundColor(tag, color) {
    const nodeList = document.querySelectorAll(tag);
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.backgroundColor = color;
    }
}

function changeColor(tag, color) {
    const nodeList = document.querySelectorAll(tag);
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.color = color;
    }
}