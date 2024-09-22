import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './parallax.css'
const HomeParallax = () => {
  return (
    <div className='parallax-wrapper z-30'>

      <Parallax pages={2} style={{ top: '0', left: '0' }} className='animation'>
        <ParallaxLayer offset={0} speed={0}>
          <div className='animation-layer parallax' id='one'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.63}>
          <div className='animation-layer parallax' id='eight'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.63}>
          <div className='animation-layer parallax' id='nine'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.63}>
          <div className='animation-layer parallax' id='ten'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.63}>
          <div className='animation-layer parallax' id='eleven'></div>
        </ParallaxLayer>
      </Parallax>

      </div>
  )
}

export default HomeParallax