//COMPONENTS
import NotificationButton from "../NotificationButton"
//DATE PICKER
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//CSS
import './styles.css'
//HOOKS
import { useState } from "react";

//SALES CARD COMPONENT
function SalesCard() {

  //CHANGE STATE SET DATE
  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();

  const [minDate, setMinDate] = useState(new Date());
  const [maxDate, setMaxDate] = useState(new Date());

  return (
    <>
      <div className="mksshop-card">
        <h2 className="mksshop-sales-title">Sales</h2>
        <div>
          <div className="mksshop-form-control-container">
            <DatePicker
              selected={minDate}
              onChange={(date: Date) => setMinDate(date)}
              className="dsmeta-form-control"
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div className="mksshop-form-control-container">
            <DatePicker
              selected={maxDate}
              onChange={(date: Date) => setMaxDate(date)}
              className="dsmeta-form-control"
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </div>
        <div>
          <table className="mksshop-sales-table">
            <thead>
              <tr>
                <th className="show992">ID</th>
                <th className="show576">Data</th>
                <th>Salesman</th>
                <th className="show992">Visits</th>
                <th className="show992">Sales</th>
                <th>Total</th>
                <th>Notificate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="show992">#341</td>
                <td className="show576">08/07/2022</td>
                <td>Mike</td>
                <td className="show992">15</td>
                <td className="show992">11</td>
                <td>R$ 55300.00</td>
                <td>
                  <div className="mksshop-red-btn-container">
                    <NotificationButton />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="show992">#341</td>
                <td className="show576">08/07/2022</td>
                <td>Mike</td>
                <td className="show992">15</td>
                <td className="show992">11</td>
                <td>R$ 55300.00</td>
                <td>
                  <div className="mksshop-red-btn-container">
                    <NotificationButton />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="show992">#341</td>
                <td className="show576">08/07/2022</td>
                <td>Mike</td>
                <td className="show992">15</td>
                <td className="show992">11</td>
                <td>R$ 55300.00</td>
                <td>
                  <div className="mksshop-red-btn-container">
                    <NotificationButton />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default SalesCard
