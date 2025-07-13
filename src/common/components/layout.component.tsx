import React from 'react';
import { Box } from '@mui/material';
// @ts-ignore
import packageJson from '../../../package.json';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    {children}
    <Box
      sx={{
        position: 'fixed',
        right: 8,
        bottom: 8,
        bgcolor: 'rgba(255,255,255,0.7)',
        color: 'text.secondary',
        px: 1.5,
        py: 0.5,
        borderRadius: 2,
        fontSize: 12,
        zIndex: 9999,
        boxShadow: 1,
      }}
      aria-label="Version"
    >
      v{packageJson.version}
    </Box>
  </>
);
