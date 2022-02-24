`use strict`

class AlarmClock {
    alarmCollection = [];
    timerId;
    alarm;

    constructor(time, callback, id) {
        this.timerId = id;
        this.alarm = {id, time, callback};
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error('error text')
        } else if (!this.alarmCollection.find
        (item => item.id === id)) {
            console.error(`id звонка ${id} уже существует`)
        } else {
            this.alarmCollection.push(this.alarm);
        }
    }

    removeClock(id) {
        let start = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
        return (this.alarmCollection.length < start);

    }

    getCurrentFormattedTime() {
        let timeNow = new Date();
        let hour = String(timeNow.getHours() + 3).padStart(2, 0);
        let minutes = String(timeNow.getMinutes()).padStart(2, 0);
        return hour + ":" + minutes;
    }

    start() {
        function checkClock(alarm) {
            let timeNow = getCurrentFormattedTime();
            if (alarm.id === timeNow) {
                alarm.callback();
            }
        }
        // TODO if (){} Если значение идентификатора текущего таймера
        //  отсутствует, то создайте новый интервал.

    //В этом интервале реализуйте функцию, которая будет перебирать все
        // звонки, и для каждого вызывать функцию checkClock.
    //езультат функции setInterval сохраните в свойстве идентификатора
        // текущего таймера.
        function clearInterval(){

        }
    }
    stop(){};
    printAlarmsv(){};
    clearAlarms(){}
}