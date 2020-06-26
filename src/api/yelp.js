import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers : {
      Authorization: 'Bearer htWkcZBj2Qdxh-uTiVip7180RTRSy51aZE-9BnsA4xKKuzINmucm3d0xyCpUTNu0w4gBmtyqFzGp96mq_uOR6gthSmmYc-UYwp_iMtw7X4A6HqFN5FsGQcSuRXJqXnYx'
  }
});