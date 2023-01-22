class NavigateButton {
    constructor() {
        this.current = 0;
    }

    back() {
        this.current -= 1;
    }

    continue() {
        this.current += 1;
    }
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

function timeOnClick() {
    const time = document.querySelectorAll(".time-input");
    const time_div = document.querySelectorAll(".available-time");

    const iElement = document.querySelectorAll(".available-time i");

    for (let t = 0; t < time.length; t++) {
        time[t].addEventListener("click", () => {
            for (let y = 0; y < iElement.length; y++) {
                iElement[y].innerHTML = "";
                time_div[y].style.backgroundColor = "cornflowerblue";
            }
            time_div[t].style.backgroundColor = '#6A6A75';
            iElement[t].innerHTML = "&#10003;"
        });
    }
}

function hideTimeReserved(date24, whichPath) {

    function parseJSON(data) {
        const obj = JSON.parse(data);
        const time = document.querySelectorAll(".available-time input");
        const label = document.querySelectorAll(".available-time");
        for(let o = 0; o< label.length; o++){
            label[o].style.display = "block";

        }


        let ele = document.querySelectorAll('.choose-service');
        let hideAmShift = document.querySelectorAll('.am-shift');
        for (let t = 0; t < ele.length; t++) {
            if (ele[t].checked) {

                if (ele[t].value === "Home Consultation") {

                    for (let v = 0; v < hideAmShift.length; v++) {
                        hideAmShift[v].style.display = "none";
                    }
                } else {

                    // for (let v = 0; v < hideAmShift.length; v++) {
                    //     hideAmShift[v].style.display = "block";
                    // }

                }

            }
        }



        for (let y = 0; y < obj.length; y++) {
            for (let i = 0; i < time.length; i++) {
                const dateSaved1= new Date(obj[y].date);

                const dateSaved= new Date(dateSaved1.getFullYear(), dateSaved1.getMonth());
               dateSaved.setHours(0,0,0,0);
                if (dateSaved.getTime() === date24.getTime()) {
                    console.log(`${dateSaved} === ${date24}`);

                    if (obj[y].time.trim() === time[i].value.trim()) {
                        label[i].style.display = "none";
                        // label[i].style.backgroundColor="#6A687461";
                        // label[i].onclick= null;


                    }
                }

             }
        }
    }

    const allDates = fetch("api/baincommunication/" + whichPath).then(response => response.json());
    allDates.then(jSonString => {
        parseJSON(JSON.stringify(jSonString))
    });

}

const path = window.location.pathname;
const page = path.split("/").pop();
const calendarComponent = document.querySelector("calendar-component");


export {NavigateButton};
export {changeColor, changeBackgroundColor, page, calendarComponent, timeOnClick, hideTimeReserved};