import React, { useRef, useEffect } from "react";
import shoe from "../assets/shoe.png";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { BsArrowUpRight } from "react-icons/bs";
import { HiBars3BottomLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import midBg from "../assets/drake.png";
import testBg from "../assets/danie.jpg";
import chair1 from "../assets/furniture2.png";
import chair2 from "../assets/furniture1.png";
import lamp1 from "../assets/philippe.png";
import lamp2 from "../assets/phil.png";
import chair3 from "../assets/kelly.png";
import linh from "../assets/linh.png";
import linh2 from "../assets/linh-le.png";
import kettle from "../assets/andrew.png";
import stool1 from "../assets/brandon.png";
import clock from "../assets/julia.png";
import stool2 from "../assets/maly.png";
import lamp3 from "../assets/natalia.png";
import chair4 from "../assets/images.png";
import vase1 from "../assets/czapp.png";

import { setIsNavOpen, closeSubNav } from "../reducers/appSlice";

const LandingPage = () => {
  const { isNavOpen } = useSelector((store) => store.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bodyRef = useRef();
  const handleShopClick = () => {
    navigate("/auth");
  };
  const handleClickOutside = (event) => {
    if (bodyRef.current && !bodyRef.current.contains(event.target)) {
      dispatch(closeSubNav());
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);
  const openNav = () => {
    dispatch(setIsNavOpen());
  };

  return (
    <motion.div className="landing-section">
      <div ref={bodyRef} className="landing-header p-width  ">
        <div className="mobile-nav" onClick={openNav}>
          <HiBars3BottomLeft />
        </div>
        <ul className={isNavOpen ? "side-col left active" : "side-col left"}>
          <li onClick={openNav}>Home</li>
          <li onClick={openNav}>Pages</li>
          <li onClick={openNav}>Shop</li>
          <li onClick={openNav}>Blog</li>
          <li onClick={openNav}>Contact</li>
          {/* <li className={isNavOpen ? "show adm" : "mobile adm"}>
            <Link className="btn">Admin Sign in</Link>
          </li> */}
        </ul>
        <div className="header-logo">
          <strong>Finite</strong>
          <small> Fizz</small>
        </div>
        <ul className="side-col right">
          <li>Account</li>
          <li>
            <CiSearch className="icon" />
          </li>
          <li>
            <CiShoppingCart className="icon" />
          </li>
        </ul>
        <div className="mobile-cart">
          <CiShoppingCart className="icon" />
        </div>
      </div>
      <div className="landing-banner p-width">
        <div className="left-body">
          <div className="bord-box"></div>

          <small className="small-text">Just Dropped</small>
          <div className="lead-text">
            <span>Feel</span>
            <span>Authentic</span>
            <span>Peace</span>
          </div>
          <div className="btn-box">
            <Link to={""}>
              <span>Shop Now</span> <BsArrowUpRight className="icon" />
            </Link>
          </div>
        </div>
        <div className="right-body">
          <div className="bord-box-b"></div>
          <div className="small-circle1"></div>
          <div className="small-circle2"></div>
          <div className="small-box"></div>
          <div className="small-box2"></div>
          <div className="small-boxes"></div>
          <div className="img-box">
            <img src={midBg} alt="" />
          </div>
        </div>
      </div>
      <div className="landing-desc-info p-width">
        <div className="desc-h-text">
          <h1 className="head-font">What We Do</h1>
        </div>
        <div className="desc-p">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            voluptates ratione ab, autem, iste rerum ex velit ducimus quo alias
            temporibus. Harum, autem modi dolor dolorum aliquam doloremque dicta
            explicabo voluptatibus! Autem sapiente aliquam consequuntur eius,
            inventore fuga maxime id?
          </p>
        </div>
        <div className="desc-btn-box">
          <button>
            <span>Learn More</span> <BsArrowUpRight />
          </button>
        </div>
      </div>
      <div className=" p-width">
        <div className="landing-features-sect">
          <div className="">
            <h1 className="head-font"> Feautured Collections</h1>
          </div>
          <div className="items-div">
            <div className="items-box">
              <div className="image-box">
                <img src={lamp1} alt="chair image" />
              </div>
              <div className="items-desc">
                <strong>Roof Lamp </strong>
                <small> $2800</small>
              </div>
            </div>

            <div className="items-box">
              <div className="image-box">
                <img src={chair1} alt="chair image" />
              </div>
              <div className="items-desc">
                <strong>Cool Chair </strong>
                <small> $1200</small>
              </div>
            </div>
            <div className="items-box">
              <div className="image-box">
                <img src={lamp2} alt="chair image" />
              </div>
              <div className="items-desc">
                <strong>Rose holdback </strong> <small> $1400</small>
              </div>
            </div>
            <div className="items-box">
              <div className="image-box">
                <img src={linh} alt="chair image" />
              </div>
              <div className="items-desc">
                <strong>Plant Vase</strong>
                <small> $800</small>
              </div>
            </div>
          </div>

          <div className="bord-box"></div>
          <div className="bord-box-b"></div>
        </div>
      </div>
      <div className="p-width">
        <div className="popular-sect">
          <div className="popular-header">
            <div className="bord-box"></div>
            <div className="bord-box-b"></div>
            <h1 className="head-font"> Popular Collections</h1>
          </div>
          <div className="items-block">
            <div className="items-box">
              <div className="items-image">
                <img src={kettle} alt="" />
              </div>
              <div className="items-info">
                <strong>Kettle</strong>
                <small>$120.00</small>
              </div>
            </div>
            <div className="items-box">
              <div className="items-image">
                <img src={linh2} alt="" />{" "}
              </div>
              <div className="items-info">
                <strong>Flower Vase</strong>
                <small>$220.00</small>
              </div>
            </div>
            <div className="items-box">
              <div className="items-image">
                <img src={stool2} alt="" />{" "}
              </div>
              <div className="items-info">
                <strong>Deco Accessory</strong>
                <small>$40.00</small>
              </div>
            </div>
            <div className="items-box">
              <div className="items-image">
                <img src={clock} alt="" />{" "}
              </div>
              <div className="items-info">
                <strong>Wall Clock</strong>
                <small>$180.00</small>
              </div>
            </div>
            <div className="items-box">
              <div className="items-image">
                <img src={chair2} alt="" />
              </div>
              <div className="items-info">
                <strong>Kayl Sofa</strong>
                <small>$3000.00</small>
              </div>
            </div>
            <div className="items-box">
              <div className="items-image">
                <img src={stool1} alt="" />{" "}
              </div>
              <div className="items-info">
                <strong>Side Stool</strong>
                <small>$220.00</small>
              </div>
            </div>
            <div className="items-box">
              <div className="items-image">
                <img src={vase1} alt="" />{" "}
              </div>
              <div className="items-info">
                <strong>Vase Accessory</strong>
                <small>$640.00</small>
              </div>
            </div>
            <div className="items-box">
              <div className="items-image">
                <img src={lamp3} alt="" />{" "}
              </div>
              <div className="items-info">
                <strong>Chu Lamp</strong>
                <small>$930.00</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-width">
        <div className="testimonial-sect">
          <div className="img-box">
            <img src={testBg} alt="" />
          </div>
          <div className="test-box">
            <div>
              <h2>True Story</h2> <div></div>
            </div>
            <p className="test-p">
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus dolores, eveniet, non quasi iure magni
              reprehenderit ipsam hic molestiae."
            </p>
            <div className="test-name">
              <h2>Julia Crawford</h2>
              <small>Designer at Oregon Studios</small>
            </div>
          </div>
          <div className="bord-box"></div>
          <div className="bord-box-b"></div>
        </div>
      </div>
      <div className="p-width p-block">
        <div className="social-sect">
          <div className="soc-texts">
            <h1 className="head-font"> INSTAGRAM</h1>
            <p>#brisa</p>
          </div>
          <div className="items-block">
            <div className="items-box">
              <img src={chair2} alt="" />
            </div>
            <div className="items-box">
              <img src={linh2} alt="" />
            </div>
            <div className="items-box">
              <img src={lamp3} alt="" />
            </div>
            <div className="items-box">
              <img src={chair3} alt="" />
            </div>
            <div className="items-box">
              <img src={stool2} alt="" />
            </div>
          </div>
          <div className="bord-box"></div>
          <div className="bord-box-b"></div>
        </div>
      </div>
      <div className="p-width">
        <footer className="landing-footer">
          <div className="footer-top">
            <div className="logo">
              <strong>Finite</strong>
              <small> Fizz</small>
            </div>
            <ul className="footer-links">
              <li>Shop</li>
              <li>Lookbook</li>
              <li>Legal</li>
            </ul>
            <ul className="footer-links">
              <li>About</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
            </ul>
            <div className="mid">
              <div className="sub-link">
                <p>Subscribe to the newsletter</p>
                <div className="input">
                  <input type="email" placeholder="Your Email" />
                  <HiOutlineArrowLongRight className="icon" />
                </div>
              </div>
              <div className="social-link">
                <p>Social Media</p>
                <div className="social">
                  <FaLinkedinIn className="icon" />
                  <FaTwitter className="icon" />
                  <FaInstagram className="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <h2>Mamba Dev &copy;</h2>
            <hr className="line" />
            <p>Created By Isaac Williams</p>
          </div>
          <div className="bord-box"></div>
          <div className="bord-box-b"></div>
        </footer>
      </div>
    </motion.div>
  );
};

export default LandingPage;
