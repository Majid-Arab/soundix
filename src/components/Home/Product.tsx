import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
  ActionIcon,
} from '@mantine/core';
import { IconCheck, IconHeartFilled, IconPointFilled } from '@tabler/icons-react';
import image from '../../public/headphone1.png';
import classes from './Product.module.css';

export function Product() {
  return (
    <Container size="md" maw={1000} mah={400} pt={20}>
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
          <Group>
            <Title className={classes.price}>Color</Title>
            <ThemeIcon radius="xl" size="md" style={{ backgroundColor: 'lightgreen' }}></ThemeIcon>
            <ThemeIcon radius="xl" size="md" style={{ backgroundColor: 'blue' }}></ThemeIcon>
            <ThemeIcon radius="xl" size="md" style={{ backgroundColor: 'black' }}></ThemeIcon>
          </Group>

          <Group mt={30}>
            <ActionIcon variant="outline" radius="md" size="xl">
              <IconHeartFilled stroke={1} />
            </ActionIcon>
            <Button variant="outline" radius="md" size="md" className={classes.control}>
              Add to cart
            </Button>
            <Button variant="filled" radius="md" size="md" className={classes.control}>
              Buy now
            </Button>
          </Group>
        </div>
      </div>
    </Container>
  );
}
