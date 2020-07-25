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


    // tabs   
    const tabs = document.querySelectorAll('.about__tabs__item'),
		tabsContent = document.querySelectorAll('.about__cards__item'),
        tabsParent = document.querySelector('.about__tabs');
        
        function hideTabContent () {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        } );
        tabs.forEach( item => {
            item.classList.remove('about__tabs__item--active');
        });
    }

    function showTabContent (i = 0) {
        tabsContent[i].style.display = 'flex';
        tabs[i].classList.add('about__tabs__item--active');
    }

    hideTabContent();
    showTabContent(0);

    tabsParent.addEventListener ('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('about__tabs__item')) {
            tabs.forEach ((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

 

    // accordeon 

    const qestions = document.querySelectorAll ('.asked__accord__item__title'), 
            content = document.querySelectorAll ('.asked__accord__item__text'); 

    content.forEach (item => {
        item.style.display = 'none';
    });

    for (let i=0; i<qestions.length; i++) {
        qestions[i].addEventListener ('click', () => {
            let st = window.getComputedStyle(content[i]);
            if (st.display === 'none') {
                content[i].style.display = 'block';
            } else {
                content[i].style.display = 'none';  
            }
        });
    }
//slider
const sliders = document.querySelectorAll('.testimonials__list__item');
const prev = document.querySelector('.testimonials__arrow--left');
const next = document.querySelector('.testimonials__arrow--right');
let slideIndex = 1;

showSlide(slideIndex);

        function showSlide (n) {
            if (n > sliders.length) {
                slideIndex = 1;
            }
            if (n<1) {
                slideIndex = sliders.length;
            }
            sliders.forEach (item => item.style.display = 'none' );

            sliders[slideIndex-1].style.display = '';
        }

        function plusSlides(n) {
            showSlide(slideIndex +=n);
        }
        prev.addEventListener ('click', () => {
            plusSlides(-1);
        });
        next.addEventListener ('click', () => {
            plusSlides(1);
        });
        // end slider

