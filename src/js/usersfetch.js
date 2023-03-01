export default (num, callback) => {
  let url = `https://randomuser.me/api/?results=${num}`;
  let responsePromise = fetch(url);
  let jsonPromise = responsePromise.then(response => {
    return response.json();
  });
  jsonPromise.then(data => {
    callback(data);
  });
};
