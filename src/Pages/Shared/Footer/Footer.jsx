 import logo from '../../../../public/logo.png'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
  <div>
     <img src={logo} alt="Wheels ville the no. 1 choice for model cars!" />
    <p>Wheels ville inc.<br/>Wheels ville the no. 1 choice for model cars!</p>
  </div> 
  <div>
    <span className="footer-title">Directlinks</span> 

    <a className="link link-hover">DEALS</a> 
    <a className="link link-hover">Categories</a> 
    <a className="link link-hover">Brands</a> 
    <a className="link link-hover">Novelties</a>
    <a className="link link-hover">Top Seller</a>
  </div> 

  <div>
    <span className="footer-title">Customer service</span> 
    <a className="link link-hover">Customer information</a> 
    <a className="link link-hover">Cancellation right</a> 
    <a className="link link-hover">Certificate Database</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Shopping</span> 
    <a className="link link-hover">Terms and conditions</a> 
    <a className="link link-hover">Data privacy statement</a> 
    <a className="link link-hover">Terms of delivery</a>
    <a className="link link-hover">Payment methods</a>
    <a className="link link-hover">Battery Directive</a>
  </div>
</footer>
    );
};

export default Footer;