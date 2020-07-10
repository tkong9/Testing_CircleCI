// eslint-disable-next-line import/prefer-default-export
export const removeFromLocalStorage = (note) => {
  let notes;
  if (localStorage.getItem('notes') === null) {
    notes = [];
  } else {
    notes = JSON.parse(localStorage.getItem('notes'));
  }
  const noteTitle = note.children[0].innerText;
  const noteContent = note.children[1].innerText;
  notes = notes.filter(
    (e) => e.title !== noteTitle && e.content !== noteContent,
  );
  localStorage.setItem('notes', JSON.stringify(notes));
};
