const cadNome = document.getElementById('cadNome');
const cadLoja = document.getElementById('cadLoja');
const cadcnpj = document.getElementById('cadcnpj');
const cadSenha = document.getElementById('cadSenha');

const botao = document.querySelector('button');
botao.addEventListener('click', cadastrar);

listaLojas = [];

class lojas {
    constructor(nome, loja, cnpj, senha){
        this.nome = nome;
        this.loja = loja;
        this.cnpj = cnpj;
        this.senha = senha;
    }
}


let validacao;
function validarDados(){
    validacao = false;
    let cnpj = false;
    let senha = false;

    // validar cnpj
    if(cadcnpj.value.length == 14){
        cnpj = true;
    } else{
        alert('CNPJ inválido!');
    }

    //validar senha
    if(cadSenha.value.length > 4){
        senha = true;
    } else{
        alert('Sua senha deve ter no mínimo 5 caracteres!');
    }

    validacao = (cnpj == true) && (senha == true) ? true : false;
}


function cadastrar(){
    validarDados();
    if(validacao == true){

        let novaLoja = new lojas(cadNome.value, cadLoja.value, cadcnpj.value, cadSenha.value);
        console.log(novaLoja);
    }
}