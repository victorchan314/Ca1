var elements = document.getElementsByTagName("*");
for (var i = 0; i<elements.length; i++) {
    elements[i].textContent = elements[i].textContent.replace(/berkeley|uc berkeley| cal /g, "The Number One Public University in the World");
}
