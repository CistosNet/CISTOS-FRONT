import React from 'react';
import { Container, Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const DocumentationPage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Documentação do CistosNet
        </Typography>
        
        <Typography variant="body1" paragraph>
          O CistosNet é um sistema avançado para análise de folículos ovarianos, proporcionando classificação,
          segmentação e contagem automática através de técnicas de inteligência artificial.
        </Typography>
        
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Como Utilizar o Sistema</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ol>
              <li>
                <Typography variant="subtitle1">Upload da Imagem</Typography>
                <Typography variant="body2">
                  Na página de análise, arraste e solte uma imagem ou clique para selecionar um arquivo.
                  Formatos suportados: JPEG, PNG, TIFF.
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle1">Processamento</Typography>
                <Typography variant="body2">
                  Após selecionar a imagem, clique em "Analisar Imagem" para iniciar o processamento.
                  O tempo de análise varia conforme a complexidade da imagem.
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle1">Interpretação dos Resultados</Typography>
                <Typography variant="body2">
                  Os resultados incluem: imagem original, imagem segmentada, contagem total de folículos
                  e distribuição por classificação (primordial, primário, secundário, antral).
                </Typography>
              </li>
            </ol>
          </AccordionDetails>
        </Accordion>
        
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Classificação de Folículos</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" paragraph>
              O sistema classifica os folículos em quatro categorias principais:
            </Typography>
            <ul>
              <li>
                <strong>Primordial:</strong> Folículos pequenos, com um único camada de células granulosas achatadas.
              </li>
              <li>
                <strong>Primário:</strong> Folículos com uma camada completa de células granulosas cuboidais.
              </li>
              <li>
                <strong>Secundário:</strong> Folículos com múltiplas camadas de células granulosas.
              </li>
              <li>
                <strong>Antral:</strong> Folículos com cavidade antral visível.
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Precisão e Limitações</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" paragraph>
              O CistosNet apresenta uma precisão média de 92% em condições ideais. A qualidade da análise pode ser afetada por:
            </Typography>
            <ul>
              <li>Qualidade da imagem (foco, iluminação, resolução)</li>
              <li>Presença de artefatos ou obstruções</li>
              <li>Folículos muito próximos ou sobrepostos</li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
};

export default DocumentationPage;