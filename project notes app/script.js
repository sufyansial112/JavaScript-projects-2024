const notesBtn = document.querySelector('.notes-btn');
const contentBox = document.querySelector('.content');
let inputP = document.querySelectorAll('.input-box');

function showNotes(){
    contentBox.innerHTML = localStorage.getItem('notes')
}
showNotes();


function updateStorage(){
    localStorage.setItem('notes', contentBox.innerHTML);
}

notesBtn.addEventListener('click', function(){
    let p = document.createElement('p');
    let img = document.createElement('img');
    p.setAttribute('contenteditable', 'true');
    img.className = 'delete';
    img.src = 'images/delete.png';
    p.className = 'input-box';
    contentBox.appendChild(p).appendChild(img);

});


contentBox.addEventListener('click', function(e){
    if (e.target.tagName === 'IMG'){
        e.target.parentElement.remove()
        updateStorage();
    } 
    else if (e.target.tagName === 'p'){
        notes = document.querySelectorAll('.input-box');
        notes.forEach(note => {
            note.onkeyup = function(){
                updateStorage();
            }
        });
    }
})