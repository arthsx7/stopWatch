import { PiPlayPauseFill } from "react-icons/pi";
import { VscDebugRestart } from "react-icons/vsc";

export const TimerControl = ({ startTimer, restartTimer }) => {
  return (
    <div className="timer-control">
      <div id="start-top" onClick={startTimer}>
        <i className="icon-control">
          <PiPlayPauseFill />
        </i>
      </div>
      <div id="reset" onClick={restartTimer}>
        <i className="icon-control">
          <VscDebugRestart />
        </i>
      </div>
    </div>
  );
};
