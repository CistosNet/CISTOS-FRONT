import React, { useState } from 'react';
import { Container, Box, Typography, CircularProgress, Alert } from '@mui/material';
import ImageUploader from '../components/ImageUploader';
import ResultsDisplay from '../components/ResultsDisplay';
import ProcessSteps from '../components/ProcessSteps';

const AnalysisPage = () => {
  const [image, setImage] = useState(null);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageUpload = (file) => {
    setImage(file);
    setResults(null);
    setError(null);
  };

  const analyzeImage = async () => {
    if (!image) return;
    
    setLoading(true);
    try {
      // Simulação de chamada à API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Resultados simulados
      const mockResults = {
        count: 24,
        classification: {
          primordial: 5,
          primary: 8,
          secondary: 7,
          antral: 4
        },
        segmentedImage: 'data:image/png;base64,...', // Imagem segmentada em base64
        confidence: 0.92
      };
      
      setResults(mockResults);
    } catch (err) {
      setError('Erro ao processar a imagem. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Análise de Folículos
        </Typography>
        
        <ProcessSteps activeStep={image ? (results ? 2 : 1) : 0} />
        
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}
        
        {!results ? (
          <>
            <ImageUploader onImageUpload={handleImageUpload} />
            {image && (
              <Box sx={{ mt: 3, textAlign: 'center' }}>
                <button 
                  onClick={analyzeImage}
                  disabled={loading}
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#1976d2',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '16px'
                  }}
                >
                  {loading ? (
                    <>
                      <CircularProgress size={20} style={{ color: 'white', marginRight: '10px' }} />
                      Processando...
                    </>
                  ) : 'Analisar Imagem'}
                </button>
              </Box>
            )}
          </>
        ) : (
          <ResultsDisplay image={image} results={results} />
        )}
      </Box>
    </Container>
  );
};

export default AnalysisPage;