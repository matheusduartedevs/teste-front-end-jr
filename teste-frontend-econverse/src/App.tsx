import Banner from "./components/Banner/Banner"
import Categorias from "./components/Categorias/Categorias"
import Header from "./components/Header/Header"
import NavegueMarcas from "./components/NavegueMarcas/NavegueMarcas"
import Parceiros from "./components/Parceiros/Parceiros"
import Produtos from "./components/Produtos/Produtos"
import ProdutosRelacionados from "./components/ProdutosRelacionados/ProdutosRelacionados"

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Categorias />
      <Produtos />
      <Parceiros />
      <ProdutosRelacionados />
      <NavegueMarcas />
    </>
  )
}

export default App