import './Header.css'

function  Header () {
  return (
    <div className="layout__header">
      <div className="header__main">
        <div className="main__title">
          <h1>¡Pizzería Mamma Mia!</h1>
        </div>
        <div className="main__subtitle">
          <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
        </div>
      </div>
    </div>
  )
}

export default Header