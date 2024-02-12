const handleSubmit = () => {
  const person = (document.getElementById('person-name') as HTMLInputElement).value
  const subject = (document.getElementById('subject') as HTMLInputElement).value
  const message = (document.getElementById('message') as HTMLInputElement).value

  if (person.length === 0 ||
      subject.length === 0 ||
      message.length === 0) {
    // Oh no an error! We should tell the user.
  } else {
    const form = (document.getElementById('send-message-form') as HTMLFormElement)
    form.submit()
  }
}
