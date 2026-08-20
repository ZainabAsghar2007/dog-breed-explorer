import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';

function Country({ countryData }) {
  
  if (!countryData) {
    return null;
  }

  return (
    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', width: '100%' }}>
      <Card sx={{ maxWidth: 400, width: '100%', boxShadow: 3, borderRadius: 2 }}>
      
        {countryData.flags && (
          <CardMedia
            component="img"
            height="200"
            image={countryData.flags.svg || countryData.flags.png}
            alt={countryData.name?.common || 'Country Flag'}
          />
        )}
        
        <CardContent>
          
          <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
            {countryData.name?.common}
          </Typography>

          
          <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
            <strong>Capital:</strong> {countryData.capital ? countryData.capital[0] : 'N/A'}
          </Typography>

          
          <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
            <strong>Region:</strong> {countryData.region || 'N/A'}
          </Typography>

          
          <Typography variant="body1" color="text.secondary">
            <strong>Population:</strong> {countryData.population ? countryData.population.toLocaleString() : 'N/A'}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Country;