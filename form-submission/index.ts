const checkPerson = (event: SubmitEvent) => {
  event.preventDefault()
  
  const person = (document.getElementById('person-name') as HTMLInputElement)
  const drink = (document.getElementById('drink-name') as HTMLInputElement)

  const inputErrorMessage = document.getElementById('input-error-message')!

  if (person.value.length === 0 || drink.value.length === 0) {
      inputErrorMessage.style.display = 'block'
  } else {
    inputErrorMessage.style.display = 'none'
    alert(`${person  } likes ${ drink}`)    
    person.value= " ";
    drink.value= " ";
  }

  const handleClick = () => {
    const hiddenText = document.getElementById("hidden-text")!
    hiddenText.style.display = "block"
  }

  const button = document.getElementById("button")!
  button.addEventListener("click", handleClick)


}
