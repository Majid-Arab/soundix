import { useState } from 'react';
import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  ThemeIcon,
  ActionIcon,
  Grid,
} from '@mantine/core';
import { IconHeartFilled, IconMinus, IconPlus } from '@tabler/icons-react';
import image from '../../public/headphone1.png';
import classes from './Product.module.css';

export function Product() {
  const [count, setCount] = useState(0);
  return (
    <Container maw="100%" mah={400} pt={20}>
      <div className={classes.inner}>
        <Image src={image} className={classes.image} />
        <div className={classes.content}>
          <Title className={classes.title}>Beats Studio3 Wireless Headphone</Title>
          <Text c="dimmed" mt="md">
            Build fully functional accessible web applications faster than ever – Mantine includes
            more than 120 customizable components and hooks to cover you in any situation
          </Text>
          <Title className={classes.price} style={{ color: 'lightgreen' }}>
            Price: $199.96
          </Title>
          <Group justify="space-between">
            <Group>
              <Title className={classes.price}>Color</Title>
              <ThemeIcon radius="xl" size="md" style={{ backgroundColor: 'red' }}></ThemeIcon>
              <ThemeIcon radius="xl" size="md" style={{ backgroundColor: 'blue' }}></ThemeIcon>
              <ThemeIcon radius="xl" size="md" style={{ backgroundColor: 'black' }}></ThemeIcon>
            </Group>
            <Group style={{ backgroundColor: '#F1F1F1', borderRadius: '180px' }} p={5}>
              <ActionIcon
                variant="white"
                color="black"
                radius="xl"
                onClick={() => {
                  if (count > 0) {
                    setCount(count - 1);
                  }
                }}
              >
                <IconMinus stroke={1} />
              </ActionIcon>
              <Text>{count}</Text>
              <ActionIcon
                variant="white"
                radius="xl"
                color="black"
                onClick={() => setCount(count + 1)}
              >
                <IconPlus stroke={1} />
              </ActionIcon>
            </Group>
          </Group>

          <Grid mt={30}>
            <Grid.Col span={2}>
              <ActionIcon variant="outline" radius="md" size={50}>
                <IconHeartFilled stroke={1} size={30} />
              </ActionIcon>
            </Grid.Col>
            <Grid.Col span={5}>
              <Button fullWidth variant="outline" radius="md" size="lg" className={classes.control}>
                Add to cart
              </Button>
            </Grid.Col>
            <Grid.Col span={5}>
              <Button fullWidth variant="filled" radius="md" size="lg" className={classes.control}>
                Buy now
              </Button>
            </Grid.Col>
          </Grid>
        </div>
      </div>
    </Container>
  );
}
