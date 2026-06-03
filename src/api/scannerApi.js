import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://br30marketscanner-com-backend.onrender.com";

const API = axios.create({
  baseURL: API_BASE_URL.replace(/\/api\/?$/, ""),
  timeout: 30000,
});

// 🔥 Auto Add JWT Token

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("br30ScannerToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const getScannerData = async (type = "all", market = "future-stock") => {
  const res = await API.get("/api/scanner", {
    params: {
      type,
      market,
      t: Date.now(),
    },
  });

  return res.data;
};

export const getMarketSummary = async (market = "future-stock") => {
  const res = await API.get("/api/scanner/summary", {
    params: {
      market,
      t: Date.now(),
    },
  });

  return res.data;
};

export const reloadInstruments = async (market = "future-stock") => {
  const res = await API.get("/api/scanner/reload-instruments", {
    params: {
      market,
      t: Date.now(),
    },
  });

  return res.data;
};

export const getHeatmapData = async (market = "future-stock") => {
  const res = await API.get("/api/scanner", {
    params: {
      type: "all",
      market,
      t: Date.now(),
    },
  });

  return res.data;
};

export default API;
