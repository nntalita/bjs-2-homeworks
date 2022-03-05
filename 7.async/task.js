`use strict`

class AlarmClock {

    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error('id не передан')
        } else if (this.alarmCollection.find
        (item => item.id === id)) {
            console.error(`id звонка ${id} уже существует`)
        } else {
            this.alarmCollection.push({time, callback, id});
        }
    }

    removeClock(id) {
        let start = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
        return (this.alarmCollection.length < start);
    }

    getCurrentFormattedTime() {
        return new Date().toTimeString().slice(0, 5);
    }


    start() {
        let timeNow = this.getCurrentFormattedTime;

        function checkClock(alarm) {
            if (timeNow() === alarm.time) {
                alarm.callback();
            }
        }

        checkClock = checkClock.bind(this.start);
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach
                ((item) => checkClock(item))
            }, 10000)
        }
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null
        }
    }

    printAlarms() {
        console.log(`Печать всех будильников в количестве ${this.alarmCollection.length}`)
        this.alarmCollection.forEach(item =>
            console.log(`будильник № ${item.id} заведен на  ${item.time}`))
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

