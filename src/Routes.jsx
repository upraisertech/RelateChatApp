import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Groups from "pages/Groups";
import ChatPage from "pages/Chat/index";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<ChatPage />} />
          <Route path="/group" element={<Groups />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
