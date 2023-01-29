import {changeBackgroundColor, changeColor, page, calendarComponent} from "./helperMethod.js";
//import {CalendarController1} from "./calendar.js";
class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

      <style>
           .link-li a{
                position: relative !important;
                left: -10px !important;
           }
      
      </style><title></title>
      </head>
     <footer id="myFooter">
    <div class="logo2">
        <a href="/"><img src="/images/bainLogo.PNG"/></a>
    </div>
    <div class="link">
        <ul>
            <li class="link-li display-calendar-component" ><a href="#">FREE QUOTE</a></li>
            <li class="link-li"><a href="#"> Services</a></li>
            <li class="link-li"><a href="#">Testimonials</a></li>
            <li class="link-li"><a href="#">Blog</a></li>
            <li class="link-li"><a href="#">Contact Us</a></li>
        </ul>
    </div>
    <div class="contact">
        <ul>
            <li>CONTACT US</li>
            <li>+1 (561) 856-5540</li>
            <li>baincommunication@gmail.com</li>
            <li>FOLLOW US</li>
            <li class="social-media">
                <a href="#" class="fa fa-linkedin"></a>
                <a href="#" class="fa fa-youtube"></a>
                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-instagram"></a>
            </li>
        </ul>
    </div>
</footer>
    `;
    }
}


customElements.define('footer-component', Footer);
if (page !== "") {
    changeColor("a", "#46464a");
    changeBackgroundColor("#myFooter","#6A6A75" );
}
document.querySelector(".display-calendar-component").addEventListener('click', ()=>{
const loader1 = document.querySelector(".loader");
loader1.style.zIndex="-3";
//document.body.removeChild(loader1);
   // loader1.style.display="none"
    calendarComponent.style.display="block"; });
