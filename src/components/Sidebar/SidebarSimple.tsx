import { useState } from 'react';
import { ActionIcon, Card, Group, Title, Text, CloseButton } from '@mantine/core';
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconPlus,
} from '@tabler/icons-react';
import classes from './SidebarSimple.module.css';

const data = [
  { link: '', label: 'Notifications', icon: IconBellRinging },
  { link: '', label: 'Billing', icon: IconReceipt2 },
  { link: '', label: 'Security', icon: IconFingerprint },
  { link: '', label: 'SSH Keys', icon: IconKey },
  { link: '', label: 'Databases', icon: IconDatabaseImport },
  { link: '', label: 'Authentication', icon: Icon2fa },
  { link: '', label: 'Other Settings', icon: IconSettings },
];

type Props = {
  close: () => void;
};

export function NavbarSimple({ close }: Props) {
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <Title>Soundix.</Title>
          <CloseButton onClick={close} />
        </Group>
        {links}
        <Card withBorder padding="lg" radius="md" className={classes.card}>
          <Group justify="space-between">
            <ActionIcon radius="xl" color="#00E0C6" style={{ border: '2px solid' }} p={5} size="xl">
              <IconPlus />
            </ActionIcon>
          </Group>

          <Text fz="lg" fw={500} mt="md">
            minor release (September 2022)
          </Text>
          <Text fz="sm" c="dimmed" mt={5}>
            Form context management, Switch, Grid and Indicator components improvements, new hook
            and 10+ other changes
          </Text>
        </Card>
      </div>
    </nav>
  );
}
