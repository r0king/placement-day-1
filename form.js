randomize = document.getElementById('randomize')
randomize.addEventListener("click", e => {
    themes = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    document.body.dataset.theme = randomTheme;
    console.log(randomTheme)
})