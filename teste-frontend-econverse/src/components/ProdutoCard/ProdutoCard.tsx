import './ProdutoCard.scss'

const ProdutoCard = () => {
    return (
        <div className="produto-card">
            <div className="produto-info">
                <img src="src/assets/Produto.png" className="produto-img" />
                <h1 className="produto-title">IPHONE 13</h1>
                <p className="produto-preco">R$69,90</p>
                <p className="produto-details">ou 2x de R$ 49,95 sem juros</p>
                <p className="produto-frete">Frete grátis</p>
                <button className="produto-button">Comprar</button>
            </div>
        </div>
    )
}

export default ProdutoCard