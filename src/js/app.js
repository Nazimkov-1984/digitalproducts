// Search 

const link = document.querySelectorAll ('.header__bar__item'),
        inp = document.querySelector ('.header__input'); 

        showMenu ();


    function showMenu() {
        link[1].addEventListener('click', () => {
           const styleInput = window.getComputedStyle(inp);

           if (styleInput.display === 'none') {
               inp.style.display = 'block';
           }else {
            inp.style.display = 'none';
           }
           event.preventDefault(link[1]);
        });
    } 