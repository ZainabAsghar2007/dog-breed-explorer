import React from 'react';
import { TextField, Button, Box } from '@mui/material';

function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
  return (
    <Box 
      component="form" 
      onSubmit={(e) => { e.preventDefault(); if (onSearch) onSearch(); }}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, width: '100%' }}
    >
      <TextField
        label="Search Country"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Country..."
        fullWidth
        sx={{ maxWidth: '400px', backgroundColor: '#fff', borderRadius: '4px' }}
      />
      <Button 
        type="submit" 
        variant="contained" 
        size="large"
        sx={{ height: '56px', px: 4, fontWeight: 'bold' }}
      >
        SEARCH
      </Button>
    </Box>
  );
}

export default SearchBar;