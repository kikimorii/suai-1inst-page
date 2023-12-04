let menuBtn = document.querySelector('.menu_btn');
let Bur = document.querySelector('.header_menu-burger');
let Body = document.querySelector('body');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	Bur.classList.toggle('active');
	Body.classList.toggle('lock');
})

function toggleHiddenBlock(clickedBlock) {
    var language_menu = clickedBlock.nextElementSibling;

    // Переключаем видимость скрытого блока при каждом клике
    if (language_menu.style.display === "none") {
        language_menu.style.display = "block";
    } else {
        language_menu.style.display = "none";
    }
}