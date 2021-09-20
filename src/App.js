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

import bgi from "./wall.png";

function App() {
  const [sound, setSound] = useState(null);

  const [floor, setFloor] = useState(1);
  const [isReady, setReady] = useState(false);
  const [destination, setDestination] = useState(null);
  const contactFloor = 7;

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

  // open and close door sfx
  const doorSound = () => {
    if (isReady && sound) {
      openPlay();
    } else if (!isReady && sound) {
      closePlay();
    }
  };

  // when floor button is clicked
  const changeFloor = async (floorNum) => {
    // destination is not current floor
    if (floorNum !== floor) {
      try {
        // get difference between destination and current location
        const diff = floorNum - floor;
        setDestination(floorNum);

        const handleClose = await closeDoor();

        const handleMovement =
          // if destination is higher floor, go up, else go down
          diff > 0
            ? await upEachFloor(handleClose, floorNum)
            : await downEachFloor(handleClose, floorNum);

        const handleArrival = await setFloorData(
          handleMovement,
          diff,
          floorNum
        );

        const handleOpen = await openDoor(handleArrival);
        console.log(handleOpen);
      } catch (err) {
        console.log(err);
      }
    }
  };

  // go up floors
  function upEachFloor(message, floorNum) {
    return new Promise((resolve, reject) => {
      if (sound) movePlay();
      // call function on every floor until destination
      for (let i = floor; i <= floorNum; i++) {
        delayedFloorChange(i, "up");
      }
      resolve("success");
    });
  }

  // go down floors
  function downEachFloor(message, floorNum) {
    return new Promise((resolve, reject) => {
      if (sound) movePlay();
      // call function on every floor until destination
      for (let i = floor; i >= floorNum; i--) {
        delayedFloorChange(i, "down");
      }
      resolve("success");
    });
  }

  // set floor on arrival
  function setFloorData(message, diff, floorNum) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setFloor(floorNum);
        setHover(floorNum);
        setDestination(null);
        if (sound) arrivePlay();
        resolve("success");
      }, 500 * (Math.abs(diff) + 2)); // calculate time until destination + 1 sec
    });
  }

  // close door
  function closeDoor() {
    return new Promise((resolve, reject) => {
      setReady(false);
      doorSound();
      setTimeout(() => {
        resolve("success");
      }, 2000); // wait for door to close
    });
  }

  // open door
  function openDoor(message) {
    return new Promise((resolve, reject) => {
      setReady(true);
      doorSound();
      resolve("success"); // wait for door to open
    });
  }

  // wait 0.5s on each floor
  const delayedFloorChange = (i, move) => {
    const timerVar = move === "up" ? i - floor : floor - i;
    setTimeout(() => {
      setFloor(i);
    }, 500 * timerVar);
  };

  const onButtonHover = (e) => {
    setHover(e.target.value);
  };

  const onButtonHoverOut = (e) => {
    setHover(floor);
  };

  const doorActivate = (action) => {
    action === "open" ? openDoor() : closeDoor();
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
            <Door floor={floor} isReady={isReady} contactFloor={contactFloor} />
            <Navigation
              changeFloor={changeFloor}
              onButtonHover={onButtonHover}
              onButtonHoverOut={onButtonHoverOut}
              contactFloor={contactFloor}
              destination={destination}
              doorActivate={doorActivate}
            />
          </section>
        </main>
      )}
    </div>
  );
}

export default App;
