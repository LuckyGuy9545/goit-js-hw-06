/* <input
      type="text"
      id="validation-input"
      data-length="6"
      placeholder="Please enter 6 symbols"
    />
*/


const inputValue = document.querySelector('#validation-input');

inputValue.addEventListener('blur', event => {
    if (event.currentTarget.value.length == inputValue.getAttribute('data-length')) {
        inputValue.classList.add('valid');
        inputValue.classList.remove('invalid');
    } else {
        inputValue.classList.add('invalid');
        inputValue.classList.remove('valid');
    }
});