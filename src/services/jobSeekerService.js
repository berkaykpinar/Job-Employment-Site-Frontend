import axios from "axios";

export default class JobSeekerService {
  getJobSeekers() {
    return axios.get("http://localhost:8080/api/jobseekers/getall");
  }
  getJobSeekerById(userId) {
    return axios.get(
      `http://localhost:8080/api/jobseekers/getByUserId?userId=${userId}`
    );
  }
  addFavorites(favorite) {
    return axios.post("http://localhost:8080/api/favorites/add", favorite);
  }
  getFavorites(userId) {
    return axios.get(
      `http://localhost:8080/api/favorites/getAll?userId=${userId}`
    );
  }

  getResumeById(userId) {
    {
      return axios.get(
        `http://localhost:8080/resumes/getAllById?jobSeekerId=${userId}`
      );
    }
  }

  getResumeByIdAndResumeId(userId, resumeId) {
    return axios.get(
      `http://localhost:8080/resumes/getResumeBySekerIdandResumeId?resumeId=${resumeId}&seekerId=${userId}`
    );
  }

  getEducation(resumeId) {
    return axios.get(
      `http://localhost:8080/educations/getByResumeId?resumeId=${resumeId}`
    );
  }

  getExperiences(resumeId) {
    return axios.get(
      `http://localhost:8080/experiences/getByResumeId?resumeId=${resumeId}`
    );
  }
  getSkills(resumeId) {
    return axios.get(
      `http://localhost:8080/skills/getByResumeId?resumeId=${resumeId}`
    );
  }
  getLanguages(resumeId) {
    return axios.get(
      `http://localhost:8080/languages/getByResumeId?resumeId=${resumeId}`
    );
  }

  addResume(resume) {
    return axios.post("http://localhost:8080/resumes/add", resume);
  }
  addEducation(educations) {
    return axios.post("http://localhost:8080/educations/add", educations);
  }

  addExperiences(experiences) {
    return axios.post("http://localhost:8080/experiences/add", experiences);
  }

  addSkills(skills) {
    return axios.post("http://localhost:8080/skills/add", skills);
  }

  addLanguage(language) {
    return axios.post("http://localhost:8080/languages/add", language);
  }
}
