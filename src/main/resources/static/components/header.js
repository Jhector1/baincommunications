import {changeBackgroundColor, changeColor, getCssVariableValue, page} from "./helperMethod.js";
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
    background-color: var(--element-color-two);
    height: 60px;
   z-index: 1;
}

.display-calendar { 
 background-color: var(--element-color);
    border-radius: 30px;
 padding: 8px;
    text-decoration: none;
        border: deeppink 3px solid;

}
.display-calendar:hover{
padding: 10px;
background-color: #6A6874;
}
.display-calendar div{
text-decoration: none;    
 font-weight: bolder;
   color: orange; !important;
   text-align: center;
}

 .nav-link{
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
   // border: blue 3px solid;
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
    color: var(--element-color-cornflower-blue);
    }
    
    header {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    position: fixed;
    left: -30%;
    top:0;
    
    padding-right: 20%;
    width: 40%;
    border-right: solid #F8F8F8 4px;
    transition: left 250ms linear 3.4ms;
    
    height: 100vh;
    
    
    }
    article, footer, .photo_Background:not(header){
       margin-left: 12.56%;
       
       
    }
    
    
    header .logo{ margin: auto;
    width: 80%;
    height: auto;
    
    }
    
    #nav1 {
     width: 100%;
     height: 60%;
     flex-direction: column;
     display: flex;
     margin-top: 5%;
     border: none;
    }
    .display-calendar{
    background-color: transparent;
    border: none;
    display: block;
    margin: auto;
    
    }
    /*.li-nav a{*/
    /*width: 100%;!important;*/
    /*}*/
     .nav-link li {
    padding: 10%;
    }

}

 .logo img{
   width: 100%; 

  }
}
/*.nav-link{*/
/*width: 650px;*/
/*height: 60px;*/
/*list-style-type: none;*/
/*}*/









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
  color: var(--element-color);;
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
  background-color: var(--element-color-two);
  min-width: 160px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: var(--element-color);;
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
.headerLess800px{
    display:block;
    position: fixed;
    left: -30%;
    top:0;
    padding-right: 20px;
    width: 40%;
    border-right:solid #F8F8F8 4px ;
    height: 100vh;
}

</style><title></title></head>
<body>
 <div class="photo_Background">
    <h1>Bain Communications</h1>
 </div>
<header id="myHeader">
    <ul class="nav-link" id="nav1">
    <div id="bar" class="triangle"><i class="fa fa-bars"></i></div>
    <div class="logo">
       <a href="/"><img src="../images/bainLogo91.png" alt="log" /o></a> 
   </div>
        <li class="li-nav"><a href="/about">About</a></li>
        <li class="dropdown">
            <span  style="z-index: 3; " class="dropbtn"> Services<i style='padding-left:10px' class='fa fa-chevron-down'></i></span>
            <ul class="dropdown-content">
                 <li class="li-nav"><a href="/phoneConsultation">Phone Consultation</a></li>
                 <li class="li-nav"><a href="/homeConsultation">Home Consultation</a></li>
            </ul>
        </li>
        <li class="li-nav"><a href="/reviews">Reviews</a></li>
          

    </ul>  
    <a href="#" class="display-calendar display-calendar-component"  ><div>GET A QUOTE</div > </a>

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

        changeBackgroundColor("#myHeader", getCssVariableValue("--element-color"));
        changeBackgroundColor(".dropdown-content", "#303035");
        changeColor(".dropbtn", getCssVariableValue("--element-color-two"));
        changeColor(".dropbtn i", getCssVariableValue("--element-color-two"));
        dropdown_content.style.border = "grey 1px solid";
        dropdown_content.style.borderTop = "none";
        changeBackgroundColor(".display-calendar", getCssVariableValue("--element-color-two") )
        document.querySelector(".photo_Background").style.display = "none";
        whenWindowWidthLessThan800Px();

    }
}
//whenWindowWidthLessThan800Px();
changeHeaderStyle();
const changeHeaderPosition=()=> {
    const x = window.matchMedia("(max-width: 801px)");
    const bar = document.querySelector('#bar');
    const header = document.querySelector("header");
    if (x.matches) {

        function changeHeaderLayout() {
            document.addEventListener('click', (event)=> {

                if (!bar.contains(event.target)) {
                    // header.classList.add("headerLess800px");
                    // header.style.display = 'block';
                    // header.style.position = 'fixed';
                    header.style.left = '-30%';
                    //header.style.top = '0px';
                    header.style.paddingRight = '20%';
                   // header.style.width = '40%';
                  //  header.style.borderRight = 'solid #F8F8F8 4px';
                  //  header.style.height = '100%';
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
