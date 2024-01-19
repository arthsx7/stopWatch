import "./App.css";
import { useState, useEffect } from "react";
import { LenghtControl } from "./components/LenghtControl";
import { Timer } from "./components/Timer";
import { TimerControl } from "./components/TimerControl";

function App() {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });
  const [running, setRunning] = useState(false);
  const [watch, setwatch] = useState(null);

  const updateTimer = () => {
    setTime((prevTime) => {
      let { hours, minutes, seconds, milliseconds } = prevTime;

      milliseconds += 10;

      if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;

        if (seconds === 60) {
          seconds = 0;
          minutes++;

          if (minutes === 60) {
            minutes = 0;
            hours++;
          }
        }
      }

      return { hours, minutes, seconds, milliseconds };
    });
  };

  const startTimer = () => {
    setRunning((prevRunning) => !prevRunning);
  };

  const restartTimer = () => {
    setRunning(false);
    clearInterval(watch);
    setTime({
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    });
  };

  useEffect(() => {
    if (running) {
      setwatch(setInterval(updateTimer, 10));
    } else {
      clearInterval(watch);
    }

    return () => clearInterval(watch);
  }, [running]);

  return (
    <div className="container">
      <h1 className="main-title">StopWaatch</h1>
      <Timer time={time} />
      <TimerControl startTimer={startTimer} restartTimer={restartTimer} />
    </div>
  );
}

export default App;
