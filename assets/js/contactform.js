
let emailValidated = false;
let formStartedAt = 0;
let contactFormInitialized = false;

const MIN_SUBMIT_DELAY_MS = 5000;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    initContactForm();
  });
} else {
  initContactForm();
}

function initContactForm() {
  if (contactFormInitialized) {
    return;
  }

  const form = document.getElementById('contact-form');
  if (!form) {
    return;
  }

  contactFormInitialized = true;

  formStartedAt = Date.now();
  const startedAtInput = document.getElementById('form_started_at');
  if (startedAtInput) {
    startedAtInput.value = String(formStartedAt);
  }

  const tokenInput = document.getElementById('form_token');
  if (tokenInput) {
    tokenInput.value = buildClientToken(formStartedAt);
  }

  const emailInput = document.getElementById('inputEmailField');
  const nameInput = document.getElementById('name');
  const messageInput = document.getElementById('message');

  if (emailInput) {
    emailInput.addEventListener('input', function (event) {
      validateEmail(event.target.value);
    });
  }

  if (nameInput) {
    nameInput.addEventListener('input', updateSubmitState);
  }

  if (messageInput) {
    messageInput.addEventListener('input', updateSubmitState);
  }

  updateSubmitState();
}

function buildClientToken(timestamp) {
  const randomPart = Math.random().toString(36).slice(2, 10);
  return 'cf-' + timestamp + '-' + randomPart;
}

function validateEmail(value) {
  const iconEmail = document.getElementById('emailCheckIcon');
  const emailParagraph = document.getElementById('emailActionHint');
  const inputEmail = document.getElementById('inputEmailField');

  emailValidated = validateRegexString(value);

  if (emailValidated) {
    inputEmail.classList.remove('is-danger');
    inputEmail.classList.add('is-success');
    iconEmail.classList.remove('fa-exclamation-triangle');
    iconEmail.classList.add('fa-check');
    emailParagraph.style = 'display:none';
  } else {
    inputEmail.classList.remove('is-success');
    inputEmail.classList.add('is-danger');
    iconEmail.classList.remove('fa-check');
    iconEmail.classList.add('fa-exclamation-triangle');
    emailParagraph.style = 'display:block';
  }

  updateSubmitState();
}

function validateRegexString(email) {
  const regexString = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexString.test(String(email).toLowerCase());
}

function updateSubmitState() {
  const submitButton = document.getElementById('submitbutton');
  const nameInput = document.getElementById('name');
  const messageInput = document.getElementById('message');

  const hasName = (nameInput.value || '').trim().length >= 2;
  const hasMessage = (messageInput.value || '').trim().length >= 10;

  submitButton.disabled = !(emailValidated && hasName && hasMessage);
}

function showFormError(message) {
  const hint = document.getElementById('formErrorHint');
  hint.textContent = message;
  hint.style = 'display:block';
}

function clearFormError() {
  const hint = document.getElementById('formErrorHint');
  hint.textContent = '';
  hint.style = 'display:none';
}

function submitFunction(event) {
  clearFormError();

  const companyTrap = document.getElementById('company');
  const legacyTrap = document.querySelector('input[name="stupendous_jade_matte_jacket"]');

  if ((companyTrap && companyTrap.value.trim() !== '') || (legacyTrap && legacyTrap.checked)) {
    event.preventDefault();
    return false;
  }

  if (Date.now() - formStartedAt < MIN_SUBMIT_DELAY_MS) {
    event.preventDefault();
    showFormError('Please take a few seconds before submitting the form.');
    return false;
  }

  if (!emailValidated) {
    event.preventDefault();
    showFormError('Please enter a valid email address.');
    return false;
  }

  const heroSuccess = document.getElementById('success-contact');
  heroSuccess.style = 'display:block;';
  heroSuccess.scrollIntoView({ block: 'start', behavior: 'smooth' });
  return true;
}