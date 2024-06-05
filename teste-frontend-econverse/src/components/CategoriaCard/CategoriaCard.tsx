import './CategoriaCard.scss'

interface CategoriaProps {
    img: string
    titulo: string
}

const CategoriaCard: React.FC<CategoriaProps> = ({ img, titulo }) => {
    return (
        <div className="container">
            <div className='card'>
                <div className="card-area">
                    <img src={img} />
                </div>
                <h1 className='card-title'>{titulo}</h1>
            </div>
        </div>
    )
}

export default CategoriaCard