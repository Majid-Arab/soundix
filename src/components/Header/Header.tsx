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
import { IconBell, IconMessage, IconRulerMeasure, IconSearch } from '@tabler/icons-react';
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
            <Text>From top brands</Text>
          </Box>
        </Group>

        <Group gap={20}>
          <Autocomplete
            className={classes.search}
            placeholder="Search Product"
            leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            rightSection={
              <IconRulerMeasure style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
            }
            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
            visibleFrom="xs"
            size="md"
          />
          <Group gap={20} className={classes.links} visibleFrom="sm">
            <ActionIcon variant="light" p={5} size="lg">
              <IconMessage stroke={1} />
            </ActionIcon>
            <ActionIcon variant="light" p={5} size="lg">
              <IconBell stroke={1} />
            </ActionIcon>
            <Avatar
              radius="xl"
              size={45}
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png"
            />
          </Group>
        </Group>
      </div>
    </header>
  );
}
