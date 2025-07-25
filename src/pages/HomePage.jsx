import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Typography, Button, Grid, Paper } from '@mui/material';
import ScienceIcon from '@mui/icons-material/Science';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import DescriptionIcon from '@mui/icons-material/Description';

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Bem-vindo ao CistosNet
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Sistema Avançado de Classificação, Segmentação e Contagem de Folículos
        </Typography>
        
        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/analyze"
          sx={{ mt: 3, mb: 6 }}
          startIcon={<ScienceIcon />}
        >
          Iniciar Análise
        </Button>
        
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <ImageSearchIcon fontSize="large" sx={{ mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Análise de Imagens
              </Typography>
              <Typography>
                Carregue imagens de folículos e obtenha análises precisas de classificação e contagem.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <ScienceIcon fontSize="large" sx={{ mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Processamento Avançado
              </Typography>
              <Typography>
                Utilizamos algoritmos de IA para segmentação precisa e classificação de folículos.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <DescriptionIcon fontSize="large" sx={{ mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Documentação Completa
              </Typography>
              <Typography>
                Acesse nossa documentação para entender como utilizar todas as funcionalidades.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;