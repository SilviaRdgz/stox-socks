import React, { useState } from 'react';
import '../styles/navBar.scss';
import Accordion from './accordion';
import Carousel, { CarouselItem } from "./carousel";
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }

    return (
        <main>

            <nav className="navBar">
                <div className="navBar__left">
                    <button className="navBar__burger" onClick={handleToggle}>
                        {navbarOpen ? (
                            <MdClose style={{color: "black", width: "4.8vw", height: "4.8vw"}}/>
                        ) : (
                            <FiMenu style={{color: "black", width: "4.8vw", height: "4.8vw"}}/>
                        )}
                    </button>
                    <a href="#">
                        <img className="logo" src='/images/stox-logo.png'/>
                    </a>
                </div>
                <div className="navBar__bag">
                    <button>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                             xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g>
                                <path
                                    d="m417.9,104.4h-65.5c-2.2-51-44.8-92.4-96.4-92.4s-94.2,41.3-96.5,92.4h-66.5l-30.1,395.6h386.2l-31.2-395.6zm-161.9-71.6c40.1,0 73.5,32 75.7,71.6h-151.4c2.2-39.6 35.6-71.6 75.7-71.6zm-143.3,92.4h46.7v68.5h20.8v-68.5h151.6v68.5h20.8v-68.5h47.8l27,354h-341.7l27-354z"/>
                            </g>
                        </svg>
                        <span>0</span>
                    </button>
                </div>
            </nav>

            <section className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                <article>
                    <Carousel>
                        <CarouselItem>
                            <a className='carousel-item__container'>
                                <img src='/images/daily.jpg' alt='daily'/>
                                <div className='mask'>
                                    <h1>Daily</h1>
                                </div>
                            </a>
                        </CarouselItem>
                        <CarouselItem>
                            <a className='carousel-item__container'>
                                <img src='/images/sport.jpg' alt='sport'/>
                                <div className='mask'>
                                    <h1>Sport</h1>
                                </div>
                            </a>
                        </CarouselItem>
                        <CarouselItem>
                            <a className='carousel-item__container'>
                                <img src='/images/to-travel.jpg' alt='to-travel'/>
                                <div className='mask'>
                                    <h1>To Travel</h1>
                                </div>
                            </a>
                        </CarouselItem>
                        <CarouselItem>
                            <a className='carousel-item__container'>
                                <img src='/images/to-recover.jpg' alt='to-recover'/>
                                <div className='mask'>
                                    <h1>To Recover</h1>
                                </div>
                            </a>
                        </CarouselItem>
                        <CarouselItem>
                            <a className='carousel-item__container'>
                                <img src='/images/to-ski.jpg' alt='to-ski'/>
                                <div className='mask'>
                                    <h1>To Ski</h1>
                                </div>
                            </a>
                        </CarouselItem>
                        <CarouselItem>
                            <a className='carousel-item__container'>
                                <img src='/images/to-walk.jpg' alt='to-walk'/>
                                <div className='mask'>
                                    <h1>To Walk</h1>
                                </div>
                            </a>
                        </CarouselItem>
                    </Carousel>
                </article>
                <article className="accordion-list">
                    <Accordion
                        title="Daily"
                        content="
                        <a>
                        <p>Women</p>
                        <span>30 products</span>
                        </a>
                         <a>
                        <p>Men</p>
                        <span>20 products</span>
                        </a>
                        "
                    />
                    <Accordion
                        title="Sports"
                        content="
                            <a>
                            <p>Roller skating</p>
                            <span>30 products</span>
                            </a>
                             <a>
                            <p>Rowing</p>
                            <span>20 products</span>
                            </a>
                              <a>
                            <p>Tennis</p>
                            <span>20 products</span>
                            </a>
                            "
                    />
                    <Accordion
                        title="To Travel"
                        content="
                            <a>
                            <p>Women</p>
                            <span>30 products</span>
                            </a>
                             <a>
                            <p>Men</p>
                            <span>20 products</span>
                            </a>
                            "
                    />
                    <Accordion
                        title="Medical"
                        content="
                            <a>
                            <p>Women</p>
                            <span>30 products</span>
                            </a>
                             <a>
                            <p>Men</p>
                            <span>20 products</span>
                            </a>"
                    />
                </article>
                <article className="contact">
                    <div>
                        <p>
                            Call
                            <span>
                            +31 (0)20 260 0129
                            </span>
                        </p>
                        <p>
                            Email
                            <span>
                            support@stoxenergy.com
                            </span>
                        </p>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default NavBar;