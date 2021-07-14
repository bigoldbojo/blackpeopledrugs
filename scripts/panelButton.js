function expand() {
    document.getElementById("expandButton").style.display = "none";
    document.getElementById("collapseButton").style.display = "inline-block";
    document.getElementById("left-panel").style.display = "block";
}

function collapse() {
    document.getElementById("expandButton").style.display = "inline-block";
    document.getElementById("collapseButton").style.display = "none";
    document.getElementById("left-panel").style.display = "none";
}

function expandButtonMouseDown() {
    document.getElementById("expandButton").style.backgroundColor = "#ddd";
    document.getElementById("expandButton").style.color = "black";
}

function expandButtonMouseOver() {
    document.getElementById("expandButton").style.backgroundColor = "#aaa";
    document.getElementById("expandButton").style.color = "black";
}

function expandButtonMouseOut() {
    document.getElementById("expandButton").style.backgroundColor = "white";
    document.getElementById("expandButton").style.color = "black";
}

function collapseButtonMouseDown() {
    document.getElementById("collapseButton").style.backgroundColor = "#111";
    document.getElementById("collapseButton").style.color = "white";
}

function collapseButtonMouseOver() {
    document.getElementById("collapseButton").style.backgroundColor = "#555";
    document.getElementById("collapseButton").style.color = "white";
}

function collapseButtonMouseOut() {
    document.getElementById("collapseButton").style.backgroundColor = "#333";
    document.getElementById("collapseButton").style.color = "white";
}