import './Card.scss'

interface CategoriaProps {
    title: string
    texto: string
}

const Card: React.FC<CategoriaProps> = ({ title, texto }) => {
    return (
        <div className="container">
            <img src="src/assets/Parceiros-image.png" className="parceiro-image" />
            <div className="parceiro-details">
                <h1 className="parceiro-title">{title}</h1>
                <p className="parceiro-text">{texto}</p>
                <button className="parceiro-button">CONFIRA</button>
            </div>
        </div>
    )
}

export default Card