export async function getCountryByName(countryName) {
  const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
  
  if (!response.ok) {
    throw new Error('Country not found');
  }
  
  const data = await response.json();
  return data;
}


// export async function getCountryByName(countryName)
// {
    
//     const response = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(countryName)}?fullText=true`);

//     if(!response.ok)
//     {
//         throw new Error('Failed to fetch country');
//     }

//     const data = await response.json();
//     return data;
// }


// export async function fetchCountryByName(countryName) {
//   const response = await fetch(`/api/v3.1/name/${encodeURIComponent(countryName)}?fullText=true`);
  
//   if (!response.ok) {
//     throw new Error('Failed to fetch country');
//   }

//   const data = await response.json();
//   const country = data[0];

//   return {
//     name: {
//       common: country.name?.common || countryName,
//       official: country.name?.official || countryName
//     },
//     flags: {
//       svg: country.flags?.svg || '',
//       png: country.flags?.png || ''
//     },
//     capital: country.capital || ['N/A'],
//     region: country.region || 'N/A',
//     population: country.population || 'N/A',
//     latlng: country.latlng || [0, 0],
//     currencies: country.currencies || {},
//     languages: country.languages || {}
//   };
// }