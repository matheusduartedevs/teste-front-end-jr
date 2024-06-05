import Tecnologia from '../../assets/Tecnologia-icon.png'
import Supermercado from '../../assets/Supermercado-icon.png'
import Bebidas from '../../assets/Bebidas-icon.png'
import Ferramentas from '../../assets/Ferramentas-icon.png'
import Saude from '../../assets/Saude-icon.png'
import Esportes from '../../assets/Esportes-icon.png'
import Moda from '../../assets/Moda-icon.png'
import CategoriaCard from '../CategoriaCard/CategoriaCard'
import './Categorias.scss'

const Categorias = () => {
    return (
        <div className='categorias'>
            <CategoriaCard img={ Tecnologia } titulo={ 'Tecnologia' } />
            <CategoriaCard img={ Supermercado } titulo={ 'Supermercado' } />
            <CategoriaCard img={ Bebidas } titulo={ 'Bebidas' } />
            <CategoriaCard img={ Ferramentas } titulo={ 'Ferramentas' } />
            <CategoriaCard img={ Saude } titulo={ 'Saude' } />
            <CategoriaCard img={ Esportes } titulo={ 'Esportes' } />
            <CategoriaCard img={ Moda } titulo={ 'Moda' } />
        </div>
    )
}

export default Categorias