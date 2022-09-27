// Crie um algortimo que recebe informações de 15 produtos. Cada produto possui nome, marca, uma foto (link de uma imagem da internet), preço unitário e a quantidade de produtos em estoque. Ao receber essas informações dos produtos, imprima no HTML essas informações de cada produto e o produto entre o preço e a quantidade de produtos em estoque (preço total).

let estoque = []
let produto = {
    nome : '',
    marca : '',
    foto : '',
    preco : 0,
    quantidade : 0, }

    for (let i =1; i <= 15; i++) {
        produto.nome = prompt('Digite o nome do produto: ');
        produto.marca = prompt('Digite a Marca do produto')
        produto.foto = prompt('Insira o link da Imagem')
        produto.quantidade = prompt(' Insira a quantidade no estoque')
        estoque.push(produto)
    }

    for ( let a =1; a <=15; a++) {
        let nome = estoque[0].nome
        let marca = estoque[0].marca
        let foto  = estoque[0].foto
        let preco = estoque[0].preco
        let quantidade = estoque[0].quantidade
        document.write(`<p> NOME: ${nome}</p>`);
        document.write(`<p> MARCA: ${marca}</p>`);
        document.write(`<p>FOTO: <img src="${foto}" alt="produto"></p>`);
        document.write(`<p>PREÇO: ${preco}</p>`);
        document.write(`<p>QUANTIDADE: ${quantidade}</p>`);
       
    }

