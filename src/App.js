import React, { useState, useEffect } from "react";
import useSound from "use-sound";

import "./App.css";
import SoundButtons from "./components/SoundButtons/SoundButtons";
import Door from "./containers/Door/Door";
import FloorSign from "./containers/FloorSign/FloorSign";
import Navigation from "./containers/Navigation/Navigation";
import Screen from "./containers/Screen/Screen";
import FloorGuides from "./containers/FloorGuides";

// import bgm
import bgmSrc from "./sound/bgm.mp3";

// import sound source
import openSfx from "./sound/open.mp3";
import closeSfx from "./sound/close.mp3";
import moveSfx from "./sound/move.mp3";
import arriveSfx from "./sound/arrive.wav";

import bgi from "./base.png";

function App() {
  const [sound, setSound] = useState(true);

  const [floor, setFloor] = useState(1);
  const [isReady, setReady] = useState(false);

  const [hoverValue, setHover] = useState(1);

  const [bgm] = useSound(bgmSrc, { volume: 0.3, interrupt: true });

  // set sound state, play bgm if sound is true
  const soundSettings = (allow) => {
    setSound(allow);
    if (allow) {
      bgm();
      setTimeout(() => {
        openPlay();
      }, 1500);
    }
  };

  // set sfx
  const [openPlay] = useSound(openSfx, { playbackRate: 1.1 });
  const [closePlay] = useSound(closeSfx, { playbackRate: 1.1 });
  const [movePlay] = useSound(moveSfx, { playbackRate: 2, volume: 0.3 });
  const [arrivePlay] = useSound(arriveSfx);

  //------------------------------------function------------------------------------------------------------------------------------------------------------------------
  // open and close door sfx
  const doorSound = () => {
    if (isReady && sound) {
      openPlay();
    } else if (!isReady && sound) {
      closePlay();
    }
  };

  // when floor button is clicked
  const changeFloor = (floorNum) => {
    // if different floor
    if (floor < floorNum) {
      // for (let i = floor; i <= floorNum; i++) {
      //   setTimeout(() => {
      //     setFloor(i);
      //   }, 4000);
      // }
      let i = floor;
      while (i <= floorNum) {
        setTimeout((i) => {
          setFloor(i++);
        }, 2000);
      }

      // if (sound) {
      //   setReady(false);

      //   doorSound();

      //   setTimeout(() => movePlay(), 2000);

      //   setTimeout(() => {
      //     setFloor(floorNum);
      //     setHover(floorNum);
      //   }, 3400);

      //   setTimeout(() => arrivePlay(), 3500);

      //   setTimeout(() => {
      //     setReady(true);
      //     doorSound();
      //   }, 4500);
      // } else {
      //   setReady(false);

      //   setTimeout(() => {
      //     setFloor(floorNum);
      //     setHover(floorNum);
      //   }, 3400);

      //   setTimeout(() => setReady(true), 4500);
      // }
    } else if (floor > floorNum) {
      // for (let i = floor; i >= floorNum; i--) {
      //   setTimeout(() => {
      //     setFloor(i);
      //   }, 4000);
      // }

      let i = floor;
      while (i >= floorNum) {
        setFloor(i--);
        setTimeout(() => {}, 2000);
      }
    }
  };

  const onButtonHover = (e) => {
    setHover(e.target.value);
  };

  const onButtonHoverOut = (e) => {
    setHover(floor);
  };

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 1500);
    return;
  }, []);

  return (
    <div>
      <img src={bgi} alt="background" className="background" />
      {/* if sound state is null, show buttons */}
      {sound === null ? (
        <SoundButtons soundSettings={soundSettings} />
      ) : (
        <main className="main-container">
          <div className="top">
            <FloorGuides floor={floor} isReady={isReady} />

            <FloorSign floor={floor} />
          </div>

          <section className="bottom">
            <Screen hoverValue={hoverValue} />
            <Door floor={floor} isReady={isReady} />
            <Navigation
              changeFloor={changeFloor}
              onButtonHover={onButtonHover}
              onButtonHoverOut={onButtonHoverOut}
            />
          </section>
        </main>
      )}
    </div>
  );
}

export default App;
