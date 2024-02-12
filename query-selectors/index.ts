const handleBlueButtonClick = () => {
  const blueParagraph = document.querySelector('.highlight-blue') as HTMLElement
  const par4 = document.querySelector('#par-4') as HTMLElement
  blueParagraph.style.background = 'blue'
  blueParagraph.style.color = 'white'

  par4.style.background = 'green'
  par4.style.color = 'white'
}

const handleRedButtonClick = () => {
  const paragraphs = document.querySelectorAll('.highlight-red') as NodeListOf<HTMLElement>
  paragraphs.forEach(function (el) {
    el.style.background = 'red'
    el.style.color = 'white'
  })
}
