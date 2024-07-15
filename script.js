document.addEventListener('DOMContentLoaded', () => {
    const noteInput = document.getElementById('noteInput');
    const addNoteButton = document.getElementById('addNoteButton');
    const notesContainer = document.getElementById('notesContainer');
     

    // load from lS
    const loadNotes = () => {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notesContainer.innerHTML = '';
        notes.forEach(note => {
            addNotesToDOM(note);
        });    
    };
    console.log(loadNotes);

    //Add to ls
    const saveNote = (note) => {
         const notes = JSON.parse(localStorage.getItem("notes")) || [];
         notes.push(note);

         localStorage.setItem('notes', JSON.stringify(notes));
    };
    console.log(saveNote);
    //Add to DOM

     const addNotesToDOM = (note) => {
         const noteElement = document.createElement('div');
         noteElement.classList.add('note');
         noteElement.innerHTML = `<p>${note}</p>`;
         notesContainer.appendChild(noteElement);
     };
      console.log(addNotesToDOM);
     //Add with btn click
     addNoteButton.addEventListener('click', () => {
        const note = noteInput.value.trim();
        if(note){
            saveNote(note);
            addNoteToDOM(note);
            noteInput.value = '';
        }
     });
     loadNotes();
     console.log(loadNotes);
});