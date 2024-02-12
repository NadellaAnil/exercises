const outerClick = () => {
  console.log('Outer clicked')
}

const innerClick = () => {
  event?.stopPropagation()
  console.log('Inner clicked')
}

const container = document.getElementById('container')!
const button = document.getElementById('btn')!

container.addEventListener('click', outerClick)
button.addEventListener('click', innerClick)
