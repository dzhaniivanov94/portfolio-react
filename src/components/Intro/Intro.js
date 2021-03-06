import "./Intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

const Intro = () => {

    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            strings: ["Developer", "React Developer"],
            backDelay: 1500,
            backSpeed: 60,
        })
    }, [])


    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/front.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Dzhani Ivanov</h1>
                    <h3>Wannabe <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>

        </div>
    )
}

export default Intro
