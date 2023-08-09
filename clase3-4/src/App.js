import './App.css';
import Card from './componentes/Card/Card';
import Nav from './componentes/Navbar/Navbar';
import Category from './componentes/Category/Category';
import MiList from './componentes/MiList/MiList';
function App() {
  let nombres =["Mery","Luis","Ale"];
  let titulos = ["Category 1","Category 2","Category 3","Category 4","Category 5","Category 6"]
  let cards = [
    {titulo:"título de ficha 1",datos:"datos de ficha"},
    {titulo:"título de ficha 2",datos:"datos de ficha"},
    {titulo:"título de ficha 3",datos:"datos de ficha"},
    {titulo:"título de ficha 4",datos:"datos de ficha"}
  ]
  return (
    <div className="App">
     <Nav />
        <h1>My App in React</h1>
    <main>
        <section className="top-data">
          {cards.map((card,idx)=><Card key={card.titulo + idx} titulo={card.titulo} datos={card.datos}/>)}
            
        
 
        </section>
        <h2>Categories in database</h2>
        <section className="general-data">
            
            
            {titulos.map((titulo,idx)=>{
              return(<Category key={titulo + idx} titulo={titulo}/>)
            })}
            
            
        </section>
        <MiList nombres={nombres}/>
        <h2>Personajes de películas</h2>
        <section className="card-container">
            
        </section>
       
    </main>
    </div>
  );
}

export default App;
