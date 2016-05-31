import { introspectionQuery } from 'graphql';

//test request to get che schema
if (!window.fetch) {
  alert(`Your browser does NOT support the fetch api, so you can't use this app.`);
}

const API = {};

API.URL = 'http://localhost:8081';

API.fetch = (request, callback, error) => {
  fetch(API.URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: request
    })
  }).then(function (response) {
    return response.json();
  }).then(function (response) {
    callback(response.data);
  }).catch(function (err) {
    error(err);
  });
};

API.fetchSchema = (callback, error) => API.fetch(introspectionQuery, callback, error);

export default API;