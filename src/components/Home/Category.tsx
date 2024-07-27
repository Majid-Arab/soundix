import { Card, Avatar, Text, Group, Flex } from '@mantine/core';
import classes from './Category.module.css';

const avatars = [
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
];

export function Category() {
  return (
    <Flex className={classes.inner} justify="center" align="center" gap={30} pt={60}>
      <Card withBorder radius="md" p={20} className={classes.card} maw={500}>
        <Group wrap="nowrap" gap={0}>
          <Avatar.Group spacing="sm">
            <Avatar src={avatars[0]} radius="xl" />
            <Avatar src={avatars[1]} radius="xl" />
            <Avatar src={avatars[2]} radius="xl" />
          </Avatar.Group>

          <div className={classes.body}>
            <Text className={classes.title} mt="xs" mb="md">
              Popular top 10 brands
            </Text>
            <Text fw={700} size="xs">
              5,900+ Orders & Review
            </Text>
          </div>
        </Group>
      </Card>
      <Card withBorder radius="md" p={20} className={classes.card} maw={500}>
        <Group wrap="nowrap" gap={0}>
          <Avatar.Group spacing="sm">
            <Avatar src={avatars[0]} radius="xl" />
            <Avatar src={avatars[1]} radius="xl" />
            <Avatar src={avatars[2]} radius="xl" />
          </Avatar.Group>

          <div className={classes.body}>
            <Text className={classes.title} mt="xs" mb="md">
              Popular top 10 brands
            </Text>
            <Text fw={700} size="xs">
              5,900+ Orders & Review
            </Text>
          </div>
        </Group>
      </Card>
    </Flex>
  );
}
