import axios from "axios";

export default class PersonnelService {
  getJobSeekers() {
    return axios.get("http://localhost:8080/api/personnel/getall");
  }
  addPosition(message) {
    return axios.post("http://localhost:8080/api/positions/add ", message);
  }

  getAwaitingAds() {
    return axios.get(
      "http://localhost:8080/api/jobAdvertisement/listByIsApproved"
    );
  }

  updateStatus(id, status) {
    return axios.post(
      `http://localhost:8080/api/jobAdvertisement/updateStatus?adId=${id}&status=${status}`
    );
  }
}
