function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else{
    navigation.classList.remove('scroll')
  }
}
function openMenu() {
  navigation.classList.remove('scroll')
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  navigation.classList.remove('scroll')
  document.body.classList.remove('menu-expanded')
}
