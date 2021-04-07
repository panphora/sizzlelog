// THIS FILE INITIALIZES REMAKE'S FRONT END CODE

Remake.init({
  logDataOnSave: true,
  sortable: {sortablejs: Sortable}
});

Remake.onSave(function (res) {
  if (!res.success) {
    crostini("Error saving data", {type: "error"});
  }
});

Remake.onFileUpload(function (res) {
  if (res.success) {
    crostini("File upload successful");
  } else {
    crostini("Error uploading file", {type: "error"});
  }
});

Remake.onAddItem(function (res) {
  if (!res.ajaxResponse.success) {
    crostini("Error adding new item", {type: "error"});
  }
});

const colorPicker = document.querySelector('#bg');
const body = document.querySelector('body');
const text = document.querySelector('#text');

colorPicker.addEventListener('change', function() {
    Remake.callSaveFunction(text);
    colorPicker.value = this.value
    body.style.backgroundColor = this.value
});


// Remake.callSaveFunction(document.body)
