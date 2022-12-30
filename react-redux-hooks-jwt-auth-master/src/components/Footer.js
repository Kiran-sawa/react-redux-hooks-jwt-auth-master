import React from 'react'
import "./Footer.css";
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook} from 'react-icons/bs';
import { BsTwitter} from 'react-icons/bs';
import {AiFillYoutube } from 'react-icons/ai';
const Footer = () => {
  return (
  <>
  
  <div class="footer-clean">
        <footer>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Contact Us</h3>
                        <ul>
                            <li><a href="#">Kiransawa@gmail.com</a></li>
                            <li><a href="#">+975 77213462</a></li>
                            <li><a href="#">+975 17213462</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-3 col-md-3 item">
                        <h3>Leagues</h3>
                        <ul>
                            <li><img src='https://cdn.worldvectorlogo.com/logos/uefa-champions-league-2.svg' id='logo'/><a href="#">UCL</a></li>

                            <li><img src="https://cdn.worldvectorlogo.com/logos/uefa.svg" id='logo'/><a href="#">UEFA</a></li>
                            <li><img src="https://content.sportslogos.net/logos/58/4175/full/2443__copa_america-primary-2016.png" id='logo'/><a href="#">COPA America</a></li>
                            <li><img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/UEFA_Nations_League.svg/1200px-UEFA_Nations_League.svg.png" id='logo'/><a href="#">UERO</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 item social">
                        <a href="#"> <i ><AiOutlineInstagram/></i></a>
                        <a href="#"><i><BsFacebook/></i></a>
                        <a href="https://www.youtube.com/@asishkhandal"><i><AiFillYoutube/></i></a>
                        <a href="#"><i><BsTwitter/></i></a>
                        <p class="copyright">FOLLOW US  </p>
                        <p class="copyright">&copy; copyright to Predict  </p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
  
  </>
  )
}

export default Footer