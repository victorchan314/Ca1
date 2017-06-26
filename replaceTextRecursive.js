function replaceText(element) {
    var elements = element.childNodes;
    for (var i=0; i<elements.length; i++) {
        if (elements[i].nodeType == 3) {
            elements[i].textContent = convert(elements[i].textContent);
        } else {
            replaceText(elements[i]);
        }
    }
}

window.onload = replaceText(document.body);
