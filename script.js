window.addEventListener('scroll', onScroll)

function onScroll() {
  shownNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  //verificar se o topo da seção passou da linha alvo

  //linha alvo
  const targetLine = scrollY + innerHeight / 2

  //topo da seção
  const sectionTop = section.offsetTop

  //altura da seção
  const sectionHeigh = section.offsetHeight

  //o topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  //verificar se a parte de baixo da seção passou da linha alvo

  //a seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeigh

  //o final da seção passou da linha alvo
  const sectionEndPassedTargelLine = sectionEndsAt <= targetLine

  //limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargelLine

  //pegar elemento sem usar o nome do id
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  //adicionar classe no html
  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function shownNavOnScroll() {
  if (scrollY > 0) {
    navigationMenu.classList.add('scroll')
  } else {
    navigationMenu.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButtonShow.classList.add('show')
  } else {
    backToTopButtonShow.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .cards,
#about,
#about header,
#about content`)

onScroll()
