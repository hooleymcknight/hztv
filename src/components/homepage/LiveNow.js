import twitchUNs from '../../data/twitch.json'
import LiveNowSingle from './LiveNowSingle'
import styles from '../../styles/LiveNow.module.scss'

export default function LiveNow() {
  return (
    <div id="container" className={styles.liveNow}>
      <script src= "https://player.twitch.tv/js/embed/v1.js"></script>
      <h2>Live now</h2>
      {Object.keys(twitchUNs).map(x =>
        <LiveNowSingle key={x} channelName={x} />
      )}
    </div>
  )
}
