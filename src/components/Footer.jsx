import './footer.css'

function Footer() {
  return (
    <div>
      <div className="footer-main">
          <div className="footer-child">
            <div className="footer-child-header">ABOUT</div>
            <a href="https://www.flipkart.com/helpcentre?otracker=${otracker}_navlinks" target="_blank"
              className="footer-links">Contact Us</a>
            <a href="https://www.flipkartcareers.com/?otracker=${otracker}_navlinks" target="_blank"
              className="footer-links">Careers</a>
            <a href="http://stories.flipkart.com/" target="_blank" className="footer-links">Flipkart Stories</a>
            <a href="http://stories.flipkart.com/category/top-stories/news/" target="_blank"
              className="footer-links">Press</a>
            <a href="https://www.flipkartwholesale.com/" target="_blank" className="footer-links">Flipkart Wholesale</a>
            <a href="https://www.cleartrip.com/" target="_blank" className="footer-links">Clear Trip</a>
            <a href="https://www.flipkart.com/corporate-information" target="_blank" className="footer-links">Corporate
              Information</a>
          </div>
          <div className="footer-child">
            <div className="footer-child-header">HELP</div>
            <a href="https://www.flipkart.com/pages/payments" target="_blank" className="footer-links">Payments</a>
            <a href="https://www.flipkart.com/pages/shipping" target="_blank" className="footer-links">Shipping</a>
            <a href="https://www.flipkart.com/helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG" target="_blank"
              className="footer-links">Cancellation & Returns</a>
            <a href="https://www.flipkart.com/helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG" target="_blank"
              className="footer-links">FAQ</a>
            <a href="https://seller.flipkart.com/fiv?otracker=${otracker}_navlinks" target="_blank"
              className="footer-links">Report Infringement</a>
          </div>
          <div className="footer-child">
            <div className="footer-child-header">CONSUMER POLICY</div>
            <a href="https://www.flipkart.com/pages/returnpolicy?otracker=${otracker}_navlinks" target="_blank"
              className="footer-links">Cancellation & Returns</a>
            <a href="https://www.flipkart.com/pages/terms?otracker=${otracker}_navlinks" target="_blank"
              className="footer-links">Terms of Use</a>
            <a href="https://www.flipkart.com/pages/paymentsecurity?otracker=${otracker}_navlinks" target="_blank"
              className="footer-links">Security</a>
            <a href="https://www.flipkart.com/pages/privacypolicy?otracker=${otracker}_navlinks" target="_blank"
              className="footer-links">Privacy</a>
            <a href="https://www.flipkart.com/sitemap?otracker=${otracker}_navlinks" target="_blank"
              className="footer-links">Site Map</a>
          </div>
          <div className="footer-child">
            <div className="footer-child-header">SOCIAL</div>
            <a href="https://www.facebook.com/flipkart" target="_blank" className="footer-links">Facebook</a>
            <a href="https://www.twitter.com/flipkart" target="_blank" className="footer-links">Twitter</a>
            <a href="https://www.youtube.com/flipkart" target="_blank" className="footer-links">Instagram</a>
          </div>

    </div>
    </div>
  )
}

export default Footer;
