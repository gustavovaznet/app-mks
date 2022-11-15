import notificationImg from '../../assets/img/notification-icon.svg'

import './styles.css'

//NOTIFICATION BUTTON COMPONENT
function NotificationButton() {
    return (
      <>
        <div className="mksshop-red-btn">
            <img src={notificationImg} alt="Notification" />
        </div>
      </>
    )
  }
  
  export default NotificationButton
  