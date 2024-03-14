import './style.css'
import AnchorLink from '../AnchorLink/AnchorLink';
function Footer() {
  return (
    <div>
      <div className="footer-main">
          <div className="footer-child">
            <div className="footer-child-header">ABOUT</div>
            <AnchorLink href="https://www.flipkart.com/helpcentre?otracker=${otracker}_navlinks" >Contact US</AnchorLink>
            <AnchorLink href="https://www.flipkartcareers.com/?otracker=${otracker}_navlinks" >Careers</AnchorLink>
            <AnchorLink href="http://stories.flipkart.com/" >Flipkart Stories</AnchorLink>
            <AnchorLink href="http://stories.flipkart.com/category/top-stories/news/" >Press</AnchorLink>
            <AnchorLink href="https://www.flipkartwholesale.com/" >Flipkart Wholesale</AnchorLink>
            <AnchorLink href="https://www.cleartrip.com/" >Clear Trip</AnchorLink>
            <AnchorLink href="https://www.flipkart.com/corporate-information"  >Corporate
              Information</AnchorLink>
          </div>
          <div className="footer-child">
            <div className="footer-child-header">HELP</div>

            <AnchorLink href="https://www.flipkart.com/pages/payments" >Payments</AnchorLink>
            <AnchorLink href="https://www.flipkart.com/pages/shipping" >Shipping</AnchorLink>
            <AnchorLink href="https://www.flipkart.com/helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG"
              >Cancellation & Returns</AnchorLink>
            <AnchorLink href="https://www.flipkart.com/helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG"
              >FAQ</AnchorLink>
            <AnchorLink href="https://seller.flipkart.com/fiv?otracker=${otracker}_navlinks"
              >Report Infringement</AnchorLink>
          </div>
          <div className="footer-child">
            <div className="footer-child-header">CONSUMER POLICY</div>
            <AnchorLink href="https://www.flipkart.com/pages/returnpolicy?otracker=${otracker}_navlinks"
              >Cancellation & Returns</AnchorLink>
            <AnchorLink href="https://www.flipkart.com/pages/terms?otracker=${otracker}_navlinks"
              >Terms of Use</AnchorLink>
            <AnchorLink href="https://www.flipkart.com/pages/paymentsecurity?otracker=${otracker}_navlinks"
              >Security</AnchorLink>
            <AnchorLink href="https://www.flipkart.com/pages/privacypolicy?otracker=${otracker}_navlinks"
              >Privacy</AnchorLink>
            <AnchorLink href="https://www.flipkart.com/sitemap?otracker=${otracker}_navlinks"
              >Site Map</AnchorLink>
          </div>
          <div className="footer-child">
            <div className="footer-child-header">SOCIAL</div>
            <AnchorLink href="https://www.facebook.com/flipkart" >Facebook</AnchorLink>
            <AnchorLink href="https://www.twitter.com/flipkart" >Twitter</AnchorLink>
            <AnchorLink href="https://www.youtube.com/flipkart" >Instagram</AnchorLink>
          </div>

    </div>
    </div>
  )
}

export default Footer;
