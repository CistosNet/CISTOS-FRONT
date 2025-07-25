import React from 'react';
import { Box, Stepper, Step, StepLabel, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SettingsIcon from '@mui/icons-material/Settings';
import TaskIcon from '@mui/icons-material/Task';

const steps = [
  {
    label: 'Upload da Imagem',
    icon: <CloudUploadIcon />
  },
  {
    label: 'Processamento',
    icon: <SettingsIcon />
  },
  {
    label: 'Resultados',
    icon: <TaskIcon />
  }
];

const ProcessSteps = ({ activeStep }) => {
  return (
    <Box sx={{ width: '100%', mb: 4 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel icon={step.icon}>
              <Typography variant="body2" color={index <= activeStep ? 'primary' : 'text.secondary'}>
                {step.label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default ProcessSteps;