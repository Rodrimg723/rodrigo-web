document.addEventListener('DOMContentLoaded', () => {
  // --- NAVEGACIÓN SPA (Single Page Application) ---
  const navLinks = document.querySelectorAll('.nav-item')
  const sections = document.querySelectorAll('.page-section')
  const hamburger = document.querySelector('.hamburger-menu')
  const navMenu = document.querySelector('.nav-links')

  // Función para cambiar de sección
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()

      // 1. Remover clase activa de todos los links
      navLinks.forEach((item) => item.classList.remove('active'))
      // 2. Añadir clase activa al link clickeado
      link.classList.add('active')

      // 3. Obtener el ID del target
      const targetId = link.getAttribute('data-target')

      // 4. Ocultar todas las secciones y mostrar la target
      sections.forEach((section) => {
        section.classList.remove('active')
        if (section.id === targetId) {
          section.classList.add('active')
        }
      })

      // 5. Scroll suave hacia arriba
      window.scrollTo({ top: 0, behavior: 'smooth' })

      // 6. Cerrar menú móvil si está abierto
      navMenu.classList.remove('active')
    })
  })

  // Toggle Menú Hamburguesa
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active')
  })

  // --- INTERACTIVIDAD LIFESTYLE ---
  const hobbyTriggers = document.querySelectorAll('.hobby-trigger')
  const displayImg = document.getElementById('lifestyle-img')

  if (hobbyTriggers && displayImg) {
    hobbyTriggers.forEach((trigger) => {
      // Evento Mouseover para Desktop
      trigger.addEventListener('mouseover', function () {
        updateLifestyle(this)
      })

      // Evento Click para Móvil
      trigger.addEventListener('click', function () {
        updateLifestyle(this)
      })
    })

    function updateLifestyle(element) {
      // Remover active de todos
      hobbyTriggers.forEach((t) => t.classList.remove('active'))
      // Añadir active al actual
      element.classList.add('active')

      // Cambiar imagen con un pequeño fade
      const newSrc = element.getAttribute('data-img')

      // Pequeña animación de opacidad para la transición
      displayImg.style.opacity = '0.5'

      setTimeout(() => {
        displayImg.src = newSrc
        displayImg.style.opacity = '1'
      }, 200)
    }
  }

  // --- EFECTO DE MAQUINA DE ESCRIBIR (OPCIONAL) ---
  const subtitle = document.querySelector('.sub-masthead')
  if (subtitle) {
    const text = subtitle.innerText
    subtitle.innerText = ''
    let i = 0

    function typeWriter() {
      if (i < text.length) {
        subtitle.innerText += text.charAt(i)
        i++
        setTimeout(typeWriter, 50)
      }
    }
    // Iniciar un poco después de cargar
    setTimeout(typeWriter, 1000)
  }
})
