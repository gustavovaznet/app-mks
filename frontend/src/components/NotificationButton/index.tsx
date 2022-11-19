//AXIOS
import axios from 'axios';
//TOAST
import { toast } from 'react-toastify';
//ASSETS
import notificationImg from '../../assets/img/notification-icon.svg';
//BASE URL API
import { BASE_URL } from '../../utils/request';
//CSS
import './styles.css';

//PROPS
type Props = {
  saleId: number;
}

//HANDLE CLICK FUNCTION
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
  