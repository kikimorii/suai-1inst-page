let menuBtn = document.querySelector('.menu_btn');
let Bur = document.querySelector('.header_menu-burger');
let Body = document.querySelector('body');
let tableBtn = document.querySelector('.header_submenu-main-item.hidden-table')
let drop = document.querySelector('.header_dropsubmenu-burger-list');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	Bur.classList.toggle('active');
	Body.classList.toggle('lock');
})

tableBtn.addEventListener('click', function(){
	drop.classList.toggle('active');
	tableBtn.classList.toggle('active');
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

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();