import axios from "axios";

export const API_BASE_URL = "http://localhost:5454";

let JwtToken = localStorage.getItem("authState");
const Jwt = JwtToken ? JSON.parse(JwtToken) : {};

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: Jwt?.jwt ? `Bearer ${Jwt.jwt}` : undefined,
    "Content-Type": "application/json",
  },
});
