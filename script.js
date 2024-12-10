// Select the button and paragraph element
const button = document.getElementById('myButton');
const message = document.getElementById('message');

// Add click event listener to the button
button.addEventListener('click', function () {
  message.textContent = 'Button clicked! JavaScript is working perfectly.';
  message.style.color = 'green'; // Change the color of the message
});