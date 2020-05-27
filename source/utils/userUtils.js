/* eslint-disable no-undef */
const API_KEY = 'AIzaSyA7fFCcBVgevX85DTV-wUPPi4jkLVsfWe4';

const getDirections = (origin, destination) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https:/maps.googleapis.com/maps/api/geocode/json?latlng=${origin},${destination}&key=${API_KEY}`
    )
      .then(resp => resp.json())
      .then(address => {
        // console.log(address.results[0].formatted_address, "util function")
        resolve(address.results[0].formatted_address);
      })
      .catch(e => {
        reject(e);
      });
  });
};

export default getDirections;
