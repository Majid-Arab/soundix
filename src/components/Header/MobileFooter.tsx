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
  },
}));

const MobileFooter: React.FC = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.footer} hiddenFrom="sm">
      <ActionIcon>
        <IconMail style={{ width: '70%', height: '70%' }} stroke={1.5} />
      </ActionIcon>
      <ActionIcon>
        <IconBell style={{ width: '70%', height: '70%' }} stroke={1.5} />
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
