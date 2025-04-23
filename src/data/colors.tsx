import React from 'react';
import ColorCard from '../components/common/ColorCard';
import colors from '../theme/colors';

const colorData = [
  {
    key: 'primary',
    title: 'Primary Colors',
    description: 'Primary colors are the main colors used throughout the application. They represent the brand identity and are used for primary actions, key UI elements, and to create visual consistency.',
    content: (
      <>
        <ColorCard
          title="Primary Red"
          colors={[
            { name: 'Red', value: colors.primary.red },
            { name: 'Hover', value: colors.additional.hover },
          ]}
        />
        
        <ColorCard
          title="Primary Neutrals"
          colors={[
            { name: 'Black', value: colors.primary.black, textColor: '#FFFFFF' },
            { name: 'White', value: colors.primary.white },
          ]}
        />
        
        <ColorCard
          title="Additional Colors"
          colors={[
            { name: 'Pastel', value: colors.additional.pastel },
            { name: 'Outline', value: '#828282' },
            { name: 'Tooltip', value: colors.additional.tooltipText, textColor: '#FFFFFF' },
          ]}
        />
      </>
    ),
  },
  {
    key: 'secondary',
    title: 'Secondary Colors',
    description: 'Secondary colors complement the primary colors and are used to create contrast, highlight information, or indicate different states or actions.',
    content: (
      <>
        <ColorCard
          title="Secondary Warm Colors"
          colors={[
            { name: 'Yellow', value: colors.secondaryWarm.yellow },
            { name: 'Orange', value: colors.secondaryWarm.orange, textColor: '#FFFFFF' },
            { name: 'Red', value: colors.secondaryWarm.red, textColor: '#FFFFFF' },
          ]}
        />
        
        <ColorCard
          title="Secondary Cool Colors"
          colors={[
            { name: 'Turquoise', value: colors.secondaryCool.turquoise },
            { name: 'Blue', value: colors.secondaryCool.blue, textColor: '#FFFFFF' },
            { name: 'Navy', value: colors.secondaryCool.navy, textColor: '#FFFFFF' },
          ]}
        />
      </>
    ),
  },
  {
    key: 'neutrals',
    title: 'Neutral Colors',
    description: 'Neutral colors are used for text, backgrounds, borders, and other UI elements where the focus should be on content rather than color.',
    content: (
      <ColorCard
        title="Neutrals"
        colors={[
          { name: '100', value: colors.neutrals[100] },
          { name: '200', value: colors.neutrals[200] },
          { name: '300', value: colors.neutrals[300] },
          { name: '400', value: colors.neutrals[400] },
          { name: '500', value: colors.neutrals[500] },
          { name: '600', value: colors.neutrals[600], textColor: '#FFFFFF' },
          { name: '700', value: colors.neutrals[700], textColor: '#FFFFFF' },
          { name: '800', value: colors.neutrals[800], textColor: '#FFFFFF' },
          { name: '900', value: colors.neutrals[900], textColor: '#FFFFFF' },
        ]}
      />
    ),
  },
  {
    key: 'status',
    title: 'Status Colors',
    description: 'Status colors are used to indicate different states, feedback, or notifications. They help users understand the context and importance of information.',
    content: (
      <>
        <ColorCard
          title="Green (Success)"
          colors={[
            { name: '50', value: colors.green[50] },
            { name: '100', value: colors.green[100] },
            { name: '200', value: colors.green[200] },
            { name: '300', value: colors.green[300], textColor: '#FFFFFF' },
            { name: '400', value: colors.green[400], textColor: '#FFFFFF' },
          ]}
        />
        
        <ColorCard
          title="Raspberry Red (Error)"
          colors={[
            { name: '50', value: colors.raspberryRed[50] },
            { name: '100', value: colors.raspberryRed[100] },
            { name: '200', value: colors.raspberryRed[200] },
            { name: '300', value: colors.raspberryRed[300], textColor: '#FFFFFF' },
            { name: '400', value: colors.raspberryRed[400], textColor: '#FFFFFF' },
          ]}
        />
        
        <ColorCard
          title="Bright Yellow (Warning)"
          colors={[
            { name: '50', value: colors.brightYellow[50] },
            { name: '100', value: colors.brightYellow[100] },
            { name: '200', value: colors.brightYellow[200] },
            { name: '300', value: colors.brightYellow[300] },
            { name: '400', value: colors.brightYellow[400] },
          ]}
        />
        
        <ColorCard
          title="Navy (Info)"
          colors={[
            { name: '50', value: colors.navy[50] },
            { name: '100', value: colors.navy[100] },
            { name: '200', value: colors.navy[200] },
            { name: '300', value: colors.navy[300], textColor: '#FFFFFF' },
            { name: '400', value: colors.navy[400], textColor: '#FFFFFF' },
          ]}
        />
      </>
    ),
  },
];

export default colorData;