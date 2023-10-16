const jsonInput = document.getElementById('json-input');
const jsonInputError = document.getElementById('json-input-error');

jsonInput.addEventListener('change', (event) => {
  const file = event.target.files[0];

  if (!isFileTypeValid(file)) {
    showError(jsonInputError);

    return;
  }

  console.log(file);

  console.log(`Name: ${file.name}`);
  console.log(`Type: ${file.type}`);
  console.log(`Size: ${returnFileSize(file.size)}`);

  const reader = new FileReader();
  reader.onload = (event) => {
    console.log(event.target.result);
  };
  reader.readAsText(file);
});
