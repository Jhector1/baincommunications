class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<style>


 header {

    display: flex;
    position: relative;
    background-color: #46464a;
    height: 60px;
    z-index: 1;


}


header .nav-link {
    list-style-type: none;

    position: absolute;
    right: 50px;
    display: inline-block ;
    border: blue solid 4px;
}


.nav-link li {
    float: left;
    /*border-right: 1px solid #bbb;*/
    display: block;


}
a:active {
    color: yellow;
    background-color: transparent;
}
 .logo img{
    width:5%;
    position: absolute;
    left: 50px;
    bottom:0;
}
.nav-link li {
    float: left;
    /*border-right: 1px solid #bbb;*/
    display: block;


}

li {
    border-right: none;
}

li a {
    color: #6A6874;
    text-align: center;
    padding: 14px 30px;
    text-decoration: none;
    font-size: 20px;
    display: block;
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
    height: 300px;
    background-image: url(../images/TVPhoto/tvphoto6.jpg);
    background-position: center;
}
 .photo_Background h1 {
    padding-top: 100px;
    color: #FBFBFB;
    font-size: 80px;
    font-weight: bolder;
    text-shadow: 5px 5px 10px black;
     text-align: center;
    background-position: center;
}
/*dropdown styling section*/
.dropbtn {
  background-color: transparent;
  color: #6A6874;
  padding: 16px;
  font-size: 20px;
  font-weight: bold;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
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
 .dropbtn i:hover{
 transform: rotate:( 60deg);
 }

.dropdown:hover .dropdown-content {
  display: block;
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
    <div class="logo">
        <img src="../images/bainLogo91.png" alt="logo"/>
    </div>
    <ul class="nav-link">
        <li class="li-nav"><a href="/">Home</a></li>
        <li class="li-nav"><a href="/about">About</a></li>
        <li class="li-nav"><div class="dropdown">
  <button class="dropbtn">Services<i style='padding-left:10px' class='fa fa-chevron-down'></i></button>
  <div class="dropdown-content">
  <a href="#">Phone Consultation</a>
  <a href="/reserve">Home Consultation</a>
  </div>
</div></li>
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
if(page!==""){
    let head_nav =document.querySelector("#myHeader");
    document.querySelector(".photo_Background").style.display="none";
    head_nav.style.top="0";
    head_nav.style.position="sticky";
    head_nav.style.backgroundColor="#F8F8F8";
    head_nav.style.borderBottom="grey 1px solid";
    document.querySelector(".nav-link").style.border="none";


}
else{
    window.onscroll = function () {
        myFunction()
    };
}
