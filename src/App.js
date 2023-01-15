import { useRef, useState, useEffect } from "react";
import "./App.css";
import Test from "./Test";
import { WeatherTypes } from "./WeatherTypes";

const API_KEY = "77099a326aa2597fecb056c78c943b02";
function App() {
  const inputRef = useRef(null);
  const [apiData, setApiData] = useState(null);
  const [showWeather, setShowWeather] = useState(null);

  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&units=metric&appid=${API_KEY}`;
    setLoading(true);
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setApiData(null);
        if (data.cod == 404 || data.cod == 400) {
          setShowWeather([
            {
              type: "Not Found",
              img: "https://cdn-icons-png.flaticon.com/512/4275/4275497.png",
            },
          ]);
        }
        setShowWeather(
          WeatherTypes.filter(
            (weather) => weather.type === data.weather[0].main
          )
        );
        setApiData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchWeather();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  return (
    <div className="bg-slate-900 h-screen">
      <h4 className="text-3xl text-gray-200 font-bold pt-3 mb-3 text-center">
        Weather Forecast App
      </h4>
      <Test
        inputRef={inputRef}
        fetchWeather={fetchWeather}
        showWeather={showWeather}
        apiData={apiData}
        loading={loading}
      />
    </div>
  );
}

export default App;
