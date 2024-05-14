'use client'

import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';


export default function DarkMode() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <ActionIcon
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      variant="default"
      size="xl"
      aria-label="Toggle color scheme"
    >
    
      {
        computedColorScheme === 'light' ? (<IconMoon />) : ( <IconSun />)
      }
    </ActionIcon>
  );
}
