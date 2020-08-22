import React, { useRef, useEffect } from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
// import useWebAnimations ,{bounce}from "@wellyshen/use-web-animations";
import './App.css';

function App() {

  // const ref = useRef(null);

  // const { ref, setRef, getAnimation } = useWebAnimations({...bounce}) //2nd Method 

  const { ref, setRef, getAnimation } = useWebAnimations({
    keyframes: [
      { transform: 'translateX(500px)' },

    ],
    timing: {
      delay:1000,
      duration: 2000,
      iterations: Infinity,
      easing: 'ease-in-out',
      direction: "alternate"

    }
  })
  const Playbackrate = () => {
    getAnimation().updatePlaybackRate(getAnimation().playbackRate * 1.2)
  }
  const seek = (e) => {
    const animation = getAnimation();
    const time = (animation.effect.getTiming().duration / 100) * e.target.value;
    animation.currentTime = time;
  };
  return (
    <div>
      <div className="container" ref={ref}>

      </div>
      <button onClick={() => getAnimation().play()}>Play</button>
      <button onClick={() => getAnimation().pause()}>Pause</button>
      <button onClick={() => getAnimation().reverse()}>Reverse</button>
      <button onClick={Playbackrate}>Playbackrate</button>
      <button onClick={() => getAnimation().cancel()}>Cancel</button>
      <input type="range" onChange={seek} />
    </div>
  );
}

export default App;
