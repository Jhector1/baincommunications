import {Calendar} from "./calendar.js";
import {hideTimeReserved} from "./helperMethod.js";

class Header {
    constructor() {
    }

    static display1(attribute, value) {
        domObject(attribute)[0].innerHTML = value;
    }

    static display2(attribute, value) {
        domObject(attribute)[0].innerHTML = value;
    }
}

class Footer {
    constructor() {
    }

    display() {

    }
}

class HeaderForCalendar extends Header {
    constructor() {
        super();
    }

}


function domObject(attribute) {
    return document.querySelectorAll(attribute);
}

class CalendarPage {
    constructor(year, month, day) {
        this.dateChecked=false;
        this.year = year;
        this.day = day;
        this.month = month;
        this.calendar = new Calendar(this.year, this.month, this.day);
    }

    nextMonth() {
        this.month += 1
    }
    setDateChecked(yesOrNo){
        this.dateChecked= yesOrNo;
    }
    getDateChecked(){
        return this.dateChecked;
    }

    previousMonth() {
        this.month -= 1;
    }

    nextYear() {
        this.year += 1;
    }

    previousYear() {
        this.year -= 1;
    }

    setMonth(month) {
        this.month = month;
    }

    getDayOfTheMonth(attribute) {
        return domObject(attribute);
    }

    displayCalendar(...attribute) {
        DesignCalendar.emptyContent(this.getDayOfTheMonth(attribute[0]));
        DesignCalendar.resetContent(this.getDayOfTheMonth(attribute[0]));
        HeaderForCalendar.display1(attribute[1], this.year);
        HeaderForCalendar.display2(attribute[2], this.calendar.getMonthName(this.month));

        let v = this.calendar.getStartDay(this.year, this.month);
        for (let indexDate = 1;
             indexDate <= this.calendar.getNumberOfDaysInMonth(this.year, this.month);
             indexDate++) {
            this.day = indexDate;
            new DesignCalendar(this.year, this.month, this.day).checkCurrentDate(this.getDayOfTheMonth(attribute[0]), v, "#6A687461");
            this.getDayOfTheMonth(attribute[0])[v].innerHTML = this.day;

            v += 1;
        }

        DesignCalendar.resetContent(this.getDayOfTheMonth(attribute[0]))();

    }

    displaySelectedDay(dayOfTheMonths1, index) {

        dayOfTheMonths1[index].style.backgroundColor = "#6495ED45";
        dayOfTheMonths1[index].style.color = "cornflowerblue";
        dayOfTheMonths1[index].style.border = "1px #6A687461 solid";

    }

    selectDate(...attribute) {

        let dayIndex1 = this.calendar.getStartDay(this.year, this.month);
        for (let date = 1; date <= this.calendar.getNumberOfDaysInMonth(this.year, this.month); date++) {
            let indexDate1 = dayIndex1;
            this.getDayOfTheMonth(attribute[0])[dayIndex1].addEventListener("click", () => {
                this.displayCalendar(attribute[0], attribute[1], attribute[2]);
                if (this.calendar.getCustomTime(this.year, this.month, date) > this.calendar.getCurrentTime()) {
                    document.querySelector("#date-value").value = new Date(this.year, this.month, date);
this.setDateChecked(true);
                    this.displaySelectedDay(this.getDayOfTheMonth(attribute[0]), indexDate1);
location.href='#time-input15';
                }
                else{
                    this.setDateChecked(false);
                }


            });

            dayIndex1 += 1;


        }

    }

    previous(...attribute) {
        this.previousMonth();
        if (this.month < 0) {
            this.previousYear();
            this.setMonth(11);
        }
        let ele = document.querySelectorAll('.choose-service');
        for (let t = 0; t < ele.length; t++) {
            if (ele[t].checked) {

                if (ele[t].value === "Home Consultation") {
                    hideTimeReserved(new Date(this.year, this.month), "homedates");


                } else {
                    hideTimeReserved(new Date(this.year, this.month), "phonedates");

                }

            }
        }
        this.displayCalendar(attribute[0], attribute[1], attribute[2]);
    }

    next(...attribute) {
        document.querySelector(".prev").style.visibility = 'visible';

        this.nextMonth();


        if (this.month > 11) {
            this.nextYear();
            this.setMonth(0);
        }


        let ele = document.querySelectorAll('.choose-service');
        for (let t = 0; t < ele.length; t++) {
            if (ele[t].checked) {

                if (ele[t].value === "Home Consultation") {
                hideTimeReserved(new Date(this.year, this.month), "homedates");


                } else {
                    hideTimeReserved(new Date(this.year, this.month), "phonedates");

                }

            }
        }

        this.displayCalendar(attribute[0], attribute[1], attribute[2]);


    }

}

class DesignCalendar {
    constructor(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.calendar = new Calendar(this.year, this.month, this.day);
        this.currentDate = this.calendar.getCurrentTime();
        this.customDate = this.calendar.getCustomTime(this.year, this.month, this.day);
    }

    checkCurrentDate(obj, index, color) {

        if (this.customDate < this.currentDate) {
            DesignCalendar.designDate(obj, index)(color)()()();

            this.designEvent(obj, index, "#6A687461", 'remove');


        }
        if (this.customDate > this.currentDate) {
            DesignCalendar.designDate(obj, index)(color)()();
            this.designEvent(obj, index, "#6A687461", 'add');

        }
        if (this.currentDate === this.customDate) {
            document.querySelector(".prev").style.visibility = 'hidden';
            DesignCalendar.designDate(obj, index)(color)();

        }

    }

    designEvent(dayOfTheMonths, index, color, event) {
        if (event.trim() === 'remove') {
            dayOfTheMonths[index].removeEventListener("mouseover", () => {
                DesignCalendar.designDate(dayOfTheMonths, index);
            });

            dayOfTheMonths[index].removeEventListener("mouseout", () =>
                DesignCalendar.designDate(dayOfTheMonths, index)(color));

        } else {
            dayOfTheMonths[index].addEventListener("mouseover", () => {
                DesignCalendar.designDate(dayOfTheMonths, index);
            });

            dayOfTheMonths[index].addEventListener("mouseout", () =>
                DesignCalendar.designDate(dayOfTheMonths, index)(color));

        }
    }

    static resetContent(obj) {
        for (let r = 0; r < obj.length; r++) {
            obj[r].style.visibility = 'visible';
            obj[r].onmouseover = null;
            obj[r].onmouseout = null;

        }
        return () => {
            for (let i = 0; i < obj.length; i++) {
                if (obj[i].textContent === "") {
                    obj[i].style.cursor = null;
                    obj[i].style.visibility = 'hidden';
                    obj[i].style.backgroundColor = 'transparent';

                }
            }
        }
    }

    static designDate(obj, index) {
        //design for mouse over
        obj[index].style.border = "1px cornflowerblue solid";
        return (color) => {
            //design mouse out
            obj[index].style.border = `1px ${color} solid`;
            return () => {
                //design for when customDate == currentDate

                obj[index].style.backgroundColor = "cornflowerblue";
                obj[index].style.color = "white";
                return () => {
                    //design for when customDate > currentDate

                    obj[index].style.backgroundColor = "transparent";
                    obj[index].style.color = "#6A6874";
                    obj[index].style.cursor = "pointer";
                    return () => {
                        //design for when customDate < currentDate
                        obj[index].style.color = color;
                        obj[index].style.cursor = null;
                        obj[index].style.border = "none";
                        obj[index].onmouseover = null;
                        obj[index].onmouseout = null;

                    }
                }
            }
        }

    }

    static emptyContent(obj) {
        for (let i = 0; i < obj.length; i++) {
            obj[i].innerHTML = "";
            obj[i].style.border = "none";
        }
    }
}

export {CalendarPage};