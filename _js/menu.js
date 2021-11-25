var toggle = document.querySelector('.toggle');
var menu = document.querySelector('.menu');
var closeMenu = document.querySelector('.close');
var menuItem = document.querySelectorAll('.menu a');

toggle.addEventListener('click', showMenu);
closeMenu.addEventListener('click', hideMenu);


function showMenu(){
    menu.classList.add("showMenu");
}
function hideMenu(){
    menu.classList.remove("showMenu");
}

menuItem.forEach(link =>{
    link.addEventListener('click', hideMenu); 
});

window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }




 