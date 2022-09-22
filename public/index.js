// Static site JavaScript
window.addEventListener('load', () => {
    function sendData() {
      const XHR = new XMLHttpRequest();

      // Bind the FormData object and the form element
      const FD = new FormData(form);

      // Define what happens on successful data submission
      XHR.addEventListener('load', (event) => {
        window.location='thank-you.html';
      });

      // Define what happens in case of error
      XHR.addEventListener('error', (event) => {
        alert('Oops! Something went wrong. Please try again.');
      });

      // Set up our request
      XHR.open('POST', form.action);

      // The data sent is what the user provided in the form
      XHR.send(FD);
    }

    // Get the form element
    const form = document.getElementById('contact-form');

    // Add 'submit' event handler
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      sendData();
    });
  });
