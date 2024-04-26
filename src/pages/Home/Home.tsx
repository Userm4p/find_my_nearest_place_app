import { CityList } from "./components/CityList";
import { Header } from "./components/Header";
import { NearestCities } from "./components/NearestCities";
import { CitiesContext } from "./context/CitiesContext";
import { useCities } from "./hooks/useCities";

const Home = () => {
  const citiesHookInstance = useCities();

  return (
    <CitiesContext.Provider value={citiesHookInstance}>
      <div className="Home__container">
        <Header />
        <div className="Home__body_container">
          <CityList />
          <NearestCities />
        </div>
      </div>
    </CitiesContext.Provider>
  );
};

export default Home;
