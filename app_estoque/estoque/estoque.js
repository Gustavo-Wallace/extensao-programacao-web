let produtos = Array();

function criar_produto(id, nome, quant){
    let p = {
        id: id,
        nome: nome,
        quant: quant
    };
    return p;
}

function adicionar_produto(p){
    produtos.push(p);
}

function listar_produtos(){
    return produtos;
}

function editar_produto(){
    let pEditado;
    produtos.forEach(p => {
        if(p.id == id){
            p.quant = quantAtual;
        }
        pEditado = p;
    });
    return pEditado;
}

function remover_produto(id){
    produtos = produtos.filter((p) => {
        return p.id != id
    })
    return {};
}



module.exports = {
    criar_produto,
    adicionar_produto,
    listar_produtos,
    editar_produto,
    remover_produto
}