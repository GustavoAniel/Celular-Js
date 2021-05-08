var campSenha = document.getElementById('camp-senha')
var btnmenu = document.getElementById('menu')
var tela = document.getElementById('tela')
var mensagem = document.getElementById('mensagem')
var btnNum = document.querySelector('numero')
var password = 1234
var ligado = false
var tempo = document.querySelector('#barra-temp')
var date = new Date;
var minutos = date.getMinutes();var horas = date.getHours();
var time = `${horas}:${minutos} `
var s = date.getSeconds()


document.get
//Rológio do celular
var tempo = setInterval(() => {
    s++
    if(s == 60){
        s = 0
        minutos += 1
        if(minutos == 60){
            minutos = 0
            horas += 1
        }
        if(horas == 24){
            horas = 0
        }
        if(minutos < 10){
            time = `${horas}:0${minutos}`
        }else{
            time = `${horas}:${minutos}`
        }
        
        
        document.getElementById('barra-temp').innerText = `${time}`//Quando completar o ciclo de um minuto, será atualizado o relógio.
    }
}, 1000/*A cada um segundo, a função será disparada*/);

function senha(opc){
    /*Para colocar os números no campo da senha*/
    document.getElementById('camp-senha').value += `${opc}`
}

function btn(){
    /*******Tela de senha*************/
    if(ligado == false){
        mensagem.innerHTML = `<p>Mudar a senha</p>
                                <input type="text" placeholder="Digite sua nova senha" id="alter-password">
                                <input type="submit" value="Mudar a senha" onclick="mudarSenha()"">
                                <p>Senha inicial: 1234</p>
                                <p>&copy;Gustavo Aniel 2020</p>`
                                
        tela.style.background = `linear-gradient(to bottom,red,blue)`
        tela.innerHTML = `<div id="barra-notif">
                        <p id="barra-temp">00:00</p>
                    </div>
                    <div class="tela-senha">
                        <input type="password" id="camp-senha" maxlength="4"><br>
                        <a id="limpar-camp" onclick="document.getElementById('camp-senha').value = ''">Limpar campo</a>
                        <p>
                            <input class="numero" type="button" value="1" onclick="senha(1),verificarSenha()">
                            <input class="numero" type="button" value="2" onclick="senha(2),verificarSenha()">
                            <input class="numero" type="button" value="3" onclick="senha(3),verificarSenha()">
                        </p>
                        <p>
                            <input class="numero" type="button" value="4" onclick="senha(4),verificarSenha()">
                            <input class="numero" type="button" value="5" onclick="senha(5),verificarSenha()">
                            <input class="numero" type="button" value="6" onclick="senha(6),verificarSenha()">
                        </p>
                        <p>
                            <input class="numero" type="button" value="7" onclick="senha(7),verificarSenha()">
                            <input class="numero" type="button" value="8" onclick="senha(8),verificarSenha()">
                            <input class="numero" type="button" value="9" onclick="senha(9),verificarSenha()">
                        </p>
                        <p>
                            <input class="numero" type="button" value="0" onclick="senha(0),verificarSenha()">
                        </p>
                        
                    </div>`
                    
                    ligado = true
                    document.getElementById('barra-temp').innerText = `${time}`
    }else{
        tela.innerHTML = ``
        tela.style.background = `black`
        ligado = false
    }
    /*******Fim da tela de senha*****/
}

function mudarSenha(){
    if(!(document.getElementById('alter-password').value == "")){
        password = document.getElementById('alter-password').value
        alert('Senha alterada com sucesso!!')    
    }else{
        alert('Não pode estar vazio')
    } 
}

function verificarSenha(){
    if(document.getElementById('camp-senha').value == password){
        telaInicial() //Está no arquivo script-app
    }
}

