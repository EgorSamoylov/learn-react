import React from 'react'
import MyButton from '../button/MyButton';
import SocialRef from '../SocialRef/SocialRef';

const Footer = (props) => {
  return (
    <div className='myFooter'>
        <hr style={{marginTop: "24px", marginBottom: "24px", color: "rgb(118, 134, 148)"}}/>
        <div className='myInfo'>
            <div className='myName'>
                <h3>Самойлов Егор</h3>
            </div>
            
            <div className='myContacts'>
                <SocialRef mes={props.vk} mesIcon="https://static.tildacdn.com/tild3932-3337-4363-a236-386535616435/vk.png"/>
                <SocialRef mes={props.tg} mesIcon="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1024px-Telegram_logo.svg.png"/>
            </div>
        </div>
    </div>
  )
}

export default Footer;
