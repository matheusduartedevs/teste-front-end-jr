import './Banner.scss'

const Banner = () => {
    return (
        <div className="banner">
            <img src="src/assets/Banner-img.png" alt="Banner Image" className="banner-image" />
            <div className="banner-overlay">
                <div className="banner-content">
                    <h1>Venha conhecer nossas <br /> promoções</h1>
                    <p>50% Off nos produtos</p>
                    <button>Ver produtos</button>
                </div>
            </div>
        </div>
    )
}

export default Banner