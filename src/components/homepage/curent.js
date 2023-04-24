import { useState, useEffect } from 'react'
import { TwitchPlayerNonInteractive } from 'react-twitch-embed'

export default function LiveNowSingle(props) {
  const [embed, setEmbed] = useState(null)

  useEffect(() => {
    // document.querySelector('#live-now-HooleyMcKnight')?.addEventListener(TwitchPlayerNonInteractive.ONLINE, function() {
    //   console.log('hooley online')
    // })

    if (embed) {
      console.log(embed)

      embed.addEventListener(Twitch.Player.ONLINE, () => {
        console.log('online')
        // document.querySelector(`#live-now-${props.channelName}`).classList.remove('hide')
      })
  
      embed.addEventListener(Twitch.Player.OFFLINE, () => {
        console.log('offline')
        // document.querySelector(`#live-now-${props.channelName}`).classList.add('hide')
      })
    }
    else {
      console.log(embed)
      setEmbed(new Twitch.Player('twitch', {
        width: 650,
        height: 340,
        channel: 'HooleyMcKnight'
      }))
    }
  }, [embed])
  
  return (
    <div id={'twitch'} className="hide">
      {/* <TwitchPlayerNonInteractive id={`live-now-${props.channelName}`} channel={props.channelName} /> */}
      {props.channelName}
    </div>
  )
}