const SetTextForElement = (element, text) => {
  const elementText = document.createTextNode(text);
  element.appendChild(elementText);
};

export { SetTextForElement };
