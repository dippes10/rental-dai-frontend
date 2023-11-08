import React from 'react';
import Button from '@mui/material/Button';

interface RentalButtonProps {
  onClick: () => void;
  label: string;
}

const RentalButton: React.FC<RentalButtonProps> = ({ onClick, label }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      onClick={onClick}
      style={{ borderRadius: '8px' }}
    >
      {label}
    </Button>
  );
};

export default RentalButton;
