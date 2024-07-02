import { Image, Card, Text, Group, rem, ActionIcon } from '@mantine/core';
import { IconPlus, IconStar } from '@tabler/icons-react';
import classes from './ProductList.module.css';

const images = [
  'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
];

export function ProductList() {
  return (
    <Card radius="md" withBorder padding="xl">
      <Card.Section>
        <Image src={images} height={220} />
      </Card.Section>

      <Group justify="space-between" mt="lg">
        <Text fw={500} fz="md">
          Forde, Norway
        </Text>
      </Group>
      <Text fz="sm" span fw={500} className={classes.price}>
        $397.96
      </Text>

      <Group justify="space-between" mt="md">
        <div>
          <Group gap={5}>
            <IconStar style={{ width: rem(16), height: rem(16) }} />
            <Text fz="xs" fw={500}>
              4.78
            </Text>
          </Group>
        </div>

        <ActionIcon variant="filled" radius="xl" color="#009393">
          <IconPlus stroke={1} />
        </ActionIcon>
      </Group>
    </Card>
  );
}
