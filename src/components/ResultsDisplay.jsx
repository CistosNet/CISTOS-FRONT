import React from 'react';
import { Box, Typography, Grid, Paper, Divider } from '@mui/material';
import FollicleChart from './FollicleChart';

const ResultsDisplay = ({ image, results }) => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Resultados da Análise
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Imagem Original
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={URL.createObjectURL(image)}
                alt="Original"
                style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }}
              />
            </Box>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Imagem Segmentada
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={results.segmentedImage}
                alt="Segmentada"
                style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }}
              />
            </Box>
          </Paper>
        </Grid>
        
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Estatísticas de Folículos
            </Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1">
                    Total de Folículos Detectados: <strong>{results.count}</strong>
                  </Typography>
                  <Typography variant="subtitle1">
                    Confiança Média: <strong>{(results.confidence * 100).toFixed(1)}%</strong>
                  </Typography>
                </Box>
                
                <Divider sx={{ my: 2 }} />
                
                <Typography variant="subtitle1" gutterBottom>
                  Distribuição por Classificação:
                </Typography>
                <ul style={{ paddingLeft: '20px' }}>
                  <li>Primordial: {results.classification.primordial}</li>
                  <li>Primário: {results.classification.primary}</li>
                  <li>Secundário: {results.classification.secondary}</li>
                  <li>Antral: {results.classification.antral}</li>
                </ul>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <FollicleChart data={results.classification} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResultsDisplay;