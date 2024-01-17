import './app.css'

const animes = [
  { id: 1, name: 'Narute' },
  { id: 2, name: 'Dragon Ball' }
]

export function App() {
  return (
    <>
      <div>
        <h1>Hello Bravacoders</h1>
        <h2>Start editing to see some magic happen!</h2>
        {/* {animes.length > 0 && (
          <ul>
            {animes.map((anime) => (
              <li key={anime.id}>{anime.name}</li>
            ))}
          </ul>
        )} */}

        {animes.length > 0 ? (
          <ul>
            {animes.map((anime) => (
              <li key={anime.id}>{anime.name}</li>
            ))}
          </ul>
        ): (
        <div>Nenhum resultado encontrado</div>
        )}
      </div>
    </>
  )
}
