import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardMedia, CardContent, CircularProgress, Box, Button } from '@mui/material';

export default function BreedGallery() {
  const { breedName } = useParams();
  const navigate = useNavigate();
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch(`https://dog.ceo/api/breed/${breedName}/images/random/10`);
        const data = await res.json();
        setDogs(data.message);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching breed images:", err);
        setLoading(false);
      }
    }

    fetchImages();
  }, [breedName]);

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: '#f5f5f5', pb: 4 }}>
      <AppBar position="static" sx={{ mb: 4, bgcolor: '#1976d2' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textTransform: 'capitalize' }}>
            🐶 {breedName} Gallery
          </Typography>
          <Button color="inherit" onClick={() => navigate('/')}>
            Back to Home
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={3}>
            {dogs.map((imgUrl, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
                  <CardMedia
                    component="img"
                    height="220"
                    image={imgUrl}
                    alt={breedName}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="subtitle1" color="text.secondary" align="center" sx={{ textTransform: 'capitalize' }}>
                      {breedName}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}