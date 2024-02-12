const myMove = () => {
  const element = document.getElementById('myAnimation')!  
  let position = 0
  const frame = () => {
    if (position == 350) {
      clearInterval(id)
    } else {
      position++ 
      element.style.top = `${position  }px` 
      element.style.left = `${position  }px` 
    }
  }
  const id = setInterval(frame, 10)
}

const button = document.getElementById('myButton')!
button.addEventListener('click', myMove)
