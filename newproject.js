/* ================================
   Element Selection
   ================================ */

// Get the "Add" button element from the HTML by its ID
let addBtn = document.getElementById('addBtn');

// Get the input field where the user types their topic
let topicInput = document.getElementById('topicInput');

// Get the unordered list element where we’ll display topics
let topiclist = document.getElementById('topiclist');


/* ================================
   Event Listener
   ================================ */

// Listen for a "click" event on the Add button
addBtn.addEventListener('click', function() {

    // Get the text (value) typed inside the input box
    let topic = topicInput.value;

    // Log the topic to the browser console (for testing)
    console.log(topic);

});
