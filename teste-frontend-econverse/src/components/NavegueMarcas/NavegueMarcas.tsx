import MarcaCard from '../MarcaCard/MarcaCard'
import './NavegueMarcas.scss'

const NavegueMarcas = () => {
  return (
    <div className="container-marcas">
      <h1 className="marcas-title">Navegue por marcas</h1>

      <div className="marcas">
        <MarcaCard />
        <MarcaCard />
        <MarcaCard />
        <MarcaCard />
        <MarcaCard />
      </div>
    </div>
  )
}

export default NavegueMarcas