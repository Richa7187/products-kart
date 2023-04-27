import './logo.css'
import burger from './burger.jpg'
const Menu = () => {
return(
    <div className="MenuWrapper border">
        <div><img src={burger} alt=''/></div>
        <div className='menuSelected'>
            <div className='greyText'>Menu</div>
            <div className='FoodSelected'>Burger</div>
        </div>
        <div className='filter'>Filter</div>
    </div>
)
}

export default Menu