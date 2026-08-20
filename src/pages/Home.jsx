// import React, { useState } from 'react';
// import SearchBar from '../components/SearchBar';
// import { Box, Typography } from '@mui/material';

// function Home() {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = () => {
//     console.log("Searching for:", searchTerm);
//   };

//   return (
//     <Box 
//       sx={{ 
//         display: 'flex', 
//         flexDirection: 'column', 
//         alignItems: 'center', 
//         justifyContent: 'center', 
//         mt: 8, 
//         textAlign: 'center',
//         px: 2
//       }}
//     >
//       <Typography variant="h3" component="h1" gutterBottom fontWeight="bold" color="primary">
//         Travel Explorer
//       </Typography>
      
//       <Typography variant="subtitle1" color="text.secondary" gutterBottom sx={{ mb: 4 }}>
//         Discover countries, weather, and details across the globe.
//       </Typography>

//       <Box sx={{ width: '100%', maxWidth: '600px' }}>
//         <SearchBar 
//           searchTerm={searchTerm} 
//           setSearchTerm={setSearchTerm} 
//           onSearch={handleSearch} 
//         />
//       </Box>
//     </Box>
//   );
// }

// export default Home;




import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Country from './Country'; 
import { getCountryByName } from '../services/countriesApi'; 
import { Box, Typography } from '@mui/material';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [countryData, setCountryData] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    try {
      setLoading(true);
      setError(null);
      setCountryData(null);

      
      const data = await getCountryByName(searchTerm);
      
      
      if (data && data.length > 0) {
        setCountryData(data[0]);
      } else {
        setError('Country not found');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        mt: 8, 
        textAlign: 'center', 
        px: 2 
      }}
    >
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
        Travel Explorer
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Discover countries, weather, and details across the globe.
      </Typography>

      
      <SearchBar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        onSearch={handleSearch} 
      />

      
      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}

      
      <Country countryData={countryData} />
    </Box>
  );
}

export default Home;