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
  const res = async () => {
    try {
      let response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=5dfa0dd85b764bb2875172346242606&q=${input}`
      );
      let data = await response.json();
      setWeather(data);
    } catch (err) {
      alert("Failed to fetch weather data");
    }
  };
  console.log(input);
  console.log(weather);
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
            onChange={(e) => setInput(e.target.value)}
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
      </center>
      {weather ? "" : "loading..."}
      {/* <div style={{ display: "flex" }}>
        <Boxmode1 def={"Temparature"} val={weather.current.temp_c} />
        <Boxmode1 def={"Humidity"} val={weather.current.humidity} />
        <Boxmode1 def={"Condition"} val={weather.current.condition.text} />
        <Boxmode1 def={"Temparature"} val={weather.current.temp_c} />
      </div> */}
    </div>
  );
};

export default Wheather;
