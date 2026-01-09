document.querySelector('.promiseButton').addEventListener('click', function() {
    const resultElement = document.querySelector('#result');
    resultElement.textContent = 'Iltimos kuting ...';

    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Malumot yetib keldi');
        }, 7000);
    })
    .then(message => {
        resultElement.textContent = message;
    })
    .catch(error => {
        resultElement.textContent = 'Error: ' + error;
    });
});