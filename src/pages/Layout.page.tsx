import { ActionIcon, AppShell, Box, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { HeaderSimple } from '@/components/Header/Header';
import { NavbarSimple } from '@/components/Sidebar/SidebarSimple';
import Asidebar from '@/components/Aside/Asidebar';
import Home from './Home';

const HEADER_HEIGHT = 60;

export function HomePage() {
  const [opened, { toggle }] = useDisclosure();
  const [openedAside, { toggle: toggleAside }] = useDisclosure(true);

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
      <AppShell.Header py="lg">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <HeaderSimple />
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <NavbarSimple />
      </AppShell.Navbar>

      <AppShell.Main>
        <Box
          style={{
            position: 'fixed',
            width: 500,
            height: '90%',
            right: 10,
            bottom: 0,
          }}
        >
          <Box style={{ position: 'relative', display: 'flex', flex: 1, height: '100%' }}>
            <ActionIcon
              variant="subtle"
              style={{
                position: 'absolute',
                top: '50%',
                left: '-15px',
                transform: 'translateY(-50%)',
              }}
              onClick={toggleAside}
            >
              {openedAside ? (
                <IconChevronLeft style={{ width: '100%', height: '100%' }} stroke={1.5} />
              ) : (
                <IconChevronRight style={{ width: '100%', height: '100%' }} stroke={1.5} />
              )}
            </ActionIcon>
            <Box>{openedAside && <Asidebar />}</Box>
          </Box>
        </Box>
        <Box
          style={{ position: 'relative', display: 'flex', flex: 1, height: '90%', width: '65%' }}
          pt={20}
          px={20}
        >
          <Home />
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}
