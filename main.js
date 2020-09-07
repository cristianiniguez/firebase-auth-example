// Sign up
const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', e => {
  e.preventDefault()
  const email = document.querySelector('#signup-email').value
  const password = document.querySelector('#signup-password').value
  console.log(email, password)
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
      signupForm.reset()
      $('#signup-modal').modal('hide')
      console.log('sign up')
    })
})

// Sign in
const signinForm = document.querySelector('#login-form')

signinForm.addEventListener('submit', e => {
  e.preventDefault()
  const email = document.querySelector('#login-email').value
  const password = document.querySelector('#login-password').value
  console.log(email, password)
  auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      signupForm.reset()
      $('#signup-modal').modal('hide')
      console.log('sign in')
    })
})

// Logout
const logout = document.querySelector('#logout')

logout.addEventListener('click', e => {
  e.preventDefault()
  auth.signOut().then(() => {
    console.log('sign out')
  })
})