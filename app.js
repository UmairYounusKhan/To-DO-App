function addtodo() {
    var input = document.getElementById('todoInput');
    var inputValue = input.value.trim(); // Trim to remove leading/trailing spaces

    if (inputValue === "") {
        alert("Please enter a valid to-do item!");
        return; // Exit function if input is empty
    }

    var liElements = document.createElement("li");
    liElements.setAttribute("class", "li_items");
    var liText = document.createTextNode(inputValue);

    liElements.appendChild(liText);

    var ulElements = document.getElementById('list');
    ulElements.appendChild(liElements);

    // Edit Button
    var editbtnElements = document.createElement('button');
    editbtnElements.innerHTML = "Edit";
    editbtnElements.addEventListener('click', function () {
        var editText = document.createElement("input");
        editText.type = "text";
        editText.value = liText.nodeValue;

        liElements.replaceChild(editText, liText);

        editText.addEventListener('blur', function () {
            liText.nodeValue = editText.value;
            liElements.replaceChild(liText, editText);
            editbtnElements.style.display = "inline"; // Show edit button again
            donebtnElements.style.display = "none"; // Hide done button
        });
        editText.focus();

        editbtnElements.style.display = "none"; // Hide edit button when editing
        donebtnElements.style.display = "inline"; // Show done button
    });

    // Done Button
    var donebtnElements = document.createElement('button');
    donebtnElements.innerHTML = "Done";
    donebtnElements.style.display = "none"; // Initially hidden
    donebtnElements.addEventListener('click', function () {
        var editText = liElements.querySelector("input[type='text']");
        liText.nodeValue = editText.value;
        liElements.replaceChild(liText, editText);
        editbtnElements.style.display = "inline"; // Show edit button again
        donebtnElements.style.display = "none"; // Hide done button
    });

    // Delete Button
    var delbtnElements = document.createElement('button');
    delbtnElements.innerHTML = "Delete";
    delbtnElements.addEventListener('click', function () {
        ulElements.removeChild(liElements);
    });

    // Container for Edit, Done, and Delete buttons
    var btnContainer = document.createElement('div');
    btnContainer.appendChild(editbtnElements);
    btnContainer.appendChild(donebtnElements);
    btnContainer.appendChild(delbtnElements);
    liElements.appendChild(btnContainer);

    input.value = ""; // Clear input field after adding to the list
}

function deleteall() {
    var ulElements = document.getElementById('list');
    ulElements.innerHTML = "";
}
