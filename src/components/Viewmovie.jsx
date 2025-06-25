import React from 'react'
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'

const Viewmovie = () => {
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        View Movies
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Movie Name</TableCell>
              <TableCell>Director</TableCell>
              <TableCell>Lead Actors</TableCell>
              <TableCell>Year of Release</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Inception</TableCell>
              <TableCell>Christopher Nolan</TableCell>
              <TableCell>Leonardo DiCaprio, Joseph Gordon-Levitt</TableCell>
              <TableCell>2010</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>The Dark Knight</TableCell>
              <TableCell>Christopher Nolan</TableCell>
              <TableCell>Christian Bale, Heath Ledger</TableCell>
              <TableCell>2008</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Interstellar</TableCell>
              <TableCell>Christopher Nolan</TableCell>
              <TableCell>Matthew McConaughey, Anne Hathaway</TableCell>
              <TableCell>2014</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Viewmovie