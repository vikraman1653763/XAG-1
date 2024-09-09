import React, { useEffect, useRef } from 'react';
import '../style/login.css';

function Login() {
  // const vantaRef = useRef(null);

  // useEffect(() => {
  //   const scriptThree = document.createElement('script');
  //   scriptThree.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js';
  //   scriptThree.onload = () => loadVanta(); 
  //   document.body.appendChild(scriptThree);

  //   const loadVanta = () => {
  //     const scriptVanta = document.createElement('script');
  //     scriptVanta.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js';
  //     scriptVanta.onload = () => {
  //       if (window.VANTA) {
  //         vantaRef.current = window.VANTA.BIRDS({
  //           el: ".login-container",
  //           mouseControls: true,
  //           touchControls: true,
  //           gyroControls: false,
  //           minHeight: 200.00,
  //           minWidth: 200.00,
  //           scale: 1.00,
  //           scaleMobile: 1.00,
  //           backgroundColor: 0x0,
  //           color1: 0x3cf708,
  //           color2: 0xdffd4
  //         });
  //       }
  //     };
  //     document.body.appendChild(scriptVanta);
  //   };

  //   return () => {
  //     // Clean 
  //     if (vantaRef.current) {
  //       vantaRef.current.destroy();
  //     }
  //     document.body.removeChild(scriptThree);
  //     const vantaScript = document.querySelector('script[src*="vanta.birds.min.js"]');
  //     if (vantaScript) {
  //       document.body.removeChild(vantaScript);
  //     }
  //   };
  // }, []);

  return (
    <section className='login-container' >
      <div className="login-box">
        <form>
          <div className="user-box">
            <input type="text" name="" required="" placeholder="Username"/>
          </div>
          <div className="user-box">
            <input type="password" name="" required="" placeholder='Password'/>
          </div>
          <center>

          <button class="login-button" data-text="Awesome">
          <span class="actual-text">&nbsp;LOGIN&nbsp;</span>
          <span aria-hidden="true" class="hover-text">&nbsp;LOGIN&nbsp;</span>
        </button>
          </center>
        </form>
      </div>
    </section>
  );
}

export default Login;
