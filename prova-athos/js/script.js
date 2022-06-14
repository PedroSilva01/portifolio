document.querySelectorAll('a').forEach(link => {
    link.onclick = function(e) { 
        e.preventDefault()//evitar de fazer o seu comportamento normal que seria navegar para outra pagina
        const conteudo = document.getElementById('conteudo')
        fetch(link.href)
            .then(resp => resp.text())
            .then(html => conteudo.innerHTML = html)
    }
});