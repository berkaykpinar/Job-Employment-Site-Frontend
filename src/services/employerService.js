import axios from "axios";

export default class EmployerService {
  getEmployers() {
    return axios.get("http://localhost:8080/api/employers/getall");
  }
  getAdvertisementList() {
    return axios.get("http://localhost:8080/api/jobAdvertisement/listByDate");
  }
  getApprovedAds() {
    return axios.get(
      "http://localhost:8080/api/jobAdvertisement/listApprovedAds"
    );
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

  getAdvertisementListByEmployerId(employerId) {
    return axios.get(
      "http://localhost:8080/api/jobAdvertisement/listbyEmployerId?employerId=" +
        employerId
    );
  }
  getApplicationsByAdId(adId) {
    return axios.get(
      "http://localhost:8080/applications/getApplicationsByAdId?advertisementId=" +
        adId
    );
  }
  getAuthService(auth) {
    return axios.get(
      `http://localhost:8080/api/users/auth?email=${auth.email}&password=${auth.password}`
    );
  }
}
