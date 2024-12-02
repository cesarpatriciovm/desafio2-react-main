import './CardPizza.css'
import { formatCurr } from '../utils/formatCurr'

function CardPizza (props) {
  return (
    <div className="cardpizza__infopizza">
      <header className="infopizza__header">
        <figure className='header__container-img'>
          <img className="header__img" src={props.img} alt="" />
        </figure>
        <h3 className="header__title">{props.name}</h3>
      </header>
      <main className="infopizza__main">
        <h4 className="main__title">Ingredientes:</h4>
        <p className="main__ing">🍕{props.ingredients.join(', ')}</p>
      </main>   
      <footer className="infopizza__footer">
        <h4 className="footer__title">Precio: ${formatCurr(props.price)}</h4>
        <div className="footer__btns">
          <button>Ver más 👀</button>
          <button>Añadir 🛒</button>
        </div>
      </footer>
    </div>
  )
}

export default CardPizza