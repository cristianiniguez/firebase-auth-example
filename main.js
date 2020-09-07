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
      signinForm.reset()
      $('#signin-modal').modal('hide')
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

// Posts
const postsList = document.querySelector('#posts')
const setupPosts = data => {
  if (data) {
    let html = ''
    data.forEach(doc => {
      const post = doc.data()
      const li = `
        <li class="list-group-item list-group-item-action">
          <h5>${post.title}</h5>
          <p>${post.description}</p>
        </li>
      `
      html += li
    })
    postsList.innerHTML = html
  } else {
    postsList.innerHTML = '<p class="text-center">Login to see Posts</p>'
  }
}

// Events
// list for auth state changes
auth.onAuthStateChanged(user => {
  if (user) {
    fs.collection('posts')
      .get()
      .then(snapshot => {
        setupPosts(snapshot.docs)
      })
  } else {
    setupPosts()
  }
})
