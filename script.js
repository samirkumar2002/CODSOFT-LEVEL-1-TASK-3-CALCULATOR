const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let input = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (button.id === 'clear') {
            input = '';
            display.value = '';
        } else if (button.id === 'equals') {
            try {
                input = eval(input).toString();
                display.value = input;
            } catch {
                display.value = 'Error';
                input = '';
            }
        } else {
            input += value;
            display.value = input;
        }
    });
});
