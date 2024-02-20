import { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/User/Login";
import Register from "./Components/User/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSign, setShowSign] = useState(false);

  useEffect(() => {
    const email = Cookies.get("user_email");

    const queryParams = new URLSearchParams(window.location.search);
    const email1 = queryParams.get("email");
    const id = queryParams.get("key");
    const fetchData = async () => {
      try {
        if (!email && email1 && id) {
          const response = await fetch(
            "https://api.upskillmafia.com/api/v1/user/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: email1,
                password: id,
              }),
            }
          );

          const data = await response.json();

          if (data.user) {
            Cookies.set("user_name", data.user.name);
            Cookies.set("user_email", data.user.email);
            window.location.reload();
          } else {
            setShowLogin(true);
            setShowSign(true);
          }
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    };

    fetchData();
    if (!email) {
      setShowLogin(true);
      setShowSign(true);
    }
  }, []);
  if (showSign)
    return <Register setShowLogin={setShowLogin} setShowSign={setShowSign} />;
  if (showLogin)
    return <Login setShowLogin={setShowLogin} setShowSign={setShowSign} />;

  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/onboard">
              <Route path="" element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
