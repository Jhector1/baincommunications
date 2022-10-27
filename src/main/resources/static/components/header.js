class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<style>


 header {

    display: flex;
    position: relative;
    background-color: #46464a;
    height: 60px;


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

</style>
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
        <li class="li-nav"><a href="/reserve">Services</a></li>
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
    document.querySelector(".photo_Background").style.display="none";
    document.querySelector("#myHeader").style.top="0px";

    document.querySelector("#myHeader").style.position="sticky";
    document.querySelector("#myHeader").style.backgroundColor="#F8F8F8";

}
else{
    window.onscroll = function () {
        myFunction()
    };
}
