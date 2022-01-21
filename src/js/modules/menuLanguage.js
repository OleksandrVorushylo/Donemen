const menuLanguage = () => {
    const btn = document.querySelector('.form__language'),
        icon = document.querySelector('.form__language img'),
        header = document.querySelector('.form'),
        menu = document.querySelector('.form__dropdown-language'),
        link = document.querySelectorAll('.form__dropdown-language a');

    document.addEventListener('click', e => {
        const border = e.composedPath().includes(header);
        if (!border) {
            menu.classList.remove('form__dropdown-language--active');
            icon.classList.remove('form__icon-active');
        }
    });

    btn.addEventListener('click', event => {
        event.preventDefault();
        menu.classList.toggle('form__dropdown-language--active');
        icon.classList.toggle('form__icon-active');
    });

    link.forEach(i => (
        i.addEventListener('click', () => {
            menu.classList.remove('form__dropdown-language--active');
            icon.classList.remove('form__icon-active');
        })
    ))
}

export default menuLanguage;