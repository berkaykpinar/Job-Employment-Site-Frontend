import axios from "axios";

export default class EmployerService {
  getEmployers() {
    return axios.get("http://localhost:8080/api/employers/getall");
  }
  getAdvertisementList() {
    return axios.get("http://localhost:8080/api/jobAdvertisement/listByDate");
  }
  getByAdvertisementId(adId) {
    console.log(adId);
    return axios.get(
      "http://localhost:8080/api/jobAdvertisement//getByAdId?adId=" + adId
    );
  }

  addAddvertisement(advertisement) {
    return axios
      .post("http://localhost:8080/api/jobAdvertisement/add", advertisement)
      .catch((err) => console.log(err));
  }
}
