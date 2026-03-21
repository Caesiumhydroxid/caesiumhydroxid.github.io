

function validateEmail(value) {

const iconEmail = document.getElementById('emailCheckIcon')
const emailParagraph = document.getElementById('emailActionHint')
const inputEmail = document.getElementById('inputEmailField')
const submitButton = document.getElementById('submitbutton')
if (validateRegexString(value)) {
  submitButton.disabled = false
  // input box color
  inputEmail.classList.remove('is-danger')
  inputEmail.classList.add('is-success')
  // icon type
  iconEmail.classList.remove('fa-exclamation-triangle')
  iconEmail.classList.add('fa-check')
  emailParagraph.style = 'display:none'
    emailValidated = false
} else {
  submitButton.disabled = true
  // input box color
  inputEmail.classList.remove('is-sucess')
  inputEmail.classList.add('is-danger')
  // icon type
  iconEmail.classList.remove('fa-check')
  iconEmail.classList.add('fa-exclamation-triangle')
  emailParagraph.style = 'display:block'
  emailValidated = false
}   
}
function validateRegexString(email) {
    const regexString = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regexString.test(String(email).toLowerCase()) // true|false
}

function submitFunction()
{
  const heroSuccess = document.getElementById('success-contact')
  heroSuccess.style = 'display:block;'
  heroSuccess.scrollIntoView({block:"start",behaviour:"smooth"})
}