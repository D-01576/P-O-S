import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { UserNav } from "./components/User/Nav";
import { RecoilRoot } from "recoil";
import InvoiceForm from "./components/Invoice";
import { Dashboard } from "./components/User/Dashboard/Dashboard";
import { Client } from "./components/User/Clients/Clients";
import { Items } from "./components/User/Items/items";
import { AdminDashboard } from "./components/admin/Dashboard/Dashboard";
import { AdminNav } from "./components/admin/Nav";
import { UserSignin } from "./components/User/signin";
import { AdminSignin } from "./components/admin/signin";
import { Users } from "./components/admin/Users/users";

function MainApp() {
  const locationPath = window.location.pathname;
  const basePath = locationPath.split('/')[1];
  const location = window.location.pathname;
  if(basePath === "user"){
  if (location === "/user/signin") {
    return (
      <Routes>
        <Route path="/user/signin" element={<UserSignin />} />
      </Routes>
    );
  }

  return (
    <>
      <UserNav />
      <Routes>
        <Route path="/user/home" element={<Dashboard />} />
        <Route path="/user/invoices" element={<InvoiceForm />} />
        <Route path="/user/clients" element={<Client />} />
        <Route path="/user/items" element={<Items />} />
        <Route path="*" element={<Navigate to="/user/home" />} />
      </Routes>
    </>
  );
}else if (basePath === "admin"){
  if (location === "/admin/signin") {
    return (
      <Routes>
        <Route path="/admin/signin" element={<AdminSignin />} />
      </Routes>
    );
  }

  return (
    <>
      <AdminNav />
      <Routes>
        <Route path="/admin/home" element={<AdminDashboard />} />
        <Route path="/admin/user" element={<Users></Users>}/>
        <Route path="*" element={<Navigate to="/admin/home" />} />
      </Routes>
    </>
  );
}
else{
  const handleAdminClick = () => {
    window.location.href = '/admin';
  };

  const handleUserClick = () => {
    window.location.href = '/user';
  };

  return(
    <div>
        <button onClick={handleAdminClick}>Admin</button>
        <button onClick={handleUserClick}>User</button>
    </div>
  )
}
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
