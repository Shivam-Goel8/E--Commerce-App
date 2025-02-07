import React from 'react'
import { Link } from "react-router-dom";
function Hero() {
    return (
        <>
            <div className="hero">
                <div className="hero_text">
                    <p>Upto 50% of on Mean Wear</p>
                    <span className='hero_para'>
                        Welcome to our e-commerce website. Here, you'll find amazing products at unbeatable prices.<br /> Explore now and enjoy exclusive discounts!
                    </span>
                </div>
                <div className="hero_img">
                    <img src='https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                </div>
            </div>

            <h1 className='heading_pro'>Products</h1>
            <div className="product">
                <div className="cart">
                    <img src="https://images.meesho.com/images/products/478756576/1s98v_400.webp" className='cart_img' />
                    <p>Men</p>
                    <p><span>⭐4.0</span><br /><br /></p>
                    <p><Link to="/Men" className='add_cart'>Add Cart</Link></p>
                </div>
                <div className="cart">
                    <img src="https://images.meesho.com/images/products/331661639/7aoel_400.webp" className='cart_img' />
                    <p>Men</p>
                    <p><span>⭐4.5</span><br /><br /></p>
                    <p><Link to="/Men" className='add_cart'>Add Cart</Link></p>
                </div>
                <div className="cart">
                    <img src="https://images.meesho.com/images/products/388403510/k0eue_400.webp" className='cart_img' />
                    <p>Kids</p>
                    <p><span>⭐4.0</span><br /><br /></p>
                    <p><Link to="/Kids" className='add_cart'>Add Cart</Link></p>

                </div>
                <div className="cart">
                    <img src="https://images.meesho.com/images/products/303431900/qvplx_400.webp" className='cart_img' />
                    <p>Women</p>
                    <p><span>⭐4.9</span><br /><br /></p>
                    <p><Link to="/Women" className='add_cart'>Add Cart</Link></p>
                </div>
            </div>

            <h1 className='heading_sale'>Sale</h1>
            <div className="sale">
                <div className="sale_img">
                    <img src="https://cdn.pixabay.com/photo/2018/12/09/11/24/sale-3864704_1280.jpg" />
                </div>
                <div className="sale_text">
                    <h1>Winter Sale upto 50% off!</h1>
                    <p>Don't miss out on exclusive deals and unbeatable discounts—shop now and save big during our mega sale!</p>
                </div>
            </div>

            <div className="fotter">
                <div className="fotter_a">
                    <h3>Shopy</h3>
                    <p>Shop smarter, not harder!Shopy brings your <br />favorite products right to your doorstep.</p>
                </div>
                <div className="fotter_b">
                    <p>Impotant Link</p>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/Men"><li>Men Wear</li></Link>
                    <Link to="/Women"><li>Women Wear</li></Link>
                    <Link to="/Kids"><li>Kids Wear</li></Link>
                </div>
                <div className="fotter_c">
                    <p><strong>Address:</strong> B Block, Shakti Nagar</p>
                    <p><strong>Contact:</strong> 011-123456789</p>
                </div>
            </div>
        </>
    )
}

export default Hero