import React from "react";
import shoe from "../assets/shoe.png";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { BsArrowUpRight } from "react-icons/bs";
import { HiBars3BottomLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import midBg from "../assets/drake.png";
import testBg from "../assets/danie.jpg";

const LandingPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleShopClick = () => {
		navigate("/auth");
	};

	return (
		<motion.div className="landing-section">
			<div className="landing-header p-width  ">
				<div className="mobile-nav">
					<HiBars3BottomLeft />
				</div>
				<ul className="side-col left">
					<li>Home</li>
					<li>Pages</li>
					<li>Shop</li>
					<li>Blog</li>
					<li>Contact</li>
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
						<Link to={"/auth"}>
							<span>Shop Now</span> <BsArrowUpRight className="icon" />
						</Link>
					</div>
				</div>
				<div className="right-body">
					<div className="bord-box-b"></div>
					<div className="small-circle1"></div>
					<div className="small-circle2"></div>
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
					<div className="bord-box"></div>

					<div className="bord-box-b"></div>
				</div>
			</div>
			<div className="p-width">
				<div className="popular-sect">
					<div className="">
						<h1 className="head-font"> Popular Collections</h1>
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
			<div className="p-width">
				<div className="social-sect">
					<div className="soc-texts">
						<h1 className="head-font"> INSTAGRAM</h1>
						<p>#brisa</p>
					</div>
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
									<input type="text" placeholder="Your Email" />
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
