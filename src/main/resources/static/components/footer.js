class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

      <style>

        footer {
    position: relative;
    background-color: #46464a;
    border: blue 2px solid;
    height: 400px;
    margin-top: 50px;
}

footer .link, footer .contact, footer .logo {
    padding: 50px;
    display: inline-block;
}

 .logo2 {
    position: absolute;
    display: inline-block;
    width: 30%;
    left: 50px;

}

footer .link {
    position: absolute;
    text-decoration: none;
    left: 550px;

}

.contact {
    background-color: #46464a;
    position: absolute;
    right: 50px;


}

.contact li {

    text-align: center;
    padding: 14px 30px;
    text-decoration: none;
    font-size: 20px;
}
      </style><title></title>
      </head>
     <footer>
    <div class="logo2">
        <img src="/images/bainLogo.PNG"/>
    </div>
    <div class="link">
        <ul>
            <li><a href="#">FREE QUOTE</a></li>
            <li><a href="#"> Services</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
    </div>
    <div class="contact">
        <ul>
            <li>CONTACT US</li>
            <li>+1 (561) 856-5540</li>
            <li>baincommunication@gmail.com</li>
            <li>FOLLOW US</li>
            <li>
                <a href="#" class="fa fa-linkedin"></a>
                <a href="#" class="fa fa-youtube"></a>
                <a href="https://www.facebook.com/profile.php?id=726930617" class="fa fa-facebook" target="_blank" ></a>
                <a href="https://www.instagram.com/christopher_bain/" class="fa fa-instagram" target="_blank"></a>
            </li>
        </ul>
    </div>
</footer>
    `;
    }
}

customElements.define('footer-component', Footer);