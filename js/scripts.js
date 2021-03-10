function openProjects() {
    document.getElementById("clickme-center").style.display = "none";
    document.getElementById("titles").style.display = "block";
}

function openFA() {
    document.body.style.gridTemplateColumns = "25vw 50vw 25vw";
    document.getElementsByClassName("popup").style.left = "12.5vw";
    document.getElementsByClassName("popup").style.width = "25vw";
    document.getElementsByClassName("video").style.width = "250px";
}
