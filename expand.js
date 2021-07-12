function expand(){
    document.getElementById("expandButton").style.display = "none";
    document.getElementById("collapseButton").style.display = "inline-block";
    document.getElementById("left-panel").style.display = "block";
}

function collapse(){
    document.getElementById("expandButton").style.display = "inline-block";
    document.getElementById("collapseButton").style.display = "none";
    document.getElementById("left-panel").style.display = "none";
}