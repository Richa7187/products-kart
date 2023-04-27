import LogoImg from './logo.jpg';
import './logo.css';
const Logo = () => {
    const dateToday = new Date();
    const dayNow = dateToday.toLocaleDateString('en-US', {weekday:"short"})
    const dateNow = dateToday.getDate();
    const monthNow = dateToday.toLocaleDateString('en-US', {month:"short"})

    return(
        <>
        <div className="LogoSection border">
            <div className="LogoImage"><img src={LogoImg} alt=""/></div>
            <div>
            <div className='productName'>ProductsKart</div>
            <div className="DateNow greyText">{dayNow} {dateNow} {monthNow}</div>
            </div>
        </div>
        </>
    )
}

export default Logo;