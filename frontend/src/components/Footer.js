import React from "react";
import { Link } from 'react-router-dom';
import "./Footer.css";

function Footer() {
  return (
    
    
    <div class="footer-distributed">

        <div class="footer-left">
      
            <h3>About<span></span><span> Syker</span></h3>

            <p class="footer-links">
                <Link to="/">Home</Link>
                |

                <Link to="/contact-us">Contact Us </Link>
            </p>

            <p class="footer-company-name">© 2021 | Syker Limited | All Rights Reserved | Be a visionary</p>
        </div>

        <div class="footer-center">
            <div>
                <i class="fa fa-map-marker"></i>
                  <p><span><a href="https://www.google.com/maps/@33.8948886,35.511905999999954,15z">Pigier Gemmayzeh
                        Andalusia Building</a></span>
                        PO Box 105 Beirut Lebanon</p>
            </div>

            <div>
                <i class="fa fa-phone"></i>
                <p><a href="tel:+96170890342">961 70890342</a></p>
            </div>
            <div>
                <i class="fa fa-envelope"></i>
                <p><a href="mailto:Syker@syker.com">Syker@syker.com</a></p>
            </div>
        </div>
        <div class="footer-right">
            <p class="footer-company-about">
                <span>About the company</span>
                Syker is a fitness apparel & accessories brand, manufacturer and online retailer based in the Lebanon, supported by millions of highly engaged social media followers and customers in 131 countries.</p>
            <div class="footer-icons">
                <a href="https://www.facebook.com/christ.har/"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
                <a href="#"><i class="fa fa-linkedin"></i></a>
                <a href="#"><i class="fa fa-youtube"></i></a>
            </div>
        </div>
    </div>
  );
}

export default Footer;