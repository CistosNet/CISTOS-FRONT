import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Typography, Paper } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const ImageUploader = ({ onImageUpload }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    maxFiles: 1,
    onDrop: acceptedFiles => {
      if (acceptedFiles.length > 0) {
        onImageUpload(acceptedFiles[0]);
      }
    }
  });

  return (
    <Paper variant="outlined" sx={{ p: 3, borderStyle: 'dashed' }}>
      <div {...getRootProps()} style={{ cursor: 'pointer' }}>
        <input {...getInputProps()} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 4,
            border: '2px dashed #ccc',
            borderRadius: '4px',
            backgroundColor: isDragActive ? '#f0f0f0' : 'transparent',
            transition: 'background-color 0.3s'
          }}
        >
          <CloudUploadIcon fontSize="large" sx={{ mb: 2, color: 'primary.main' }} />
          <Typography variant="h6" gutterBottom>
            {isDragActive ? 'Solte a imagem aqui...' : 'Arraste e solte uma imagem aqui, ou clique para selecionar'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Formatos suportados: JPEG, PNG, TIFF
          </Typography>
        </Box>
      </div>
    </Paper>
  );
};

export default ImageUploader;