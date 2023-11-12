// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        document.getElementById("header").style.padding = "1px 0";
        document.getElementById("logo").style.display = "none";
        // document.getElementsByClassName("carousel").style.marginTop = "100px";

    } else {
        document.getElementById("header").style.padding = "5px 0";
        document.getElementById("logo").style.fontSize = "30px";
        document.getElementById("logo").style.display = "block";
        // document.getElementsByClassName("carousel").style.marginTop = "110px";
    }
}