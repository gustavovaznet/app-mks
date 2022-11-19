//COMPONENTS
import NotificationButton from "../NotificationButton";
//DATE PICKER
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//CSS
import "./styles.css";
//HOOKS
import { useEffect, useState } from "react";
//AXIOS
import axios from "axios";
//BASE API URL
import { BASE_URL } from "../../utils/request";
//MODELS
import { Sale } from "../../models/sale";

//SALES CARD COMPONENT
function SalesCard() {

  //CHANGE STATE SET DATE
  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();

  const [minDate, setMinDate] = useState(new Date());
  const [maxDate, setMaxDate] = useState(new Date());

  const [sales, setSales] = useState<Sale[]>([]);

  const dmin = minDate.toISOString().slice(0, 10);
  const dmax = maxDate.toISOString().slice(0, 10);

  useEffect(() => {
    axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`)
      .then(response => {
        setSales(response.data.content)
      });
  }, [minDate, maxDate]);

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
              {sales.map(sale => {
                return (
                  <tr key={sale.id}>
                    <td className="show992">{sale.id}</td>
                    <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                    <td>{sale.sellerName}</td>
                    <td className="show992">{sale.visited}</td>
                    <td className="show992">{sale.deals}</td>
                    <td>R$ {sale.amount.toFixed(2)}</td>
                    <td>
                      <div className="mksshop-red-btn-container">
                        <NotificationButton />
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default SalesCard;
