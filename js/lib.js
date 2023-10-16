function isFileTypeValid(file) {
  return 'application/json'.includes(file.type);
}

function returnFileSize(number) {
  if (number >= 1024 && number < 1048576) {
    return `${(number / 1024).toFixed(1)} KB`;
  }

  if (number >= 1048576) {
    return `${(number / 1048576).toFixed(1)} MB`;
  }

  return `${number} bytes`;
}

function showError(element) {
  element.style.display = 'inline';

  setTimeout(() => {
    element.style.display = 'none';
  }, 3 * 1000); // 3 seconds
}
