import { ActionIcon, AppShell, Box, Burger, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

export function HomePage() {
  const [opened, { toggle }] = useDisclosure();
  const [openedAside, { toggle: toggleAside }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      aside={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: openedAside },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>Main</AppShell.Main>
      <AppShell.Aside>
        <Box style={{ position: 'relative', display: 'flex', flex: 1 }}>
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
      </AppShell.Aside>
    </AppShell>
  );
}
