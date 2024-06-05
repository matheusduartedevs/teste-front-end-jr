import Banner from "./components/Banner/Banner"
import Categorias from "./components/Categorias/Categorias"
import Header from "./components/Header/Header"
import Parceiros from "./components/Parceiros/Parceiros"
import Produtos from "./components/Produtos/Produtos"

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Categorias />
      <Produtos />
      <Parceiros />
    </>
  )
}

export default App