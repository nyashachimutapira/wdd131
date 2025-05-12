const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapterList');

button.addEventListener('click', function() {
    // Check if the input is not blank
    if (input.value.trim() !== '') {
        const chapterTitle = input.value.trim();

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = chapterTitle;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', `Remove ${chapterTitle}`);

        // Add event listener to the delete button
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus(); // Return focus to the input field
        });

        // Append the delete button to the list item
        li.append(deleteButton);
        // Append the list item to the unordered list
        list.append(li);

        // Clear the input field and set focus
        input.value = '';
        input.focus();
    } else {
        // If input is blank, focus back on the input field
        input.focus();
    }
});