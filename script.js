function ativaletra(elemento) {
    const arrtexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrtexto.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 75 * i);
    });
}
// 1. DEFINE a variável 'titulo' primeiro
const titulo = document.querySelector('.digitando');

// 2. CHAMA a função 'ativaletra' depois que 'titulo' existe
ativaletra(titulo);

function animarAoRolar() {
    // Seleciona todos os elementos que devem ser animados (Imagem e Texto)
    const elementosAnimados = document.querySelectorAll('.animado'); 
    
    // Altura da janela (viewport)
    const windowHeight = window.innerHeight; 

    elementosAnimados.forEach(elemento => {
        // Pega a posição do topo do elemento
        const elementTop = elemento.getBoundingClientRect().top;
        
        // Ponto de ativação: Ativa quando o elemento atinge 80% da altura da janela
        const revealPoint = windowHeight * 0.8; 

        if (elementTop < revealPoint) {
            elemento.classList.add('visivel');
        } 
        // Você pode adicionar um 'else' para sumir se rolar para cima, mas geralmente não é necessário.
    });
}

// Escutadores de evento
window.addEventListener('scroll', animarAoRolar);
window.addEventListener('load', animarAoRolar);

// Chame a função para que os elementos apareçam se a página já estiver carregada na posição
animarAoRolar();




document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Define o caminho exato do seu arquivo PDF
    // O nome do arquivo na sua imagem HTML é 'curriculojoão.pdf'
    // ATENÇÃO: É melhor usar 'curriculojao.pdf' sem 'ã' para evitar problemas de codificação
    const CAMINHO_CURRICULO = 'curriculojoão.pdf'; 
    
    // 2. Pega o elemento do botão pelo ID
    // Você precisa adicionar id="btnDownloadCurriculo" no seu HTML!
    const botaoDownload = document.getElementById('btnDownloadCurriculo');
    
    // 3. Verifica se o botão existe antes de adicionar o evento
    if (botaoDownload) {
        
        // 4. Adiciona o ouvinte de clique
        // INÍCIO DO BLOCO ONDE O CÓDIGO DA IMAGEM É INSERIDO
        botaoDownload.addEventListener('click', function(event) {
            
            event.preventDefault(); 
            
            // NOVO PASSO: Pede a confirmação (CÓDIGO DA IMAGEM)
            const confirmaDownload = confirm('Você confirma que deseja baixar o meu currículo em PDF?');
            
            // Verifica a resposta
            if (confirmaDownload) {
                
                // --- Insira a lógica de download (CÓDIGO DA IMAGEM) ---
                const linkTemporario = document.createElement('a');
                linkTemporario.href = CAMINHO_CURRICULO;
                linkTemporario.download = 'curriculojoão.pdf'; // Nome do arquivo ao ser baixado

                document.body.appendChild(linkTemporario);
                linkTemporario.click();
                document.body.removeChild(linkTemporario);
            }
        });
        // FIM DO BLOCO
    }
});
