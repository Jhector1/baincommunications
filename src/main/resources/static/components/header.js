import {changeBackgroundColor,changeColor, page} from "./helperMethod.js";
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

 .nav-link{
    list-style-type: none;
    display: flex;
    align-items: center;
width: 550px;
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
a, .dropbtn,.dropbtn i {
font-size: 1rem !important;
font-weight: normal;
}
.triangle {
font-size: 6vw;
color: cornflowerblue;
}

header {
display: block;
overflow-y: auto;
position: fixed;
left: -30%;
top:0;

padding-right: 20%;
width: 40%;
border-right: solid #F8F8F8 4px;
  transition: left 250ms linear 3.4ms;

height: 100%;


}

article, footer, .photo_Background:not(header){
    margin-left: 12.56%;
}

header .logo{ margin: auto;
width: 80%;
height: auto;

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
    font-size: 8vw;
    padding-bottom: 10%;
    font-max-size: 4rem;
    font-weight: bolder;
    text-shadow: 5px 5px 10px black;
     text-align: center;
    background-position: center;
}

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

.dropbtn i{
  transition: rotate 480ms linear 3.4ms;

}


.dropdown-content {
  display: none;
  position: absolute;
  background-color: #46464a;
  min-width: 160px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: #6A6874;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

 .triangle:hover{
 cursor: pointer;
 }

.dropdown:hover .dropdown-content, .dropdown-content li {
  display: grid;
  
}

</style><title></title></head>
<body>
 <div class="photo_Background">
    <h1>Bain Communications</h1>
 </div>
<header id="myHeader">
<div id="bar" class="triangle"><i class="fa fa-bars"></i></div>
    <div class="logo">
       <a href="/"><img src="../images/bainLogo91.png" alt="log" /o></a> 
   </div>
    <ul class="nav-link" id="nav1">
        <li class="li-nav"><a href="/">Home</a></li>
        <li class="li-nav"><a href="/about">About</a></li>
        <li class="dropdown">
            <span  style="z-index: 3; " class="dropbtn"> Services<i style='padding-left:10px' class='fa fa-chevron-down'></i></span>
            <ul class="dropdown-content">
                 <li class="li-nav"><a href="/phoneConsultation">Phone Consultation</a></li>
                 <li class="li-nav"><a href="/homeConsultation">Home Consultation</a></li>
            </ul>
        </li>
        <li class="li-nav"><a href="/reviews">Reviews</a></li>
        <li class="li-nav"><a href="/contact">Contact</a></li>
    </ul>
    
</header>

 </body>
    `;
    }
}

customElements.define('header-component', Header);

function headerReachTop() {
    const header = document.querySelector("#myHeader");
    const sticky = header.offsetTop;
    if (window.scrollY > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
function whenWindowWidthLessThan800Px() {
    const x = window.matchMedia("(min-width: 801px)");
    function stickHeader() {
        if (x.matches) {
            window.onscroll = function () {
                headerReachTop();
            };
        }
    }
    stickHeader();
    x.addEventListener("resize", stickHeader);
}
const changeHeaderStyle =()=> {

    if (page !== "") {
        document.querySelector(".nav-link").style.border = "none";
        document.querySelector(".photo_Background").style.display = "none";
        const head_nav = document.querySelector("#myHeader");
        const dropdown_content = document.querySelector(".dropdown-content");
        head_nav.style.borderBottom = "black 1px solid";

        changeBackgroundColor("#myHeader", "#6A6A75");
        changeBackgroundColor(".dropdown-content", "#303035");
        changeColor(".dropbtn", "#46464a");
        changeColor(".dropbtn i", "#46464a");
        dropdown_content.style.border = "grey 1px solid";
        dropdown_content.style.borderTop = "none";
        document.querySelector(".photo_Background").style.display = "none";
        whenWindowWidthLessThan800Px();

    }
}
whenWindowWidthLessThan800Px();
changeHeaderStyle();
const changeHeaderPosition=()=> {
    const x = window.matchMedia("(max-width: 801px)");
    const bar = document.querySelector('#bar');
    const header = document.querySelector("header");
    if (x.matches) {

        function changeHeaderLayout() {
            document.addEventListener('click', (event)=> {

                if (!bar.contains(event.target)) {
                    header.style.display = 'block';
                    header.style.position = 'fixed';
                    header.style.left = '-30%';
                    header.style.top = '0px';
                    header.style.paddingRight = '20%';
                    header.style.width = '40%';
                    header.style.borderRight = 'solid #F8F8F8 4px';
                    header.style.height = '100%';
                    document.querySelector(".triangle").style.display = "inline-block";
                } else {
                    document.querySelector(".triangle").style.display = "none";

                    header.style.padding = "0px";
                    header.style.left = "0px";

                }
            });
        }
        changeHeaderLayout();
    }


}


changeHeaderPosition();
window.addEventListener('resize', ()=>changeHeaderPosition());
