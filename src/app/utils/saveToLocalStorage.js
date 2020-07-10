// eslint-disable-next-line import/prefer-default-export
export const saveToLocalStorage = (note) => {
  let notes;
  if (localStorage.getItem("notes") === null) {
    notes = [];
  } else {
    notes = JSON.parse(localStorage.getItem("notes"));
  }
  notes.push(note);
  localStorage.setItem("notes", JSON.stringify(notes));
};
