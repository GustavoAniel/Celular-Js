
function telaInicial(){
    tela.style.background = `linear-gradient(to bottom,green,yellow)`
    tela.innerHTML = `<div id="barra-notif">
                        <p id="barra-temp">00:00</p>
                    </div>
                    <div class="aplicativos" onclick="calculadora()">
                        <img src="./ICONS/calc.jpg" class="icon"></img>
                    </div>
                    <div class="aplicativos" onclick="configuracao()">
                        <img src="./ICONS/config.jpg" class="icon"></img>
                    </div>`
    document.getElementById('barra-temp').innerText = `${time}`
}

//Configuração
function configuracao(){
    tela.style.background = `white`
    tela.innerHTML = `<p onclick="telaInicial()" class="opc-apps">Voltar</p>
                        `
}