import React, { useState } from "react";
import useSound from "use-sound";

// import components
import SoundButtons from "./components/SoundButtons/SoundButtons";
import MainContent from "./containers/MainContent/MainContent";

// import styles
import GlobalStyle, { BackgroundImg } from "./globalStyles";

// import bgm
import bgmSrc from "./sound/bgm.mp3";

// import sound source
import openSfx from "./sound/open.mp3";
import closeSfx from "./sound/close.mp3";
import moveSfx from "./sound/move.mp3";
import arriveSfx from "./sound/arrive.wav";

// import background image
import bgi from "./wall.png";

function App() {
  // Define States //
  // sound state
  const [sound, setSound] = useState(null);

  // elevator states
  const [floor, setFloor] = useState(1);
  const [isReady, setReady] = useState(false);
  const [destination, setDestination] = useState(null);
  const contactFloor = 7;

  // screen state
  const [hoverValue, setHover] = useState(1);

  // Sound Functions //
  // bgm hook
  const [bgm, { stop }] = useSound(bgmSrc, { volume: 0.3, interrupt: true });

  //waitingPic
  const [wait, setwait] = useState(0);
  const [headedTo, setheadedTo] = useState(0)

  // set sound state and play bgm if sound is true
  const initialSoundSettings = (allow) => {
    setSound(allow);
    if (allow === true) {
      bgm();
      setTimeout(() => {
        setReady(true);
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

  // sound settings toggle
  const soundToggle = (sound) => {
    if (sound === true) {
      setSound(false);
      stop();
    } else {
      setSound(true);
      bgm();
    }
  };

  // Floor Change Mechanism //
  // when floor button is clicked
  const changeFloor = async (floorNum) => {
    // if destination is not current floor
    if (floorNum !== floor) {
      try {
        // get difference between destination and current location
        const diff = floorNum - floor;
        setDestination(floorNum);

        // close door when open
        await closeDoor();
        await waitPic();

        // if destination is higher floor, go up, else go down
        diff > 0 ? await upEachFloor(floorNum) : await downEachFloor(floorNum);

        await setFloorData(diff, floorNum);

        await openDoor();
        await dontwaitPic();
      } catch (err) {
        console.log(err);
      }
    }
  };

  // go up floors
  function upEachFloor(floorNum) {
    return new Promise((resolve, reject) => {
      if (sound) movePlay();
      setheadedTo(1);
      // call function on every floor until destination
      for (let i = floor; i <= floorNum; i++) {
        delayedFloorChange(i, "up");
      }
      resolve("success");
    });
  }
 

  // go down floors
  function downEachFloor(floorNum) {
    return new Promise((resolve, reject) => {
      if (sound) movePlay();
      setheadedTo(null);

      // call function on every floor until destination
      for (let i = floor; i >= floorNum; i--) {
        delayedFloorChange(i, "down");
      }
      resolve("success");
    });
  }

  // set floor on arrival
  function setFloorData(diff, floorNum) {
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
    return isReady
      ? new Promise((resolve, reject) => {
          setReady(false);
          doorSound();
          setTimeout(() => {
            resolve("success");
          }, 2000); // wait for door to close
        })
      : "";
  }

  // open door
  function openDoor() {
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

  // toggle door
  const doorActivate = (action) => {
    action === "open" ? openDoor() : closeDoor();
  };

  // Screen Function //
  // set screen data to hover data
  const onButtonHover = (e) => {
    setHover(e.target.value);
  };

  // set screen data to current floor data
  const onButtonHoverOut = (e) => {
    setHover(floor);
  };
   //waitingPic
   function waitPic(){
    return new Promise((resolve, reject)=>{
      setwait(1);
      resolve("success");
    });

  }

  function dontwaitPic(){
    return new Promise((resolve, reject)=>{
      setwait(0);
      resolve("success");
    });

  }

  return (
    <div>
      <GlobalStyle />
      {/* if sound state is null, show buttons */}
      {sound === null ? (
        <SoundButtons initialSoundSettings={initialSoundSettings} />
      ) : (
        <>
          <BackgroundImg src={bgi} alt="background" />
          <MainContent
            sound={sound}
            soundToggle={soundToggle}
            floor={floor}
            hoverValue={hoverValue}
            isReady={isReady}
            contactFloor={contactFloor}
            changeFloor={changeFloor}
            onButtonHover={onButtonHover}
            onButtonHoverOut={onButtonHoverOut}
            destination={destination}
            doorActivate={doorActivate}
            wait={wait}
            diff={headedTo}
            
          />
        </>
      )}
    </div>
  );
}

export default App;
