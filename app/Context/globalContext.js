"use client";

import React, { useContext, createContext, use } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();


export const GlobalContextProvider = ({ children }) => {

    const [forecast, setForecast] = useState({});
    const [airQuality, setAirQuality] = useState({});
    const [fiveDayForecast, setFiveDayForecast] = useState({});
    const [uvIndex, setUvIndex] = useState({});

    const fetchForecast = async () => {
        try {
            const res = await axios.get("api/weather");

            setForecast(res.data);
        } catch (error) {
            console.log("Error fetching forecast data", error.message);
        }
    };

    const fetchAirQuality = async () => {
        try {
            const res = await axios.get("api/pollution");
            console.log(res.data);
            setAirQuality(res.data);
        } catch (error) {
            console.log("Error fetching air quality data", error.message);
        }
    };

    const fetchFiveDayForecast = async () => {
        try {
            const res = await axios.get("api/fiveday");
            console.log(res.data);
            setFiveDayForecast(res.data);
        } catch (error) {
            console.log("Error fetching five day forecast data", error.message);
        }
    };

    const fetchUVIndex = async () => {
        try {
            const res = await axios.get("api/uv");
            
            setUvIndex(res.data);
        } catch (error) {
            console.log("Error fetching UV index data", error.message);
        }
    };

    useEffect(() => {
        fetchForecast();
        fetchAirQuality();
        fetchFiveDayForecast();
        fetchUVIndex();
    }, []);

    return (
        <GlobalContext.Provider 
            value= {{
                forecast,
                airQuality,
                fiveDayForecast,
                uvIndex,
            }} >
            <GlobalContextUpdate.Provider>{children}</GlobalContextUpdate.Provider>
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);