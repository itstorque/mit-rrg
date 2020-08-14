function toggleMenu(){
  document.getElementById("menu_button").classList.toggle("active");
  document.getElementById("menu").classList.toggle("open");
  document.getElementById("menuBG").classList.toggle("open");
};

document.getElementById("menu_button").addEventListener("click", toggleMenu);
