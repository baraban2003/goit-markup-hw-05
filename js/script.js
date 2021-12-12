window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let tab = document.querySelector(".filters"),
        tabContent = document.querySelector(".filtered-activity");

    tab.addEventListener('click', (e) => {
        console.log(e.target.classList.item(1));

        let items = tabContent.getElementsByClassName('all');
        console.log(items);

        for (let i = 0; i < items.length; i++) {
            if (items[i].classList.contains(e.target.classList.item(1))) {
                items[i].style.display = 'block';
            } else {
                items[i].style.display = 'none';
            }
        }

    });


});