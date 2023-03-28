import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Scroll = (props) => {
    const containerRef = useRef(null);
    const textRefs = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const container = containerRef.current;
        const text = textRefs.current;

        
        /* text.forEach((el) => {
        tl.fromTo(
            el,
            { autoAlpha: 0 },
            {
                yPercent: -200,
                autoAlpha: 1,
                ease: 'none',
                opacity: 0
            }
        );
    }); */
    
        text.forEach((el) => {
            const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: true,
            },
            });
            tl.fromTo(el, 
            { autoAlpha: 0 },
            {
                yPercent: -200,
                autoAlpha: 1,
                ease: 'none',
            });
          });
    }, []);

    return (
        // <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '150vh' }}>
        <div ref={containerRef} style={{ height: '400vh' }}>
        <h1>Scroll down to see the animation!</h1>
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '400vh' }}>
            <div
            ref={(el) => (textRefs.current[0] = el)}
            style={{
                opacity: 0,
                // writingMode: 'inherit',
                textOrientation: 'upright',
                whiteSpace: 'nowrap',
                fontSize: '3rem',
                fontWeight: 'bold',
                color: 'black',
                position: 'fixed',
                top: '50%',
                left: '10%',
                transform: 'translateY(-50%)',
            }}
            >
            This is some vertical scrolling text!
            </div>
            <div
            ref={(el) => (textRefs.current[1] = el)}
            style={{
                opacity: 0,
                // writingMode: 'inherit',
                textOrientation: 'upright',
                whiteSpace: 'nowrap',
                fontSize: '3rem',
                fontWeight: 'bold',
                color: 'black',
                position: 'fixed',
                top: '50%',
                left: '10%',
                transform: 'translateY(-50%)',
            }}
            >
            This is some more vertical scrolling text!
            </div>
            <div
            ref={(el) => (textRefs.current[2] = el)}
            style={{
                opacity: 0,
                // writingMode: 'inherit',
                textOrientation: 'upright',
                whiteSpace: 'nowrap',
                fontSize: '3rem',
                fontWeight: 'bold',
                color: 'black',
                position: 'fixed',
                top: '50%',
                right: '10%',
                transform: 'translateY(-50%)',
            }}
            >
            And here's even more vertical scrolling text!
            </div>
        </div>
        </div>
    );
}

export default Scroll