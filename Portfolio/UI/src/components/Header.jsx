import React from 'react'
import Pic from '../assets/images/ajaypic.jpg'

const Header = () => {
  return (
    <>
    <p className="italic text-3xl m-4 font-bold text-center"><span
            className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 from-10% via-orange-500 via-30% to-red-500 to-90%"> </span>Innovation
            is the key to everything the future can be.</p>

    <div id="home" className="m-4 mt-[50px]">
        <p className="text-3xl ml-4">Ajay here. Welcome.</p>
        <div className="text-justify m-1 flex">
            <div className="w-[50%]">
                <p className="text-2xl font-mono mt-[75px] indent-4">Hi, I'm Ajay Thampi, a blockchain architect and a
                    cryptocurrency
                    enthusiast. I am hailing from the beautiful state
                    of Kerala, India. I graduated Bachelor of Technology in Civil Engineering from National Institute of
                    Technology, Calicut. Cryptocurrency has fascinated me ever since I knew about it and I got an
                    opportunity to
                    study blockchain technology that backs it from Kerala Blockchain Academy at Kerala Digital
                    University.
                    On my
                    free time, I like to volunteer in a dog shelter near my home, feeding and playing with the stray
                    dogs. I
                    also paint, mostly in acrylic, and read fictions.
                </p>
            </div>
            <div className="w-[50%] m-4 ml-[150px]">
                <img src={Pic} className="rounded-md drop-shadow-2xl"/>
            </div>
        </div>

    </div>

    </>
  )
}

export default Header