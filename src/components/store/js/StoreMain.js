import { AppBar, Box, Container, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'
import '../../store/scss/storemain.scss'

const StoreMain = () => {
  return (
    <>
    <AppBar position="static" sx={{p:3}}>
        <Toolbar>
          <Typography component="h2" variant="h4">
            Horizon Store
          </Typography>
        </Toolbar>
    </AppBar>

    <Container component="main" maxWidth="xl" style={{ margin:"50px auto" }}>
        <Grid container spacing={4}>
            <Grid item xs={9} sm={6}>
                <Box className="md-event" p={18} textAlign="center">
                    <div className='md-img'>
                        img
                        <img src="#" alt="img" />
                    </div>
                </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Box className="md" p={18}>
                3
                </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Box className="md" p={18}>
                4
                </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Box className="md" p={18}>
                3
                </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Box className="md" p={18}>
                4
                </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Box className="md" p={18}>
                3
                </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Box className="md" p={18}>
                    <div className='md-img'>
                        <img src="#" alt=""/>
                    </div>
                </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Box className="md" p={18}>
                3
                </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Box className="md" p={18}>
                4
                </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Box className="md" p={18}>
                3
                </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Box className="md" p={18}>
                4
                </Box>
            </Grid>
        </Grid> 
    </Container>

    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
      component="footer"
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © Over the Horizon "}
          {/* <Link color="inherit" href="https://your-website.com/">
            Your Website
          </Link>{" "} */}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
    </>
  )
}

export default StoreMain