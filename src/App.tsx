import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "@/pages/IndexPage";


const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
