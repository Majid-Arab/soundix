import { emotionTransform, MantineEmotionProvider } from '@mantine/emotion';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import '@mantine/core/styles.css';
import './output.css';

export default function App() {
  return (
    <MantineProvider stylesTransform={emotionTransform}>
      <MantineEmotionProvider>
        <Router />
      </MantineEmotionProvider>
    </MantineProvider>
  );
}
