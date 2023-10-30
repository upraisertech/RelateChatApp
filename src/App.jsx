import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/navbar";
import { AuthProvider } from "./context/AuthContext";
import ChatRoom from "./pages/ChatRoom";
import Login from "./pages/Login";
import Groups from "./pages/Groups";
import ChatPage from "./pages/Chat/index";
import NotFound from "./pages/NotFound";
import { PrivateRoute } from "./routes/PrivateRoute";
import ScrollToTop from "./components/commom/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/chat"
            element={
              <PrivateRoute>
                <ChatPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/group"
            element={
              <PrivateRoute>
                <Groups />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
