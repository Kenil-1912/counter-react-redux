import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./containers/Header";
import Inputs from "./containers/Inputs";
import Display from "./containers/Display";
import { useSelector } from "react-redux";
import PrivacyMessage from "./containers/PrivacyMessage";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <div className="px-4 py-5 my-5 text-center">
      <Header />
      <div className="col-lg-6 mx-auto">
        {!privacy ? <Display /> : <PrivacyMessage />}

        <Inputs />
      </div>
    </div>
  );
}

export default App;
