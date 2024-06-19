import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Dashboard } from "./components/Dashboard";
import { RecoilRoot } from "recoil";
import InvoiceForm from "./components/Invoice";
import { Signin } from "./components/signin";
import { Client } from "./components/Clients";

function MainApp() {
  const location = window.location.pathname;

  if (location === "/user/signin") {
    return (
      <Routes>
        <Route path="/user/signin" element={<Signin />} />
      </Routes>
    );
  }

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/user/home" element={<Dashboard />} />
        <Route path="/user/invoices" element={<InvoiceForm />} />
        <Route path="/user/clients" element={<Client />} />
        <Route path="*" element={<Navigate to="/user/home" />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
