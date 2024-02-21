export function focusOnField(nextFieldId) { // eslint-disable-line no-unused-vars
    document.getElementById(nextFieldId).focus();
}

export function changeBackgroundColor(newColor, elementsId) {
    document.getElementById(elementsId).style.backgroundColor = newColor;
}