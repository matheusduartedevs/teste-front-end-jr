import ProdutoCard from '../ProdutoCard/ProdutoCard'
import './Produtos.scss'

const Produtos = () => {
  return (
    <div className='produtos'>
      <h1 className='produtos-title'>Produtos relacionados</h1>
      <div className="produtos-content">
        <div className="navbar-produtos">
          <a href="#">CELULAR</a>
          <a href="#">ACESSÓRIOS</a>
          <a href="#">TABLES</a>
          <a href="#">TVS</a>
          <a href="#">VER TODOS</a>
        </div>
      </div>

      <div className="vitrine">
        <ProdutoCard />
        <ProdutoCard />
        <ProdutoCard />
        <ProdutoCard />
      </div>
    </div>
  )
}

export default Produtos