export const Timer = ({ time }) => {
  return (
    <div className="timer">
      <div className="time-wrapper">
        <div id="timer-label">Session</div>
        <div id="time-left">
          <span id="hours">
            {time.hours < 10 ? `0${time.hours}` : time.hours}
          </span>
          <span id="minutes">
            {time.minutes < 10 ? `0${time.minutes}` : time.minutes}
          </span>
          <span id="seconds">
            {time.seconds < 10 ? `0${time.seconds}` : time.seconds}
          </span>
          <span id="milliseconds">
            {time.milliseconds < 10
              ? `0${time.milliseconds}`
              : time.milliseconds}
          </span>
        </div>
      </div>
    </div>
  );
};
