import {CalendarPage} from "./calendarImpl.js";
//import {CalendarController} from "./calendar.js";
import {calendarComponent, NavigateButton, timeObject, hideTimeReserved} from "./helperMethod.js";

class PrintCalendar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<head><style>

</style><title></title>
</head>
<body> 
<div class="cover">
<div class="pop-pup">
<div class="envelope">      
    <div class="exit-button-box">
        <div class="logo">
            <a href="/"><img src="../images/bainLogo91.png" alt="log"></a> 
        </div>
        <span id="cancel-button">&#x2715;</span>
   </div>

    <form method="post" action="/reserve"> 
    <div class="form-envelope">

            <div class="custom-block">
                <h1 class="select1">Select a service</h1>
                <div class="custom-radio">
                    <label for="phone-consultation">
                    <input class="choose-service" type="radio" id="phone-consultation" name="service" value="Phone Consultation">
                    Phone Consultation<br>Free. 30 minutes<span class="checkmark"> </span>
                    </label>
                </div> 
                <div class="custom-radio">
                    <label for="home-consultation">
                    <input class="choose-service" type="radio" id="home-consultation" name="service" value="Home Consultation">
                     Home Consultation<br>Please Provide an address. 1 hour <span class="checkmark"></span>
                     </label>
                </div>
            </div>
            <div class="service-block">
                <h2>Choose the services you need for your home</h2>
                <input type="checkbox" id="home-automation" name="service1" value="Home Automation">
                <label for="service1">Home Automation</label><br>
                <input type="checkbox" id="home-theater-audio" name="service2" value="Home Theather/Audio">
                <label for="service2">Home Theather/Audio</label><br>
                <input type="checkbox" id="lighting-window-treatment" name="service3" value="Lighting/Window Treatment">
                <label for="service3">Lighting/Window Treatment</label><br><br>
                <input type="checkbox" id="surveillance-network" name="service4" value="Surveillance Network">
                <label for="service4">Surveillance Network</label><br><br>
            </div>
            <div class="calendar">
                <div class="my-calendar">
                    <ul class="month">
                        <li  id="prv" class="prev"><span>&#10094;</span></li>
                        <li>
                            <span class="month-of-year"></span>
                            <span class="year"></span>
                        </li>
                        <li id="nxt" class="next"><span>&#10095;</span></li>
                    </ul>
                    <ul class="weekdays">
                        <li>Su</li>
                        <li>Mo</li>
                        <li>Tu</li>
                        <li>We</li>
                        <li>Th</li>
                        <li>Fr</li>
                        <li>Sa</li>
                    </ul>
            
                    <ul class="days">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <input id="date-value" type="checkbox" value="default" name="date" checked>
                </div>
                <div class="my-time">
                    <p class="info-block"><strong>Available on</strong> <strong class="time-to-start"> Thu, Dec 8, 2022</strong>
                    You can schedule an appointment between 4 hours 
                    and 365 days ahead of time. Time zone:
                    Eastern Time Zone (EST)
                    </p>
                    <p class="time-of-day"> <strong>Morning</strong></p>
                    <div class="time-box">
                        <label for="time-input1" class="available-time"><i></i>10:00 am<input class="time-input" name="time" id="time-input1" type="radio" value="10:00 am" readonly/></label>
                        <label for="time-input2" class="available-time am-shift"><i></i>10:30 am<input class="time-input" name="time" id="time-input2" type="radio" value="10:30 am" readonly/></label>
                        <label for="time-input3" class="available-time"><i></i>11:00 am<input class="time-input" name="time" id="time-input3" type="radio" value="11:00 am" readonly/></label>
                        <label for="time-input4" class="available-time am-shift"><i></i>11:30 am<input class="time-input" name="time" id="time-input4" type="radio" value="11:30 am" readonly/></label>
                    </div>
                    <p class="time-of-day"><strong>Afternoon</strong></p>
                    <div class="time-box b">
                        <label for="time-input5" class="available-time"><i></i>12:00pm<input class="time-input" name="time" id="time-input5" type="radio" value="12:00 pm" readonly/></label>
                        <label for="time-input6" class="available-time am-shift"><i></i>12:30 pm<input class="time-input" name="time" id="time-input6" type="radio" value="12:30 pm" readonly/></label>
                        <label for="time-input7" class="available-time"><i></i>1:00 pm<input class="time-input" name="time" id="time-input7" type="radio" value="1:00 pm" readonly/></label>
                        <label for="time-input8" class="available-time am-shift"><i></i>1:30 pm<input class="time-input" name="time" id="time-input8" type="radio" value="1:30 pm" readonly/></label>
                        <label for="time-input9" class="available-time"><i></i>2:00 pm<input class="time-input" name="time" id="time-input9" type="radio" value="2:00 pm" readonly/></label>
                        <label for="time-input10" class="available-time am-shift"><i></i>2:30 pm<input class="time-input" name="time" id="time-input10" type="radio" value="2:30 pm" readonly/></label>
                        <label for="time-input11" class="available-time"><i></i>3:00 pm<input class="time-input" name="time" id="time-input11" type="radio" value="3:00 pm" readonly/></label>
                        <label for="time-input12" class="available-time am-shift"><i></i>3:30 pm<input class="time-input" name="time" id="time-input12" type="radio" value="3:30 pm" readonly/></label>
                        <label for="time-input13" class="available-time"><i></i>4:00 pm<input class="time-input" name="time" id="time-input13" type="radio" value="4:00 pm" readonly/></label>
                        <label for="time-input14" class="available-time am-shift"><i></i>4:30 pm<input class="time-input" name="time" id="time-input14" type="radio" value="4:30 pm" readonly/></label>
                        <label for="time-input15" class="available-time"><i></i>5:00 pm<input class="time-input" name="time" id="time-input15" type="radio" value="5:00 pm" readonly/></label>
                        <label for="time-input16" class="available-time am-shift"><i></i>5:30 pm<input class="time-input" name="time" id="time-input16" type="radio" value="5:30 pm" readonly/></label>
                    </div>
                </div>
            </div>
            <div class="user-info-contact-box">
                
                <div class="user-contact-box-1">
                    <div class="user-contact contact-a"><input class="input-contact"  id="firstName" type="text" name="firstName" placeholder="First Name"  required="required"/></div>
                    <div class="user-contact"><input class="input-contact"   id="lastName" type="text" name="lastName" placeholder="Last Name" required="required"/></div>
                    <div class="user-contact"><input class="input-contact"  id="email" type="email" name="email" placeholder="youremail@example.com" required="required"/></div>
                    <div class="user-contact"><input class="input-contact"  id="tel" type="tel" name="tel" placeholder="Phone Number" required="required"/></div>
                    <div class="user-contact mes"><textarea class="input-contact"  id="comment" rows="9" cols="20" name="comment" placeholder="Appointment notes (optional)"></textarea></div>
                </div>
                <h1>Address</h1>
                <div class="user-contact-box-2">
                    <div class="user-contact same-line"><input class="input-contact" id="address" type="text" name="address" placeholder="Address" required="required"/></div>
                    <div class="user-contact same-line"><input class="input-contact" id="apt-suite" type="text" name="apartment_number" placeholder="Apt/Suite"/></div>
                    <div class="user-contact same-line"><input class="input-contact" id="city" type="text" name="city" placeholder="City" required="required"/></div>
                    <div class="user-contact"><input class="input-contact" id="state" type="text" name="state" placeholder="State" required="required"/></div>
                    <div class="user-contact"><input class="input-contact" id="zip" type="text" name="zip" placeholder="Zip Code" required="required"/></div>
                 </div>
         </div>
       </div>  
 
      <div class="back-continue">
             <div class="back" >Back</div>
             <div class="continue" >Continue</div>
             <div class="submit-button"><input type="submit" value="Submit"/></div>
        </div>
    </form>
    </div>
    </div>
     </div>
     
    <div class="alert-thank-you">Success!<br>
    Thank you for reaching to Bain Communication.
     We are here to serve you. One of our workers
      will contact you soon.<br>
      <button><strong>OK</strong></button></div>
</body>
    `;
    }
}

customElements.define('calendar-component', PrintCalendar);

const todayDate = new Date();
todayDate.setHours(0, 0, 0, 0);
const calendarController1 = new CalendarPage(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate());
calendarController1.selectDate(".days li", ".year", ".month-of-year");

calendarController1.displayCalendar(".days li", ".year", ".month-of-year");
document.querySelector(".prev").addEventListener('click', () => {
    calendarController1.previous(".days li", ".year", ".month-of-year");
    calendarController1.selectDate(".days li", ".year", ".month-of-year");
});

document.querySelector(".next").addEventListener('click', () => {
    calendarController1.next(".days li", ".year", ".month-of-year");
    calendarController1.selectDate(".days li", ".year", ".month-of-year");
});

const displayCurrentDate = () => {
    const date2 = new Date();
    document.querySelector(".time-to-start").innerHTML = `${calendarController1.calendar.getMonthName(date2.getMonth())} , ${date2.getDate() + 1},  ${date2.getFullYear()}`;
}
displayCurrentDate();


const navigateButton = new NavigateButton();
const array = [".custom-block", ".calendar", ".user-info-contact-box"];

function checkIndexNav() {
    const u = array.length - 1;
    if (navigateButton.current < u) {
        document.querySelector(".continue").style.display = "inline-block";
        document.querySelector(".submit-button").style.display = "none";


    } else {
        document.querySelector(".continue").style.display = "none";
        document.querySelector(".submit-button").style.display = "inline-block";


    }

}

function checkIndexNav2() {


    if (navigateButton.current > 0) {

        document.querySelector(".back").style.visibility = "visible";

    } else {
        document.querySelector(".back").style.visibility = "hidden";

    }

}

function displayElement() {
    document.querySelector(array[navigateButton.current]).style.display = "block";

}

function continueOnClick() {

    for (let i = 0; i < array.length; i++) {
        document.querySelector(array[i]).style.display = "none";
    }
    navigateButton.continue();
    displayElement();
    checkIndexNav2();
    checkIndexNav();
}

function backOnClick() {
    for (let i = 0; i < array.length; i++) {
        document.querySelector(array[i]).style.display = "none";
    }
    navigateButton.back();
    displayElement();
    checkIndexNav2();
    checkIndexNav();

}


document.querySelector(".continue").onclick = () => {
    if (array[navigateButton.current] === ".calendar") {
        if ((calendarController1.getDateChecked() === true) && (timeObject.timeChecked === true)) {
            continueOnClick();
        } else {
            alert("You must choose a date and time to continue")
        }
    } else {
        continueOnClick();
    }
}
document.querySelector(".back").onclick = backOnClick;

function displayRadioValue() {

    let ele = document.querySelectorAll('.choose-service');
    let hideAmShift = document.querySelectorAll('.am-shift');
    for (let t = 0; t < ele.length; t++) {
        if (ele[t].checked) {
            document.querySelector(".continue").style.visibility = "visible";

            if (ele[t].value === "Home Consultation") {
                hideTimeReserved(new Date(todayDate.getFullYear(), todayDate.getMonth()), "homedates");


                // for (let v = 0; v < hideAmShift.length; v++) {
                //     hideAmShift[v].style.display = "none";
                // }
                array.splice(1, 0, ".service-block");
            } else {
                for (let s = 0; s < array.length; s++) {
                    if (array[s] === ".service-block") {

                        array.splice(s, 1);
                    }
                }
                // for (let v = 0; v < hideAmShift.length; v++) {
                //     hideAmShift[v].style.display = "block";
                // }
                hideTimeReserved(new Date(todayDate.getFullYear(), todayDate.getMonth()), "phonedates");

            }
            continueOnClick();


        }
    }
}

timeObject.selected();

document.querySelector("#cancel-button").addEventListener('click', () => calendarComponent.style.display = "none");
document.querySelector("#phone-consultation").onclick = displayRadioValue;
document.querySelector("#home-consultation").onclick = displayRadioValue;

function checkRequiredInput(obj) {
    const textBox = document.querySelector(obj);
    if (textBox.validity.valueMissing) {
        alert("yea");
        textBox.border = "1px red solid";
        textBox.setCustomValidity(`Entering an ${textBox.placeholder} is necessary!`);
    } else if (textBox.type.typeMismatch) {
        textBox.setCustomValidity('Please enter an email address which is valid!');
    } else {
        textBox.setCustomValidity('');
    }
}

function InvalidMsg(textbox) {

    if (textbox.innerHTML === '') {
        textbox.style.border = "1px solid red";

    }

}

document.querySelector(".submit-button input").addEventListener('click', () => InvalidMsg(document.querySelector(".user-contact")));

// (() => {
//     const buttonSubmit = document.querySelector(".submit-button input");
//     const alertThankYou = document.querySelector(".alert-thank-you");
//     new Promise(displayAlert => displayAlert(buttonSubmit)).then(button => button.addEventListener('click',( )=> {
//             document.querySelector(".pop-pup").style.display = "none"; alertThankYou.style.display = "block"
//         }
//     ))
// })();
