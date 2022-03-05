function testCase() {
    let alarmClock = new AlarmClock();
    alarmClock.addClock("00:13", () => {
        console.log("Давай вставай");
    }, 1);
    alarmClock.addClock("00:11", () => {
        console.log("Просыпайся");
        alarmClock.removeClock(2);
    }, 2);
    alarmClock.addClock("00:12", () => {
        console.log("На работу");
        alarmClock.clearAlarms();
        alarmClock.printAlarms();
    }, 3);

    alarmClock.printAlarms();
    alarmClock.start();

}


testCase();


