import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import useNotification from "./hook/useNotification";

function App() {
  const {} = useNotification()
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
