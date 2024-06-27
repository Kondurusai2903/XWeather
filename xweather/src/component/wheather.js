import React, { useState } from "react";
const Boxmode1 = ({ def, val }) => {
  return (
    <div
      style={{
        width: "300px",
        padding: "1rem",
        backgroundColor: "lightgray",
        border: "1px solid black",
        margin: "1rem",
        borderRadius: "10px",
      }}
      className="weather-card"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h4>{def}</h4>
        <p>{val}</p>
      </div>
    </div>
  );
};
const Wheather = () => {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState([]);
  const handlesubmit = (e) => {
    e.preventDefault();
    res();
  };
  const handlechange = (e) => {
    setInput(e.target.value);
    setWeather([]);
  };
  const res = async () => {
    try {
      let response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=5dfa0dd85b764bb2875172346242606&q=${input}`
      );
      let data = await response.json();
      if (data.error) {
        alert("Failed to fetch weather data");
      } else {
        setWeather(data);
      }
    } catch (err) {
      alert("Failed to fetch weather data");
    }
  };
  return (
    <div>
      <center>
        <form onSubmit={handlesubmit}>
          <input
            style={{
              padding: ".5rem",
            }}
            type="text"
            placeholder="Enter city name"
            required
            value={input}
            onChange={handlechange}
          />
          <button
            type="submit"
            style={{
              padding: ".5rem",
              backgroundColor: "green",
              color: "white",
              margin: "1rem",
            }}
          >
            Search
          </button>
        </form>

        {input.length > 0 && weather.length !== 0 ? (
          <div style={{ display: "flex" }} className="weather-cards">
            <Boxmode1 def={"Temperature"} val={weather.current.temp_c} />
            <Boxmode1 def={"Humidity"} val={weather.current.humidity} />
            <Boxmode1 def={"Condition"} val={weather.current.condition.text} />
            <Boxmode1 def={"Wind"} val={weather.current.wind_kph} />
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </center>
    </div>
  );
};

export default Wheather;
