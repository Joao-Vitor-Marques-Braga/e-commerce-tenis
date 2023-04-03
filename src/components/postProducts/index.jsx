import React from 'react';

var db = require('../../db/produtos.json');

const nome = db[0]['nome'];
const preco = db[0]['preco'];
const img = db[0]['img'];
const categoria = db[0]['categoria'];
const parcelado = db[0]['parcelado'];

function postProducts({post}) {
    return(
        <div className='produtos'>
            <div className='card'>
                <img className='image' src={post[img]}/>
                <div className='infos'>
                <h1>{post[nome]}</h1>
                <p>{post[categoria]}</p>
                <h3>R$: {post[preco]}</h3>
                <p>{post[parcelado]}</p>
                </div>
                <button>Adicionar ao Carrinho</button>
            </div>
        </div>
    );
};

export default postProducts;