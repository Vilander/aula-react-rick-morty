import './Home.css'
import Card from '..components/Card';

function Home() {
  const item1 ={
    nome: 'Rick Sanchez',
    foto: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  }
  const item2 ={
    nome: 'Morty Smith',
    foto: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  }
  const item3 ={
    nome: 'Summer Smith',
    foto: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  }
  
  const personagens = [item1,item2,item3]
  

  return (
    <>
      <div className='lista'>
        {
          personagens.map(function(umPersonagem){
            return <Card info={umPersonagem}/>
          })
        }
      </div>
    </>
  )
}

export default Home
