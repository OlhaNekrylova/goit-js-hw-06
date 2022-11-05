const formEl = document.querySelector('.login-form');
const inputEl = document.querySelector('.login-form > input');
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();
    console.log(event);
    const {elements: { email, password}} = event.currentTarget;
    if (email.value === ' ' || password.value === ' ') {
        console.log(alert('Please, fill in all fields!'));
    } 
    
    console.log({elements: { email, password}});
    event.currentTarget.reset();
}