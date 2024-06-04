import './Header.scss'

const Header = () => {
    return (
        <div>
            <div className="header-details">
                <p className="header-details-p">
                    <img src="src\assets\ShieldCheck-icon.png" alt="ShieldCheck icon" />
                    Compra <span>100% segura</span>
                </p>
                <p className="header-details-p">
                    <img src="src\assets\Truck-icon.png" alt="Truck icon" />
                    <span>Frete grátis</span> acima de R$200
                </p>
                <p className="header-details-p">
                    <img src="src\assets\CreditCard-icon.png" alt="CreditCard icon" />
                    <span>Parcele</span> suas compras
                </p>
            </div>

            <div className="header-actions">
                <img src="src/assets/VTEX-logo.png" alt="VTEX Logo" />

                <div className="input-area">
                    <p className='input-text'>O que você está buscando?</p>
                    <img src="src\assets\MagnifyingGlass.png" alt="MagnifyingGlass icon" />
                </div>

                <div className="header-icons">
                    <img src="src\assets\Vector-icon.png" alt="Vector icon" />
                    <img src="src\assets\Heart-icon.png" alt="Heart icon" />
                    <img src="src\assets\UserCircle-icon.png" alt="UserCircle icon" />
                    <img src="src\assets\ShoppingCart-icon.png" alt="ShoppingCart icon" />
                </div>
            </div>

            <div className="categorias">
                <h1 className="categorias-texto">TODAS AS CATEGORIAS</h1>
                <h1 className="categorias-texto">SUPERMERCADO</h1>
                <h1 className="categorias-texto">LIVROS</h1>
                <h1 className="categorias-texto">MODA</h1>
                <h1 className="categorias-texto">LANÇAMENTOS</h1>
                <h1 className="categorias-texto">OFERTAS DO DIA</h1>
                <h1 className="categorias-texto">
                    <img src="src\assets\CrownSimple-icon.png" alt="CrownSimple icon" />
                    ASSINATURA
                </h1>
            </div>
        </div>
    )
}

export default Header