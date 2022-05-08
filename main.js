document.addEventListener('DOMContentLoaded', () => {
  let targets = document.querySelectorAll('section')

  window.addEventListener('scroll', function () {
    const scroll = window.scrollY
    const windowHeight = window.innerHeight
    targets.forEach((target) => {
      const targetPos = target.getBoundingClientRect().top + 0.5 * target.offsetHeight + scroll
      if (scroll > targetPos - windowHeight) {
        target.classList.remove('right')
        target.classList.remove('left')
      }
    })
  })
})
