const axios = require("axios")

export const getNews = () => {
  const options = {
    method: "GET",
    url: "https://free-news.p.rapidapi.com/v1/search",
    params: { q: "Elon Musk", lang: "en", sources: "cnn" },
    headers: {
      "X-RapidAPI-Host": "free-news.p.rapidapi.com",
      "X-RapidAPI-Key": "21318f1582mshd8fd19dbc5dc160p1014bejsn934429ba8eed",
    },
  }

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data)
    })
    .catch(function (error) {
      console.error(error)
    })
}
