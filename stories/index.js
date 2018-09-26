import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import backgrounds from "@storybook/addon-backgrounds";
import 'storybook-addon-styled-component-theme/dist/register';
import Button from '../components/Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator((story, context) => withInfo('Testing out info decorator yo')(story)(context))
  .addDecorator(backgrounds([
    { name: "plain", value: "#ffffff", default: true},
    { name: "twitter", value: "#00aced"},
    { name: "facebook", value: "#3b5998" }]
  ))
  .add('with text', withNotes('A very simple component yo')(() => (
    <Button text={text('Label', 'Button textk')} onClick={action('clicked')} disabled={boolean('Disabled', false)} />
  )))
  .add('with some emoji', () => (
    <Button text="meow" />
  ));


// storiesOf('Button', module)
//   .add('with text',
//     withNotes('test notes addon')(() => <Button text="hi" onClick={action('clicked')} />)
//   )
//   .add('with some emoji', () => (
//     <Button text="meow" />
//   ));

// storiesOf('Component', module)
//   .addDecorator((story, context) => withInfo('common info')(story)(context))
//   .add('simple info',
//     withInfo({
//       styles: {
//         header: {
//           h1: {
//             color: 'red',
//           }
//         }
//       },
//       text: 'String or React Element with docs about my component', // Warning! This option's name will be likely renamed to "summary" in 3.3 release. Follow this PR #1501 for details
//       // other possible options see in Global options section below
//     })(() =>
//       <Button text="hi" onClick={action('clicked')} />
//     )
//   )
