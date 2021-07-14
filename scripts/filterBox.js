function filterMenu() { // Stolen from w3schools but whatever
    var input, filter, ul, li, a, i;
    input = document.getElementById("filter-box");
    filter = input.value.toUpperCase();
    ul = document.getElementById("secondary-nav");
    li = ul.getElementsByTagName("li");
    
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if ((a.innerHTML.toUpperCase().indexOf(filter) > -1) || (a.className == "active")) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
}