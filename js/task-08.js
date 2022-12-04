/*<form class="login-form">
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Login</button>
    </form> */

const loginForm = document.querySelector('.login-form')
console.log(loginForm);

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert("Please fill in all the fields");
  }
  
  const fullForm = {
    email: email.value,
    password: password.value
 }
  console.log('Le Finale:', fullForm)
  event.currentTarget.reset();

}