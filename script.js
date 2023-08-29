class Carro {

    constructor() {
        
        this.arrayCarros = [];
    }

    adicionar() {
        let carro = this.lerDados();

        if(this.validaCampos(carro)) {
            this.salvo(carro);
        }

        this.listaTabela();
        this.cancelar();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText ='';

        for(let i = 0; i < this.arrayCarros.length; i++ ) {
            let tr = tbody.insertRow();

            
            let td_carro = tr.insertCell();
            let td_modelo = tr.insertCell();
            let td_ano = tr.insertCell();
            let td_remover= tr.insertCell();

            
            td_carro.innerText = this.arrayCarros[i].nomeCarro;
            td_modelo.innerText = this.arrayCarros[i].modelo;
            td_ano.innerText = this.arrayCarros[i].ano;

        
            let botao = document.createElement("button");
            botao.innerText ="Remover";

            botao.setAttribute("onclick", "carro.remover('"+ this.arrayCarros[i].nomeCarro + "')");


            td_remover.appendChild(botao);
        }

    }

    salvo(carro) {
        this.arrayCarros.push(carro);
        this.id++;
    }

    lerDados() {
        let carro = {}
        
        
        carro.nomeCarro = document.getElementById('carro').value;
        carro.modelo = document.getElementById('modelo').value;
        carro.ano = document.getElementById('ano').value;

        return carro;

    }

    validaCampos(carro) {
        let msg ='';

        if(carro.nomeCarro == '') {
            msg += '- Informe o nome do Carro \n';
        }

        if(carro.modelo == '') {
            msg += '- Informe o modelo do Carro \n';
        }

        if(carro.ano == '') {
            msg += '- Informe o ano do Carro \n';
        }

        if(msg != '') {
            alert(msg);
            return false
        }
        return true;
    }

    cancelar() {
        document.getElementById('carro').value ='';
        document.getElementById('modelo').value ='';
        document.getElementById('ano').value ='';
    }

    remover(nomeCarro) {

        let tbody = document.getElementById('tbody');

        for(let i = this.arrayCarros.length - 1; i >= 0; i--) {
            if(this.arrayCarros[i].nomeCarro === nomeCarro) {
                this.arrayCarros.splice(i, 1);
                tbody.deleteRow(i);
            }
        }

    }
}

var carro = new Carro();