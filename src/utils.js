const API_URL = `https://kpmdj7u7dd.execute-api.ap-northeast-2.amazonaws.com`;
export const loadImage = () => {
  fetch(`${API_URL}/recurit/makerList?page=1`)
    .then(res => res.json())
    .then(json => console.log(json));
};
