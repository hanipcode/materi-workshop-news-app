export function getNews() {
  let url = "https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=b8e624aaad324e60be0b7e72f926ed4c"
  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data;
    })
}
