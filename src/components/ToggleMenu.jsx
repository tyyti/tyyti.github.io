
export const toggleMenu = () => {
  const toggleMenu = document.querySelector(".header-menu");
  const navigation = document.querySelector("nav");
  toggleMenu.classList.toggle("active");
  navigation.classList.toggle("active");

}

