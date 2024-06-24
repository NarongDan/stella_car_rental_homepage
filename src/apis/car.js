import axios from "../config/axios";

const carApi = {};

carApi.getAllCarsAvailable = (data) =>
  axios.get("cars/available", { params: data });

carApi.getAllCarModels = () => axios.get("/cars/carModels");
carApi.getAllCarType = () => axios.get("/cars/carTypes");
carApi.getCarModelByCarTypeId = (carTypeId) =>
  axios.get(`cars/carModels/${carTypeId}`);

carApi.getBranches = () => axios.get("/branches");

export default carApi;
