import { CityList } from "./components/CityList";
import { Header } from "./components/Header";
import { CitiesContext } from "./context/CitiesContext";
import { useCities } from "./hooks/useCities";

const Home = () => {
  const citiesHookInstance = useCities();

  return (
    <CitiesContext.Provider value={citiesHookInstance}>
      <div className="Home__container">
        <Header />
        <CityList />
      </div>
    </CitiesContext.Provider>
  );
};

export default Home;
