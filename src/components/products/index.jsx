import React from "react";
import './style.css'

function Products () {
    var db = require('../../db/produtos.json');
    const nome = db[0]['nome'];
    const preco = db[0]['preco'];
    const img = db[0]['img'];
    const categoria = db[0]['categoria'];
    const parcelado = db[0]['parcelado'];

    return(
        <div className='produtos'>
            <div className='card'>
                <img className='image' src={img}/>
                <div className='infos'>
                <h1>{nome}</h1>
                <p>{categoria}</p>
                <h3>R$: {preco}</h3>
                <p>{parcelado}</p>
                </div>
                <button>Adicionar ao Carrinho</button>
            </div>

            <div className='card'>
                <img className='image' src={img}/>
                <div className='infos'>
                <h1>{nome}</h1>
                <p>{categoria}</p>
                <h3>R$: {preco}</h3>
                <p>{parcelado}</p>
                </div>
                <button>Adicionar ao Carrinho</button>
            </div>

            <div className='card'>
                <img className='image' src={img}/>
                <div className='infos'>
                <h1>{nome}</h1>
                <p>{categoria}</p>
                <h3>R$: {preco}</h3>
                <p>{parcelado}</p>
                </div>
                <button>Adicionar ao Carrinho</button>
            </div>

            
        </div>
    );
};

export default Products;
