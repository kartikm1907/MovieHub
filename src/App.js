import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieAppMenu from "./pages/MovieAppMenu";
import { MovieContextProvider } from "./store/MovieContext";
function App() {
  return (
    <MovieContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="" element={< MovieAppMenu />} />
        </Routes>
      </BrowserRouter>
    </MovieContextProvider>
  );
}
export default App;
