
<body>
  <h1>Welcome to JavaScript!</h1>
  <button id="myButton">Click Me</button>
  <p id="message"></p>

  <script>
    // Select the button and paragraph elements
    const button = document.getElementById('myButton');
    const message = document.getElementById('message');

    // Add a click event listener to the button
    button.addEventListener('click', function() {
      message.textContent = 'Hello, you clicked the button!';
    });
  </script>
</body>