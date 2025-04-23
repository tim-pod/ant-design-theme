import React from 'react';
import ButtonsContent from './buttons';
import TypographyContent from './typography';
import InputContent from './input';

const components = [
  {
    category: 'general',
    key: 'button',
    title: 'Button',
    description: 'Buttons allow users to take actions and make choices with a single tap. Buttons communicate actions that users can take.',
    guidelines: [
      'Use primary buttons for the main action in a section or page.',
      'Limit the number of primary buttons on a page to avoid overwhelming users.',
      'Use different button types to create visual hierarchy.',
      'Provide clear and concise labels for buttons.',
      'Disable buttons when actions are not available.'
    ],
    content: <ButtonsContent />,
  },
  {
    category: 'general',
    key: 'typography',
    title: 'Typography',
    description: 'Typography establishes a visual hierarchy and ensures readability. It helps guide users through the interface by creating patterns and consistency.',
    guidelines: [
      'Use appropriate heading levels to create a clear document structure.',
      'Maintain sufficient contrast between text and background colors.',
      'Consider line length and line height for optimal readability.',
      'Use text styles consistently throughout the application.'
    ],
    content: <TypographyContent />,
  },
  {
    category: 'data-entry',
    key: 'input',
    title: 'Input',
    description: 'Input fields allow users to enter and edit text. They typically appear in forms and dialogs.',
    guidelines: [
      'Always include clear labels for input fields.',
      'Provide validation feedback for user input.',
      'Use appropriate input types for different data formats.',
      'Consider using placeholder text to provide hints.',
      'Use disabled state when input is not available.'
    ],
    content: <InputContent />,
  },
];

export default components;