import axios from 'axios';
import { toast } from 'react-toastify';
import notificationImg from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';

type Props = {
  saleId: number;
}

function handleClick(id: number){
  axios(`${BASE_URL}/sales/${id}/notification`)
  .then(response => {
    toast.info("SMS sent successfully!");
  })
}

//NOTIFICATION BUTTON COMPONENT
function NotificationButton( {saleId} : Props) {
    return (
      <>
        <div className="mksshop-red-btn" onClick={() => handleClick(saleId)}>
            <img src={notificationImg} alt="Notification" />
        </div>
      </>
    )
  }
  
  export default NotificationButton;
  