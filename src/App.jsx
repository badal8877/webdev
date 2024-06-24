import "./App.css";
import TopNav from "./component/TopNav";
import 'bootstrap/dist/css/bootstrap.min.css';
import NewSection from "./component/NewSection";
import VmrSection from "./component/VmvSection";
import AwardSection from "./component/AwardSection";
import MapSection from "./component/MapSection";
import TenderOfficeSection from "./component/TenderOfficeSection";
import BusinessSection from "./component/BusinessSection";
import CsrSection from "./component/CsrSection";
// import TestSection from "./component/TestSection";
import FooterSection from "./component/FooterSection";




function App() {
  return (
    <div>
      <TopNav/>
       {/* <TestSection/> */}
       <NewSection/>
       <VmrSection/>
       <AwardSection/>
       <MapSection/>
       <TenderOfficeSection/>
       <BusinessSection/>
       <CsrSection/>
       
       <FooterSection/>
    </div>
  );
}

export default App;