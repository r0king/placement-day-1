go_home = document.getElementById('home')
console.log(go_home)
go_home.addEventListener("click", e => {
	console.log('hi')
	let path = window.location.pathname 
	if(path.search('table')){
    window.location.pathname = window.location.pathname.replace('table','index')}

	if(path.search('form')){
    window.location.pathname = window.location.pathname.replace('form','index')}
})

dark = document.getElementById('darkmode')
dark.addEventListener('change', e => {
    if (e.target.checked) { document.body.dataset.theme = 'dark' } else {
        document.body.dataset.theme = 'light'
    }
})