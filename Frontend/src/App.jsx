import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Dashboard } from "./components/Dashboard";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <>
      <BrowserRouter>
      <RecoilRoot>
            <Nav></Nav>
            <Routes>
              <Route path="/home" element={<Dashboard />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
     </RecoilRoot>
    </BrowserRouter>
    </>
  )
}

export default App
