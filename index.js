connect = document.getElementById("connect");
alert = document.getElementById("alert");
done = document.getElementById("done");
randomize = document.getElementById('randomize')
login = document.getElementById("login");
table = document.getElementById("table");


document.getElementById("nav-scroll").style.display = "none";
randomize.addEventListener("click", e => {
    themes = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    document.body.dataset.theme = randomTheme;
    console.log(randomTheme)
})
connect.addEventListener("click", e => {
    alert.style.display = 'block'
})
login.addEventListener("click", e => {
    window.location.pathname = window.location.pathname.replace('index','form')
})
table.addEventListener("click", e => {
    window.location.pathname = window.location.pathname.replace('index','table')
})

done.addEventListener("click", e => {
    alert.style.display = 'none'
})
var prevScrollpos = window.pageYOffset;
window.onscroll = function(e) {

    var currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos)
    if (currentScrollPos = 0) {
        document.getElementById("nav-scroll").style.display = "none";
    } else {
        document.getElementById("nav-scroll").style.display = "";
    }
    prevScrollpos = currentScrollPos;
}