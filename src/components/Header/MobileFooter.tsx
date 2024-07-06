import React from 'react';
import { ActionIcon, Avatar, Box } from '@mantine/core';
import { createStyles } from '@mantine/emotion'; // Adjusted import
import { IconMail, IconBell } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  footer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: theme.colors.white,
    boxShadow: '0 -1px 3px rgba(0, 0, 0, 0.1)',
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      display: 'none',
    },
  },
  icon: {
    padding: theme.spacing.sm,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.blue[0],
    '&:hover': {
      backgroundColor: theme.colors.blue[1],
    },
  },
  iconInner: {
    color: theme.black,
    width: 60,
    height: 60,
  },
}));

const MobileFooter: React.FC = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.footer}>
      <ActionIcon className={classes.icon}>
        <Box className={classes.iconInner}>
          <IconMail size="100%" stroke={1.5} />
        </Box>
      </ActionIcon>
      <ActionIcon className={classes.icon}>
        <Box className={classes.iconInner}>
          <IconBell size="100%" stroke={1.5} />
        </Box>
      </ActionIcon>
      <Avatar
        src="https://avatars.githubusercontent.com/u/1?v=4"
        alt="User Avatar"
        size={60}
        radius="xl"
      />
    </Box>
  );
};

export default MobileFooter;
