import { ActionIcon, AppShell, Box, Burger, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { HeaderSimple } from '@/components/Header/Header';
import { NavbarSimple } from '@/components/Sidebar/SidebarSimple';

const HEADER_HEIGHT = 60;
export function HomePage() {
  const [opened, { toggle }] = useDisclosure();
  const [openedAside, { toggle: toggleAside }] = useDisclosure();

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
      padding="md"
    >
      <AppShell.Header p="lg">
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
            width: 300,
            height: '100%',
            right: 0,
            top: HEADER_HEIGHT,
          }}
        >
          <Box style={{ position: 'relative', display: 'flex', flex: 1, height: '100%' }}>
            <ActionIcon
              variant="subtle"
              style={{ position: 'absolute', top: '50%', left: '-15px' }}
              onClick={toggleAside}
            >
              {openedAside ? (
                <IconChevronLeft style={{ width: '100%', height: '100%' }} stroke={1.5} />
              ) : (
                <IconChevronRight style={{ width: '100%', height: '100%' }} stroke={1.5} />
              )}
            </ActionIcon>
            <Title>Aside</Title>
          </Box>
        </Box>
        <Box style={{ position: 'relative', display: 'flex', flex: 1, height: '100%' }}>Main</Box>
      </AppShell.Main>
    </AppShell>
  );
}
