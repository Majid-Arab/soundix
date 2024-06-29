import {
  Autocomplete,
  Group,
  Burger,
  rem,
  Avatar,
  ActionIcon,
  Title,
  Text,
  Box,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBell, IconMessage, IconSearch } from '@tabler/icons-react';
import classes from './Header.module.css';

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <Box>
            <Title>Headphones</Title>
            <Text>from top brands</Text>
          </Box>
        </Group>

        <Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
            visibleFrom="xs"
          />
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            <ActionIcon variant="outline">
              <IconMessage stroke={1} />
            </ActionIcon>
            <ActionIcon variant="outline">
              <IconBell stroke={1} />
            </ActionIcon>
            <Avatar
              radius="xl"
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png"
            />
          </Group>
        </Group>
      </div>
    </header>
  );
}
