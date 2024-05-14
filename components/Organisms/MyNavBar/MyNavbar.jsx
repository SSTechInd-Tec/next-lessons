'use client'

import DarkMode from '@/components/Atoms/DarkMode/DarkMode';
import { AppShell, Avatar, Burger, Group, Skeleton, Title, Box, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './style.module.css'

export default function MyNavBar({ children }) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(false);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
          <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <Avatar size={50} src='/profile/pic.png'/> 
            <Title ml={-1000} size={20}>My Web Site</Title>

            <Group ml="xl" gap={0} visibleFrom="sm">
                <Button component='a' href='/' color='black' variant='transparent' className={classes.control}>Home</Button>
                <Button component='a' href='/about' color='black' variant='transparent'  className={classes.control}>About</Button>
                <Button component='a' href='/profile/Stark' color='black' variant='transparent'  className={classes.control}>Profile</Button>
                <Button component='a' href='/contact' color='black' variant='transparent'  className={classes.control}>Contacts</Button>
            </Group>
          </Group>

          {/* <Box style={{display: 'flex', flexDirection: 'row-reverse'}}>
            <DarkMode />
          </Box> */}
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Button component='a' href='/' color='black' variant='transparent' className={classes.control}>Home</Button>
        <Button component='a' href='/about' color='black' variant='transparent'  className={classes.control}>About</Button>
        <Button component='a' href='/profile/Stark' color='black' variant='transparent'  className={classes.control}>Profile</Button>
        <Button component='a' href='/contact' color='black' variant='transparent'  className={classes.control}>Contacts</Button>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
