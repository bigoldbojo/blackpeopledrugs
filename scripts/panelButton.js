function expand() {
    document.getElementById("expandButton").style.display = "none";
    document.getElementById("collapseButton").style.display = "inline-block";
    document.getElementById("left-panel").style.display = "block";
    document.getElementById("filter-box").style.display = "block";
}

function collapse() {
    document.getElementById("expandButton").style.display = "inline-block";
    document.getElementById("collapseButton").style.display = "none";
    document.getElementById("left-panel").style.display = "none";
    document.getElementById("filter-box").style.display = "none";
}

function expandButtonMouseDown() {
    document.getElementById("expandButton").style.backgroundColor = "#111";
    //document.getElementById("expandButton").style.backgroundImage = "linear-gradient(to right, #222 , #111);"
    document.getElementById("expandButton").style.color = "white";
}

function expandButtonMouseOver() {
    document.getElementById("expandButton").style.backgroundColor = "#555";
    //document.getElementById("expandButton").style.backgroundImage = "linear-gradient(to right, #666 , #333);"
    document.getElementById("expandButton").style.color = "white";
}

function expandButtonMouseOut() {
    document.getElementById("expandButton").style.backgroundColor = "#333";
    //document.getElementById("expandButton").style.backgroundImage = "linear-gradient(to right, #444 , #222);"
    document.getElementById("expandButton").style.color = "white";
}

function collapseButtonMouseDown() {
    document.getElementById("collapseButton").style.backgroundColor = "#ddd";
    //document.getElementById("collapseButton").style.backgroundImage = "linear-gradient(to right, #fff , #bbb);"
    document.getElementById("collapseButton").style.color = "black";
}

function collapseButtonMouseOver() {
    document.getElementById("collapseButton").style.backgroundColor = "#aaa";
    //document.getElementById("collapseButton").style.backgroundImage = "linear-gradient(to right, #bbb , #888);"
    document.getElementById("collapseButton").style.color = "black";
}

function collapseButtonMouseOut() {
    document.getElementById("collapseButton").style.backgroundColor = "white";
    //document.getElementById("collapseButton").style.backgroundImage = "linear-gradient(to right, #ddd , #aaa);"
    document.getElementById("collapseButton").style.color = "black";
}