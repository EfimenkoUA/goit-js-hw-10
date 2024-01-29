import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast/dist/js/iziToast.min.js";
import "izitoast/dist/css/iziToast.min.css";

const button = document.querySelector('button');
const dataStart = document.querySelector('[data-start]');
const dataInput = document.querySelector('[data-input]');
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];

        if (selectedDate < new Date()) {
            button.disabled = true;
            iziToast.error({
                title: 'Error',
                message: 'Please choose a date in the future',
            });
        } else {
            button.disabled = false;
        }
    },
};

flatpickr("#datetime-picker", options);

let countdownInterval;

dataStart.addEventListener('click', startCountdown);

function startCountdown() {
    const selectedDate = flatpickr.parseDate(document.querySelector('#datetime-picker').value);

    dataStart.disabled = true;
    dataInput.disabled = true;

    countdownInterval = setInterval(updateCountdown, 1000, selectedDate);
}

function updateCountdown(targetDate) {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        displayTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
        const timeLeft = convertMs(timeDifference);
        displayTime(timeLeft);
    }
}

function displayTime({ days, hours, minutes, seconds }) {
    document.querySelector('[data-days]').textContent = addLeadingZero(days);
    document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
    document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
    document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return value < 10 ? `0${value}` : value;
}