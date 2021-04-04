const addBtn = document.querySelector('#add');
const textArea = document.querySelector('.text-area textarea');
const notes = document.querySelector('.notes');
const colorInput =document.querySelector('#color');
const sizeInput = document.querySelector('#size');

// Adding Notes by clocking the Add button.
addBtn.addEventListener('click', (e) => {
    // if the user tries to add a empty note trigger an alert
    if(textArea.value === ''){
        alert('Please Enter a note.');
        box.remove(); // remove the select element(box) from the document
        // how are we accessing an element that doesn't exist yet?
        // well if we comment that line out - while we do warn the user that he cant add 
        // empty note - the empty note is still created
        // SO we remove it and it never appears in the note list
    }

    // we create a div element called box
    const box = document.createElement('div');
    
    // add stlying to all the box elements
    box.className = 'box';
    
    // create a paragraph element called text
    const text = document.createElement('p');
    
    // create a button element called closeBtn
    const closeBtn = document.createElement('button');
    
    // appending the box element to the notes element (so our list of notes)
    notes.appendChild(box);
    
    // add the text to our box element
    box.appendChild(text);
    
    // add the close button to our box element
    box.appendChild(closeBtn);
    
    // so far the closeBtn is just a button - we add the 'X' so the user knows it can be deleted
    closeBtn.innerHTML = 'X';
    
    // Now we add an event listener to the 'X' 
    // When the user clicks it, we remove the box element
    closeBtn.addEventListener('click', () => {
        box.remove();
    })
    
    // our paragraph element is currently empty so we grab the value of text area & populate it
    text.innerHTML = textArea.value;
    
    // We apply the color the user chooses to our text
    text.style.color = colorInput.value;
  
    // we apply the font size the user chose to our text
    text.style.fontSize = sizeInput.value + 'px';
    
    // if there's nothing in the textarea and the paragraph element - the textarea.value is an empty string
    if(textArea.value === text.innerHTML){
        textArea.value = '';
    }
});

// Changing the color of the text.
colorInput.addEventListener('change',()=>{
    textArea.style.color = colorInput.value;
});
// Changing the font size of the text.
sizeInput.addEventListener('change',()=>{
    textArea.style.fontSize = sizeInput.value + 'px';
});
