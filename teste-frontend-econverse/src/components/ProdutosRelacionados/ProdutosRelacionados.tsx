import Card from '../Card/Card'
import './ProdutosRelacionados.scss'

const ProdutosRelacionados = () => {
    return (
        <div className="container">
            <div className="section-details">
                <h1 className="section-title">Produtos Relacionados</h1>
                <p className="section-action">Ver todos</p>
            </div>

            <div className="produtos">
                <Card title={'Produtos'} texto={'Lorem ipsum dolor sit amet, consectetur'} />
                <Card title={'Produtos'} texto={'Lorem ipsum dolor sit amet, consectetur'} />
            </div>
        </div>
    )
}

export default ProdutosRelacionados