class Calendar {
    constructor() {
    }

    /** Get the English name for the month */
    getMonthName(month) {
        let monthName = "";
        switch (month) {
            case 0:
                monthName = "January";
                break;
            case 1:
                monthName = "February";
                break;
            case 2:
                monthName = "March";
                break;
            case 3:
                monthName = "April";
                break;
            case 4:
                monthName = "May";
                break;
            case 5:
                monthName = "June";
                break;
            case 6:
                monthName = "July";
                break;
            case 7:
                monthName = "August";
                break;
            case 8:
                monthName = "September";
                break;
            case 9:
                monthName = "October";
                break;
            case 10:
                monthName = "November";
                break;
            case 11:
                monthName = "December";
                break;
        }

        return monthName;
    }
    getCurrentTime(){
        const d = new Date();
        d.setHours(0,0,0,0);
        return d.getTime();
    }
    getCustomTime(year, month, day){
        const d = new Date(year, month, day);
        d.setHours(0,0,0,0);
        return d.getTime();
    }


    /** Get the start day of month/1/year */
    getStartDay(year, month) {
        let START_DAY_FOR_JAN_1_1800 = 3;
        // Get total number of days from 1/1/1800 to month/1/year
        let totalNumberOfDays = this.getTotalNumberOfDays(year, month);

        // Return the start day for month/1/year
        return (totalNumberOfDays + START_DAY_FOR_JAN_1_1800) % 7;
    }

    /** Get the total number of days since January 1, 1800 */
    getTotalNumberOfDays(year, month) {
        let total = 0;

        // Get the total days from 1800 to 1/1/year
        for (let i = 1800; i < year; i++)
            if (this.isLeapYear(i))
                total = total + 366;
            else
                total = total + 365;

        // Add days from Jan to the month prior to the calendar month
        for (let i = 0; i < month; i++)
            total = total + this.getNumberOfDaysInMonth(year, i);

        return total;
    }

    getNumberOfDaysInMonth(year, month) {
        if (month === 0 || month === 2 || month === 4 || month === 6 ||
            month === 7 || month === 9 || month === 11) {
            return 31;
        }
        if (month === 3 || month === 5 || month === 8 || month === 10)
            return 30;

        if (month === 1) return this.isLeapYear(year) ? 29 : 28;

        return 0; // If month is incorrect
    }

    isLeapYear(year) {
        return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);

    }
}

class CalendarController {
    static calendar = new Calendar();
    static currentMonth = new Date().getMonth();
    static currentYear = new Date().getFullYear();
    static d = new Date();
    static date = new Date(this.currentYear, this.currentMonth, this.d.getDate());

    static startDay = this.getStartDay();

    constructor() {

    }

    static getStartDay() {
        return this.calendar.getStartDay(this.currentYear, this.currentMonth);
    }

    static nextMonth() {
        this.currentMonth += 1;
    }


    static previousMonth() {
        this.currentMonth -= 1;
    }

    setYear(year) {
        this.currentYear = year;
    }

    static setMonth(month) {
        this.currentMonth = month;
    }

    static nextYear() {
        this.currentYear += 1;
    }

    static previousYear() {
        this.currentYear -= 1;
    }
    static designCalendar(dayOfTheMonths, index, color, event) {
        if(event.trim()==='remove') {
            dayOfTheMonths[index].removeEventListener("mouseover", () => {
                dayOfTheMonths[index].style.border = "1px cornflowerblue solid";
                dayOfTheMonths[index].style.cursor = "pointer";
            });

            dayOfTheMonths[index].removeEventListener("mouseout", () =>
                dayOfTheMonths[index].style.border = `1px ${color} solid`);
        }
        else {
            dayOfTheMonths[index].addEventListener("mouseover", () => {
                dayOfTheMonths[index].style.border = "1px cornflowerblue solid";
                dayOfTheMonths[index].style.cursor = "pointer";
            });

            dayOfTheMonths[index].addEventListener("mouseout", () =>
                dayOfTheMonths[index].style.border = `1px ${color} solid`);
        }
    }
    static displaySelectedDay(dayOfTheMonths1, index){
        const daySelected = Object.assign(this.date);
        if(this.date.getTime()===daySelected.getTime()){

            document.querySelector("#date-value").value=daySelected;
            //alert(daySelected);
            // alert(`current1  date1: ${this.date.getTime()} current month: ${this.currentMonth} year : ${this.date} current year: ${this.currentYear}`);

            dayOfTheMonths1[index].style.backgroundColor = "#6495ED45";
            dayOfTheMonths1[index].style.color = "cornflowerblue";
            dayOfTheMonths1[index].style.border = "1px #6A687461 solid";
        }
    }
    static displayCalendar() {
        const dayOfTheMonths = document.querySelectorAll(".days li");
        let dayIndex = this.getStartDay();
        this.date.setHours(0, 0, 0, 0);
        this.d.setHours(0, 0, 0, 0);
        for (let i = 0; i < dayOfTheMonths.length; i++) {
            dayOfTheMonths[i].innerHTML = "";
            dayOfTheMonths[i].style.visibility = 'visible';
            dayOfTheMonths[i].style.border = "none";
            dayOfTheMonths[i].onmouseover = null;
            dayOfTheMonths[i].onmouseout = null;
        }


        for (let dayOfTheWeek = 1; dayOfTheWeek <= this.calendar.getNumberOfDaysInMonth(this.currentYear, this.currentMonth); dayOfTheWeek++) {
            let indexDate = dayIndex;
            dayOfTheMonths[indexDate].innerHTML = dayOfTheWeek;
            document.querySelector(".year").innerHTML = this.currentYear;
            document.querySelector(".month-of-year").innerHTML = this.calendar.getMonthName(this.currentMonth);
            this.date.setMonth(this.currentMonth);
            this.date.setFullYear(this.currentYear);
            this.date.setDate(dayOfTheWeek);
            if (this.date.getTime() < this.d.getTime()) {
                dayOfTheMonths[indexDate].style.color = "#6A687461";
                dayOfTheMonths[indexDate].style.backgroundColor = "transparent";
                dayOfTheMonths[indexDate].style.border = "none";
                dayOfTheMonths[indexDate].onmouseover = null;
                dayOfTheMonths[indexDate].onmouseout = null;
                dayOfTheMonths[indexDate].style.cursor = "default";



            } if(this.date.getTime()>this.d.getTime()) {


                dayOfTheMonths[dayIndex].style.backgroundColor = "transparent";
                dayOfTheMonths[dayIndex].style.color = "#6A6874";
                dayOfTheMonths[dayIndex].style.border = "1px #6A687461 solid";
                this.designCalendar(dayOfTheMonths, indexDate, "#6A687461", 'add');

            }
            if (this.date.getTime() === this.d.getTime()) {
                document.querySelector(".prev").style.visibility='hidden';

                dayOfTheMonths[indexDate].style.backgroundColor = "cornflowerblue";
                dayOfTheMonths[indexDate].style.color = "white";
                dayOfTheMonths[indexDate].style.border = "1px #6A687461 solid";


            }

            dayIndex += 1;
        }
        for (let i = 0; i < dayOfTheMonths.length; i++) {
            if (dayOfTheMonths[i].textContent === "") {
                dayOfTheMonths[i].style.cursor = null;
                dayOfTheMonths[i].style.visibility = 'hidden';
                dayOfTheMonths[i].onmouseover = null;
                dayOfTheMonths[i].onmouseout = null;
                dayOfTheMonths[i].style.backgroundColor='transparent';

            }
        }
    }

    static selectDate() {
        const calendar1 = this.calendar;


        const dayOfTheMonths1 = document.querySelectorAll(".days li");
        this.startDay= this.getStartDay();
        let dayIndex1 = this.startDay;
        this.d.setHours(0, 0, 0, 0);
        for (let date = 1; date <= calendar1.getNumberOfDaysInMonth(this.currentYear, this.currentMonth); date++) {
            let indexDate1 = dayIndex1;
            dayOfTheMonths1[dayIndex1].addEventListener("click", () => {
                this.displayCalendar();
                this.date.setDate(parseInt(dayOfTheMonths1[indexDate1].innerHTML.trim()));

                if (this.date.getTime() >= this.d.getTime()) {
                    this.displaySelectedDay(dayOfTheMonths1, indexDate1);

                }


            });

            dayIndex1 += 1;


        }

    }

    static next() {

        this.nextMonth();


        if (this.currentMonth > 11) {
            this.nextYear();
            this.setMonth(0);
        }
        document.querySelector(".prev").style.visibility='visible';
        const dayOfTheMonths = document.querySelectorAll(".days li");
        for (let i = 0; i < dayOfTheMonths.length; i++) {
            this.designCalendar(dayOfTheMonths, i, "#6A687461", 'remove');
            dayOfTheMonths[i].style.border = "none";
            dayOfTheMonths[i].onmouseover = null;
            dayOfTheMonths[i].onmouseout = null;
            dayOfTheMonths[i].style.backgroundColor='transparent';
            this.displaySelectedDay(dayOfTheMonths, i);

        }

    }

    static previous() {

        if (this.date.getTime() > this.d.getTime()) {        const dayOfTheMonths = document.querySelectorAll(".days li");

            this.previousMonth();

            if (this.currentMonth < 0) {
                this.previousYear();
                this.setMonth(11);

            }

            // this.date.setMonth(this.currentMonth);
            // this.date.setFullYear(this.currentYear);
            // this.startDay = this.getStartDay();
            for (let i = 0; i < dayOfTheMonths.length; i++) {
                this.designCalendar(dayOfTheMonths, i, "#6A687461", 'remove');
                dayOfTheMonths[i].style.border = "none";
                dayOfTheMonths[i].onmouseover = null;
                dayOfTheMonths[i].onmouseout = null;
                dayOfTheMonths[i].style.backgroundColor='transparent';
                this.displaySelectedDay(dayOfTheMonths, i);


            }
            // this.selectDate();
            // this.displayCalendar();




            // alert(`current1  date1: ${this.date.getTime()} current month: ${this.currentMonth} current date  : ${this.date} current year: ${this.currentYear}`);

        }
    }
}

export {CalendarController, Calendar};


