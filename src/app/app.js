/* eslint-disable import/prefer-default-export */
// import { saveToLocalStorage } from "./utils/saveToLocalStorage.js";
// import { removeFromLocalStorage } from "./utils/removeFromLocalStorage.js";

// // Selectors
// const titleInput = document.querySelector(".title-input");
// const contentInput = document.querySelector(".content-input");
// const addButton = document.querySelector(".add-button");
// const noteList = document.querySelector(".note-list");

// // Event Listeners
// /* eslint-disable no-use-before-define */
// document.addEventListener("DOMContentLoaded", getNotes);
// addButton.addEventListener("click", addNote);
// noteList.addEventListener("click", deleteNote);

// // Functions
// function addNote(e) {
//   e.preventDefault();
//   // Create Note Div
//   if (titleInput.value === "") {
//     /* eslint-disable no-alert */
//     alert("제목을 입력해 주세요.");
//     return;
//   }
//   if (contentInput.value === "") {
//     alert("내용을 입력해 주세요.");
//     return;
//   }
//   const noteDiv = document.createElement("div");
//   noteDiv.classList.add("note");
//   // Create title h1
//   const newNoteTitle = document.createElement("h1");
//   newNoteTitle.innerText = titleInput.value;
//   newNoteTitle.classList.add("note-title");
//   noteDiv.appendChild(newNoteTitle);
//   // Create content p
//   const newContent = document.createElement("p");
//   newContent.innerText = contentInput.value;
//   newContent.classList.add("note-content");
//   noteDiv.appendChild(newContent);
//   // Create Trash Button
//   const trashButton = document.createElement("button");
//   trashButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
//   trashButton.classList.add("trash-btn");
//   noteDiv.appendChild(trashButton);
//   // Append to list
//   noteList.appendChild(noteDiv);
//   // Save to local storage
//   saveToLocalStorage({
//     title: titleInput.value,
//     content: contentInput.value,
//   });
//   titleInput.value = "";
//   contentInput.value = "";
// }

// function deleteNote(e) {
//   const item = e.target;
//   if (item.classList[0] === "trash-btn") {
//     const note = item.parentElement;
//     note.classList.add("fall");
//     removeFromLocalStorage(note);
//     note.addEventListener("transitionend", () => {
//       note.remove();
//     });
//   }
// }

// function getNotes() {
//   let notes;
//   if (localStorage.getItem("notes") === null) {
//     notes = [];
//   } else {
//     notes = JSON.parse(localStorage.getItem("notes"));
//   }
//   notes.forEach((note) => {
//     // Create Note Div
//     const noteDiv = document.createElement("div");
//     noteDiv.classList.add("note");
//     // Create title h1
//     const newNoteTitle = document.createElement("h1");
//     newNoteTitle.innerText = note.title;
//     newNoteTitle.classList.add("note-title");
//     noteDiv.appendChild(newNoteTitle);
//     // Create content p
//     const newContent = document.createElement("p");
//     newContent.innerText = note.content;
//     newContent.classList.add("note-content");
//     noteDiv.appendChild(newContent);
//     // Create Trash Button
//     const trashButton = document.createElement("button");
//     trashButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
//     trashButton.classList.add("trash-btn");
//     noteDiv.appendChild(trashButton);
//     // Append to list
//     noteList.appendChild(noteDiv);
//   });
// }

import { saveToLocalStorage } from './utils/saveToLocalStorage';
import { removeFromLocalStorage } from './utils/removeFromLocalStorage';

export const run = () => {
  // Selectors
  const titleInput = document.querySelector('.title-input');
  const contentInput = document.querySelector('.content-input');
  const addButton = document.querySelector('.add-button');
  const noteList = document.querySelector('.note-list');

  // Event Listeners
  /* eslint-disable no-use-before-define */
  document.addEventListener('DOMContentLoaded', getNotes);
  addButton.addEventListener('click', addNote);
  noteList.addEventListener('click', deleteNote);

  // Functions
  function addNote(e) {
    e.preventDefault();
    // Create Note Div
    if (titleInput.value === '') {
      /* eslint-disable no-alert */
      alert('제목을 입력해 주세요.');
      return;
    }
    if (contentInput.value === '') {
      alert('내용을 입력해 주세요.');
      return;
    }
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');
    // Create title h1
    const newNoteTitle = document.createElement('h1');
    newNoteTitle.innerText = titleInput.value;
    newNoteTitle.classList.add('note-title');
    noteDiv.appendChild(newNoteTitle);
    // Create content p
    const newContent = document.createElement('p');
    newContent.innerText = contentInput.value;
    newContent.classList.add('note-content');
    noteDiv.appendChild(newContent);
    // Create Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    trashButton.classList.add('trash-btn');
    noteDiv.appendChild(trashButton);
    // Append to list
    noteList.appendChild(noteDiv);
    // Save to local storage
    saveToLocalStorage({
      title: titleInput.value,
      content: contentInput.value,
    });
    titleInput.value = '';
    contentInput.value = '';
  }

  function deleteNote(e) {
    const item = e.target;
    if (item.classList[0] === 'trash-btn') {
      const note = item.parentElement;
      note.classList.add('fall');
      removeFromLocalStorage(note);
      note.addEventListener('transitionend', () => {
        note.remove();
      });
    }
  }

  function getNotes() {
    let notes;
    if (localStorage.getItem('notes') === null) {
      notes = [];
    } else {
      notes = JSON.parse(localStorage.getItem('notes'));
    }
    notes.forEach((note) => {
      // Create Note Div
      const noteDiv = document.createElement('div');
      noteDiv.classList.add('note');
      // Create title h1
      const newNoteTitle = document.createElement('h1');
      newNoteTitle.innerText = note.title;
      newNoteTitle.classList.add('note-title');
      noteDiv.appendChild(newNoteTitle);
      // Create content p
      const newContent = document.createElement('p');
      newContent.innerText = note.content;
      newContent.classList.add('note-content');
      noteDiv.appendChild(newContent);
      // Create Trash Button
      const trashButton = document.createElement('button');
      trashButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
      trashButton.classList.add('trash-btn');
      noteDiv.appendChild(trashButton);
      // Append to list
      noteList.appendChild(noteDiv);
    });
  }
};
