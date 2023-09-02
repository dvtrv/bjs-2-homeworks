class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;

    }
    addClock(time, fn) {
        if (!time || !fn) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        const existingAlarmTime = this.alarmCollection.find(alarm => alarm.time === time);

        if (existingAlarmTime) {
            console.warn('Уже присутствует звонок на это же время');
        }

        this.alarmCollection.push({
            'time': time,
            'callback': fn,
            'canCall': true,
        });
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }

    getCurrentFormattedTime() {
        const now = new Date;
        const nowHours = String(now.getHours());
        const nowMinutes = String(now.getMinutes());
        const formattedTime = `${nowHours.padStart(2, '0')}:${nowMinutes.padStart(2, '0')}`;
        return formattedTime;
    }

    start() {
        if (this.intervalId !== null) {
            return;
        }
        this.intervalId = setInterval(() => {
            const currentTime = this.getCurrentFormattedTime();
            this.alarmCollection.forEach(alarm => {
                if (alarm.time === currentTime && alarm.canCall === true) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            })
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
        })
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}