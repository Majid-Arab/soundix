import React from 'react';
import { Paper, Title, Button, Image } from '@mantine/core';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import classes from './FeaturedCard.module.css';
import { ProductTable } from './ProductTable';

function Asidebar() {
  return (
    <>
      <Paper shadow="md" p="xl" radius="md" className={classes.card}>
        <Title order={1} className={classes.title}>
          Summer Headphones from Top Brands
        </Title>
        <Button variant="subtle" className={classes.viewAllButton}>
          View all <IconArrowNarrowRight stroke={2} />
        </Button>
        <div className={classes.featuredImage}>
          <Image
            width={150}
            height={150}
            radius="md"
            src="https://s3-alpha-sig.figma.com/img/14d9/7601/603bed246e83e943573c9c8b6e396b6c?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xz8lupOyvbTI7lzNZqbrd6nAwphxThRioLyhTyB3Eq7qM62DORsDf7h62QkHEeIgiQajPzSCYHAlk11nw-u9kOMaQIc2tMJHNjmnMz7VgvBVL4zshx9Kl5ljq16wzM74mVW9QOi3hwo2mownoN-C3QUOI9sLqsF8Wg~vth2zKmmhYAW5Dv0Ro6YhdiGfq6sP9-KeMhRHOWM8xFD9B6AaKsCpnEtCCkWGZ6JEKLSqTt023WdxUsU8Betdxp3ipm6XIQaRXLR-80eXbuD1sTak9nqTJ5slYv1SsDnfzFkjz2fsa9TRTOBoJ24TwpTmNJjBip23bfqB9wZh1zb6xuon4w__"
          />
        </div>
      </Paper>
      <ProductTable />
    </>
  );
}

export default Asidebar;
