import { Container } from './styles'
import MovieIcon from '../../assets/movie-icon.svg'
import AwardIcon from '../../assets/award-icon.svg'

const Card = ({ movieData }) => {

  return (
    <Container>
      <div className='wrapper-image-logo'>
        <img src={MovieIcon} className='image-logo' alt='movie logo' />
      </div>

      <div className='container-items'>
        <div className='wrapper-items'>
          <h3>{movieData.name}</h3>
          <p>{movieData.runtimeInMinutes} min</p>
        </div>

        <div className='wrapper-awards'>
          <img src={AwardIcon} className='award-logo' alt='award logo' />
          <p>{movieData.academyAwardWins} Wins & {movieData.academyAwardNominations} Nominations</p>
        </div>

        <div className='wrapper-budget'>
          <div>
            <h4>Budget</h4>
            <p>${movieData.budgetInMillions}M</p>
          </div>

          <div>
            <h4>Revenue</h4>
            <p>${movieData.boxOfficeRevenueInMillions}M</p>
          </div>
        </div>
      </div>

    </Container>
  )
}

export default Card