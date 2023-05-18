 import { Link } from 'react-router-dom'
import logo from '../../../../public/logo.png'
import BottomNav from '../BottomNav/BottomNav';

const Footer = () => {
    return (
        <div>
            <BottomNav></BottomNav>
        <footer className="footer p-10 bg-base-200 text-base-content">
  <div>
     <img src={logo} alt="Wheels ville the no. 1 choice for model cars!" />
    <p>Wheels ville inc.<br/>Wheels ville the no. 1 choice for model cars!</p>
  </div> 
  <div>
    <span className="footer-title">Directlinks</span> 

    <Link className='hover:text-orange-600'>DEALS</Link>
    <Link className='hover:text-orange-600'>Categories</Link>
    <Link className='hover:text-orange-600'>Brands</Link>
    <Link className='hover:text-orange-600'>Noveltie</Link>
    <Link className='hover:text-orange-600'>Top Selle</Link>
  </div> 

  <div>
    <span className="footer-title">Customer service</span> 
    <Link className='hover:text-orange-600'>Customer information</Link>
    <Link className='hover:text-orange-600'>Cancellation right</Link>
    <Link className='hover:text-orange-600'>Certificate Database</Link>
    <Link className='hover:text-orange-600'>Press ki</Link>
  </div> 
  <div>
    <span className="footer-title">Shopping</span> 
    <Link className='hover:text-orange-600'>Terms and conditions</Link>
    <Link className='hover:text-orange-600'>Data privacy statement</Link>
    <Link className='hover:text-orange-600'>Terms of deliver</Link>
    <Link className='hover:text-orange-600'>Payment method</Link>
    <Link className='hover:text-orange-600'>Battery Directiv</Link>
  </div>
</footer>
</div>
    );
};

export default Footer;