//COMPONENTS
import Header from "./components/Header";
import SalesCard from "./components/SalesCard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//APP
function App() {
  return (
    <>
    <ToastContainer />
      <Header />
      <main>
        <section id="sales">
          <div className="mksshop-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App;
