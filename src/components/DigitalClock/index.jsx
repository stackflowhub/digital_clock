import React, { useEffect, useState } from 'react'
import styles from "./DigitalClock.module.css"

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());
    const [is24Hour, setIs24Hour] = useState(true);


    useEffect(() => {
        const id = setInterval(() => setTime(new Date()), 250);
        return () => clearInterval(id);
    }, []);


    const pad = (n) => String(n).padStart(2, "0");


    const hrRaw = time.getHours();
    const hours = is24Hour ? hrRaw : ((hrRaw + 11) % 12) + 1;
    const minutes = pad(time.getMinutes());
    const seconds = pad(time.getSeconds());
    const ampm = hrRaw >= 12 ? "PM" : "AM";


   return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.dot} />
          <span className={styles.title}>Neon Clock</span>

          <label className={styles.toggle}>
            <input
              type="checkbox"
              checked={is24Hour}
              onChange={(e) => setIs24Hour(e.target.checked)}
            />
            <span>24h</span>
          </label>
        </div>

        {/* TIME DISPLAY */}
        <div className={styles.timeWrapper}>
          <div className={styles.time}>
            <span className={styles.block}>{pad(hours)}</span>
            <span className={styles.colon}>:</span>
            <span className={styles.block}>{minutes}</span>
            <span className={styles.colonSmall}>:</span>
            <span className={styles.seconds}>{seconds}</span>
          </div>

          {!is24Hour && <div className={styles.ampm}>{ampm}</div>}

          <div className={styles.date}>
            {time.toLocaleDateString()} • {time.toLocaleTimeString()}
          </div>
        </div>

        <div className={styles.footer}>Digital Clock • StackFlowHub</div>
      </div>
    </div>
  );
}

export default DigitalClock


