document.addEventListener('DOMContentLoaded', () => {
    const myButton = document.getElementById('myButton');
    const myParagraph = document.getElementById('myParagraph');
    let clickCount = 0;

    myButton.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 1) {
            myParagraph.textContent = 'You clicked the button!';
        } else {
            myParagraph.textContent = `You clicked the button ${clickCount} times!`;
        }
    });
});