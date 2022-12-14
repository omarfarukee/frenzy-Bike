import React from 'react';
import pic1 from '../../images/1433024.webp'
import pic2 from '../../images/motorbike (1).jpg'
import pic3 from '../../images/racer-motorbike.jpg'
import AddsItem from '../AddItems/Adds/AddsItem';
import ThreeItems from '../ThreeItmes/ThreeItems';
import './Home.css'
import Section from './section/Section';
const Home = () => {
    return (
        <div>
            <div className="carousel w-full slides ">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='back-img'>
                        <img src={pic1} className="w-full rounded-xl"/>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 top-40 left-24">
                    <div className=''>
                        <h1 className='lg:text-6xl text-t font-bold text-white text-2xl'>
                        Feel the dark and go on <br /> your destination
                        </h1>
                    </div>
                      
                    </div>
                    <div className="absolute  transform -translate-y-1/2 top-1/3 left-24">
                        <p className='text-white text-p'> bike riding is the passion of boys life ,this is the dream <br /> of boys. so boys we have lots of collection of your dreams with your ability </p>
                    </div>
                    {/* <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
                        <button className="btn cursor-pointer btn-warning">get start</button>
                    </div> */}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide6" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                <div className='back-img'>
                        <img src={pic2} className="w-full rounded-xl"  />
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-40">
                    <div className=''>
                        <h1 className='lg:text-6xl text-t font-bold text-white text-2xl'>
                        Feel the dark and go on <br /> your destination
                        </h1>
                    </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
                        <p className='text-white text-p'> bike riding is the passion of boys life ,this is the dream <br /> of boys. so boys we have lots of collection of your dreams with your ability </p>
                    </div>
                    {/* <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
                        <button className="btn btn-outline btn-warning">get start</button>
                    </div> */}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                <div className='back-img'>
                        <img src={pic3} className="w-full rounded-xl"  />
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-40">
                    <div className=''>
                        <h1 className='lg:text-6xl text-t font-bold text-white text-2xl'>
                        Feel the dark and go on <br /> your destination
                        </h1>
                    </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
                        <p className='text-white text-p'> bike riding is the passion of boys life ,this is the dream <br /> of boys. so boys we have lots of collection of your dreams with your ability </p>
                    </div>
                    {/* <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
                      
                        <button className="btn btn-outline btn-warning">get start</button>
                    </div> */}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <ThreeItems></ThreeItems>
            <div className='mt-5 flex justify-center'>
                 <h1 className='text-green-700 font-bold text-3xl'>Extra info</h1>
            </div>
           
            <Section></Section>

            <AddsItem></AddsItem>
        </div>
    );
};

export default Home;