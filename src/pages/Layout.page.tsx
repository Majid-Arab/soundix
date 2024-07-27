import React, { useEffect } from 'react';
import { ActionIcon, AppShell, Box, Burger, Flex, Group } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { createStyles } from '@mantine/emotion';
import { HeaderSimple } from '@/components/Header/Header';
import { NavbarSimple } from '@/components/Sidebar/SidebarSimple';
import Asidebar from '@/components/Aside/Asidebar';
import Home from './Home';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  actionIcon: {
    position: 'absolute',
    top: '50%',
    left: '-15px',
    transform: 'translateY(-50%)',
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      display: 'none',
    },
  },
  asidebar: {
    backgroundColor: 'white',
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      backgroundColor: 'black',
    },
  },
}));

export function HomePage() {
  const { classes } = useStyles();
  const [opened, { toggle, close }] = useDisclosure();
  const [openedAside, { toggle: toggleAside, close: closeAside }] = useDisclosure(true);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    if (isMobile) {
      closeAside();
    }
  }, [isMobile, closeAside]);

  return (
    <AppShell
      header={{ height: HEADER_HEIGHT }}
      layout="alt"
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      withBorder={false}
    >
      <AppShell.Header p="sm">
        <Flex align="center">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <HeaderSimple />
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <NavbarSimple close={close} />
      </AppShell.Navbar>

      <AppShell.Main>
        {/* <Box
          style={{
            position: 'fixed',
            width: 500,
            height: '90%',
            right: 10,
            bottom: 0,
            backgroundColor: 'white',
          }}
          className={classes.asidebar}
        >
          <Box style={{ position: 'relative', display: 'flex', flex: 1, height: '100%' }}>
            {!isMobile && (
              <ActionIcon variant="subtle" className={classes.actionIcon} onClick={toggleAside}>
                {openedAside ? (
                  <IconChevronLeft style={{ width: '100%', height: '100%' }} stroke={1.5} />
                ) : (
                  <IconChevronRight style={{ width: '100%', height: '100%' }} stroke={1.5} />
                )}
              </ActionIcon>
            )}
            <Box>{openedAside && <Asidebar />}</Box>
          </Box>
        </Box> */}
        <Box style={{ height: '90%', width: '65%', backgroundColor: 'white' }} pt={20} px={20}>
          <Home />
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}
