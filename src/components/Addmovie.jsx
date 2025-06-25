import React from 'react'
import { TextField, Typography } from '@mui/material';

const Addmovie = () => {
  return (
    <div>
        <br /><br />
        <Typography variant="h4" component="h1" gutterBottom>
            Add Movie
        </Typography>
        <br /><br />
        <TextField id="outlined-basic" label="Movie Name" variant="outlined" style={{ color: 'rgba(121, 124, 132, 0.5)'}}/>
        <br /><br />
        <TextField id="outlined-basic" label="Director Name" variant="outlined" />
        <br /><br />
        <TextField id="outlined-basic" label="Lead Actors" variant="outlined" />
        <br /><br />
        <TextField id="outlined-basic" label="Year of Release" variant="outlined" type='number' defaultValue={2000} />

    </div>
  );
}

export default Addmovie