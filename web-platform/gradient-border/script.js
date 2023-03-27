document.querySelectorAll('.item').forEach((color) => {
  color.addEventListener('click', (e) => {
    const filterButtons = document.querySelectorAll('.active')

    for (let i = 0; i < filterButtons.length; i++) {
      const colorSwatch = e.target
      const colorPreview = colorSwatch.dataset.gradient

      colorSwatch.parentNode.previousElementSibling.setAttribute(
        'data-gradient',
        colorPreview
      );
    }

    filterButtons.forEach((item) => {
      item.classList.remove('active')
    })

    if (!e.target.classList.contains('active')) {
      e.target.classList.add('active')
    }
  })
})
