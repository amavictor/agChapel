
import { AnimatedRoutes } from './component/Animated routes/animated_routes';
import Lenis from '@studio-freight/lenis';
import { ReactLenis } from '@studio-freight/react-lenis';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 3,
      easing: (t)=> Math.min(1,1.001 - Math.pow(2, -10 * t))
    })
  
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
  
    requestAnimationFrame(raf)
  },[])
 
  return (
    <ReactLenis root>
      <AnimatedRoutes />
    </ReactLenis>

  );
}

export default App;
