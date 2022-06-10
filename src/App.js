import SideBar from "./Components/Sidebar/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import data from "./data.json";
import Favorites from "./Favorites";
import Home from "./Home";
import Archieves from "./Archieves";

function App() {
  const filteredFavorites = data.teams.filter(
    (team) => team.is_favorited === true
  );

  const filteredArchieves = data.teams.filter(
    (team) => team.is_archived === true
  );

  return (
    <div className="ui grid">
      <div className="one wide column">
        <SideBar />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route
            path="favorites"
            element={<Favorites favoriteData={filteredFavorites} data={data} />}
          />
          <Route
            path="archieve"
            element={
              <Archieves archievesData={filteredArchieves} data={data} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
