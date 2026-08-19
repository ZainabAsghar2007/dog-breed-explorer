import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { Box, Typography } from '@mui/material';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
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
      <Typography variant="h3" component="h1" gutterBottom fontWeight="bold" color="primary">
        Travel Explorer
      </Typography>
      
      <Typography variant="subtitle1" color="text.secondary" gutterBottom sx={{ mb: 4 }}>
        Discover countries, weather, and details across the globe.
      </Typography>

      <Box sx={{ width: '100%', maxWidth: '600px' }}>
        <SearchBar 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          onSearch={handleSearch} 
        />
      </Box>
    </Box>
  );
}

export default Home;