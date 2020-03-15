import React from 'react'
import Bounce from 'react-reveal/Bounce'
import { Share as ShareButton } from '@material-ui/icons'
import { 
  TwitterIcon, 
  FacebookIcon, 
  WhatsappIcon, 
  TelegramIcon, 
  TwitterShareButton, 
  FacebookShareButton, 
  WhatsappShareButton, 
  TelegramShareButton 
} from 'react-share'

export default class Share extends React.Component {
  state = { show: false }

  render() {
    const { show } = this.state
    const { shareUrl } = this.props
    const toogleShare = () => this.setState({ show: !show })
    return (
      <>
        <div style={styles.optionsContainer}>
          <div style={styles.iconMargin}>
            <Bounce when={show} bottom collapse duration={500}>
              <TwitterShareButton url={shareUrl}>
                <TwitterIcon  size={32} round/>
              </TwitterShareButton>
            </Bounce>
          </div>
          <Bounce when={show} bottom collapse duration={1000}>
            <FacebookShareButton url={shareUrl}>
              <FacebookIcon size={32} round/>
            </FacebookShareButton>
          </Bounce>
          <Bounce when={show} bottom collapse duration={1500}>
            <WhatsappShareButton url={shareUrl}>
              <WhatsappIcon size={32} round/>
            </WhatsappShareButton>
          </Bounce>
          <div style={styles.iconMargin}>
            <Bounce when={show} bottom collapse duration={2000}>
              <TelegramShareButton url={shareUrl}>
                <TelegramIcon size={32} round/>
              </TelegramShareButton>
            </Bounce>
          </div>
        </div>
        <ShareButton onClick={toogleShare}
          htmlColor='orange' fontSize='large'/>
      </>
    )
  }
}


const styles = {
  optionsContainer: { 
    height: 56, 
    top: 450, 
    left: 150, 
    display: 'flex', 
    justifyContent: 'center', 
    position: 'absolute'
  },
  iconMargin: {
    marginTop: 20
  }
}