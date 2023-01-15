import React from "react";
import Search from "@mui/icons-material/Search";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { WeatherTypes } from "./WeatherTypes";

function Test(props) {
  return (
    <div>
      <button
        type="submit"
        onClick={props.fetchWeather}
        className="relative text-gray-700 pointer top-9 left-28 md:left-80 lg:hidden"
      >
        <Search />
      </button>
      <input
        type={"text"}
        ref={props.inputRef}
        placeholder="Search for a city . . ."
        className="w-2/4 max-w-sm mx-24 md:mx-64 lg:mx-96 xl:mx-auto  bg-gray-50 border border-gray-300 text-gray-600 text-center text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-9 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      {props.loading ? (
        <div className="grid place-items-center h-full">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1477/1477009.png"
            alt="..."
            className="w-14 mx-auto mt-32 animate-spin"
          />
        </div>
      ) : props.showWeather ? (
        <div className="grid place-items-center w-fit  h-fit mt-10 mx-auto">
          <Card
            variant="outlined"
            sx={{ bgcolor: "rgb(6, 182, 212)", width: 300 }}
          >
            <CardContent>
              {props.apiData && (
                <Typography
                  variant="h5"
                  color="text.secondary"
                  sx={{ my: "10px", mx: "5rem" }}
                >
                  {props.apiData?.name + "," + props.apiData?.sys?.country}
                </Typography>
              )}
              <CardMedia
                sx={{ height: 150, width: 150 }}
                image={props.showWeather[0]?.img}
                title="..."
                className="w-full mx-auto object-cover "
              />
              <Typography
                variant="h6"
                sx={{
                  mx: "7rem",
                  my: "1rem",
                  color: "rgb(236, 254, 255)",
                }}
              >
                {props.showWeather[0]?.type}
              </Typography>
              {props.apiData && (
                <div>
                  <CardMedia
                    sx={{
                      height: 50,
                      width: 50,
                      mx: "5rem",
                      color: "rgb(71, 85 ,105)",
                    }}
                    image="https://cdn-icons-png.flaticon.com/512/7794/7794499.png"
                    title="..."
                  />
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{
                      left: "8rem",
                      bottom: "2.5rem",
                      position: "relative",
                    }}
                  >
                    {props.apiData?.main?.temp}&#176;C
                  </Typography>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      ) : (
        // Dummy Data
        <div className="grid place-items-center w-fit  h-fit mt-10 mx-auto">
          <Card
            variant="outlined"
            sx={{ bgcolor: "rgb(6, 182, 212)", width: 300 }}
          >
            <CardContent>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ my: "10px", mx: "0.5rem" }}
              >
                will it be stormy today?
              </Typography>
              <CardMedia
                sx={{ height: 150, width: 150 }}
                image={WeatherTypes[1].img}
                title="..."
                className="w-full mx-auto object-cover "
              />
              <Typography
                variant="h6"
                sx={{
                  mx: "5rem",
                  my: "1rem",
                  color: "rgb(236, 254, 255)",
                }}
              >
                Find Out
              </Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

export default Test;
