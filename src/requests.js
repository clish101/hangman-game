// const getPuzzle = (wordCount) =>
//   new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', (e) => {
//       if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText);
//         resolve(data.puzzle);
//       } else if (e.target.readyState === 4) {
//         reject('An error has occured');
//       }
//     });

//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//     request.send();
//   });
const getPuzzle = (wordCount) => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Something wrong happened');
      }
    })
    .then((data) => {
      return data.puzzle;
    });
};

// const countryDetails = (countryCode) =>
//   new Promise((resolve, reject) => {
//     const requestCountry = new XMLHttpRequest();

//     requestCountry.addEventListener('readystatechange', (e) => {
//       if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText);
//         const country = data.find(
//           (country) => country.alpha2Code === countryCode.toUpperCase()
//         );
//         resolve(country);
//       } else if (e.target.readyState === 4) {
//         reject('Sorry there was an error accessing that particular country');
//       }
//     });

//     requestCountry.open('GET', 'http://restcountries.eu/rest/v2/all');
//     requestCountry.send();
//   });

const countryDetails = async (countryCode) => {
  const response = await fetch('https://restcountries.eu/rest/v2/all');

  if (response.status === 200) {
    const data = await response.json();
    return data.find((country) => country.alpha2Code === countryCode);
  } else {
    throw new Error('The country was not found');
  }
};

const getLocation = async () => {
  const response = await fetch('https://ipinfo.io/json?token=07f60dea5031dc');
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error('Sorry that location was not found');
  }
};

const getCurrentCountry = async () => {
  const location = await getLocation();
  const country = await countryDetails(location.country);
  return country;
};

export { getPuzzle as default };
