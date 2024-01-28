import iziToast from "izitoast/dist/js/iziToast.min.js";

document.querySelector('.form').addEventListener('submit', function (event) {
    event.preventDefault();

    const delayInput = document.querySelector('input[name="delay"]');
    const stateInput = document.querySelector('input[name="state"]:checked');

    if (delayInput && stateInput) {
        const delay = parseInt(delayInput.value);

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                stateInput.value === 'fulfilled' ? resolve(delay) : reject(delay);
            }, delay);
        });

        promise
            .then((delay) => {
                iziToast.success({
                    title: 'Fulfilled promise',
                    message: `✅ Fulfilled promise in ${delay}ms`
                });
            })
            .catch((delay) => {
                iziToast.error({
                    title: 'Rejected promise',
                    message: `❌ Rejected promise in ${delay}ms`
                });
            });
    }
});