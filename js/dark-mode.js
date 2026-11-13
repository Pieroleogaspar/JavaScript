export default function darkmode(){
    const toggle = document.getElementById('toggle')

    const modoArmazenado = localStorage.getItem("modo")
    if (modoArmazenado === 'dark') {
        // Se o modo escuro estiver armazenado, ativa o modo escuro
        document.body.classList.add('dark-mode')
        // Marca o interruptor como ativado
        toggle.checked = true
    }

    toggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode')

        const modoSelecionado = toggle.checked ? 'dark' : 'light'

        //localStorage.clear()
        localStorage.removeItem("modo")
        localStorage.setItem("modo",modoSelecionado)

        console.log("Modo alterado para: " + modoSelecionado)
    })
}