import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Container, Autocomplete, TextField, Box } from '@mui/material'

export default function practice() {
  const [breeds, setBreeds] = useState([]);
  const navigate = useNavigate();

  useEffect (() => {
    const fetchBreeds = async () => {
        try {
            const res = await fetch('https://dog.ceo/api/breeds/list/all');
            const data = await res.json();
            setBreeds(Object.keys(data.message));
        } catch(err){
            console.error("Error fetching breeds:", err);
        }

    };

        fetchBreeds();
    }, [])

    const handleBreedChange = (event, value) => {
        if(value) {
            navigate(`/breed/${value}`);
        }
    };

  return (
        <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: '#f5f5f5', pb: 4 }}>
            <AppBar position="static" sx={{ mb: 6, bgcolor: '#3da8ea' }}>
                <Toolbar>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    🐶 Dog Breed Explorer
                 </Typography>
                </Toolbar>
            </AppBar>
        

          <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 8 }}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', color: '#333' }}>
              Find Your Favorite Dog Breed
            </Typography>

            <Autocomplete
              options={breeds}
              onChange={handleBreedChange}
              renderInput={(params) => (
                <TextField {...params} label="Search Dog Breed (e.g., hound, retriever)" variant="outlined" />
              )}
              sx={{ bgcolor: 'white', borderRadius: 1 }}
            />
          </Container>
        </Box>

    )
}
