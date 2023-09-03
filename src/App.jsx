import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/homePage";
import NotFoundPage from "./NotFoundPage";

const App = () => {
  return (
    <>
      <div className=" min-h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
