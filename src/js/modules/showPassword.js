const showPassword = () => {
    const btn = document.querySelector('.form__show'),
        input = document.querySelector('.form__password');

    function showHidePassword(){

        if (input.getAttribute('type') == 'password') {
            btn.classList.add('view');
            input.setAttribute('type', 'text');
        } else {
            btn.classList.remove('view');
            input.setAttribute('type', 'password');
        }
        return false;
    }
    btn.addEventListener('click', (event) => {
        event.preventDefault()
        showHidePassword();
    })

}

export default showPassword;