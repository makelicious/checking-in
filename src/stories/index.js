import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Button, Input, SecondaryButton } from '../components/Form';
import { ProgressBar } from '../components/Questionnaire';


storiesOf('Primary Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)

storiesOf('Secondary Button', module)
  .add('with text', () => <SecondaryButton onClick={action('clicked')}>Hello Button</SecondaryButton>)


storiesOf('Input field', module)
.add('Basic input', () => <Input />)

storiesOf('Input field', module)
.add('Basic input', () => <Input />)

storiesOf('ProgressBar', module)
.add('No progress', () => <ProgressBar />)
