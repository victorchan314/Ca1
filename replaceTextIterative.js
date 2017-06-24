function replaceText() {
    var elements = document.getElementsByTagName("*");
    for (var i = 0; i<elements.length; i++) {
        elements[i].innerText = elements[i].innerText.replace(/uc berkeley|ucberkeley|berkeley| cal /gi, "The Number One Public University in the World");
    }
}
window.onload = replaceText();
