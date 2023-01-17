import { HStack, Spacer } from '@chakra-ui/react';
import {
	AppShell, Aside, Burger, Button, Footer, Header, MediaQuery, Navbar, Text, useMantineTheme
} from '@mantine/core';
import React, { useState } from 'react';

import { TiDocumentText } from 'react-icons/ti'
import { ProfileColaborador } from '../components/ProfileColaborador';

export const Home = () => {

	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);

	return (
		<>
			const theme = useMantineTheme();
			const [opened, setOpened] = useState(false);
			return (
			<AppShell
				styles={{
					main: {
						background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
					},
				}}
				navbarOffsetBreakpoint="sm"
				asideOffsetBreakpoint="sm"
				fixed
				navbar={
					<Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
						<Button variant='subtle' style={{ alignItems: "start", colorScheme: "red", textAlign: "left" }} leftIcon={<TiDocumentText />}>Todos PDE</Button>
					</Navbar>
				}
				aside={
					<MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
						<Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
							<Text>Application sidebar</Text>
						</Aside>
					</MediaQuery>
				}
				footer={
					<Footer height={60} p="md">
						Application footer
					</Footer>
				}
				header={
					<Header height={70} p="md">
						<div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
							<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
								<Burger
									opened={opened}
									onClick={() => setOpened((o) => !o)}
									size="sm"
									color={theme.colors.gray[6]}
									mr="xl"
								/>
							</MediaQuery>

							<HStack w="full">
								<Text>Logo</Text>
								<Spacer />
								<ProfileColaborador />
							</HStack>
						</div>
					</Header>
				}
			>
				<Text>Resize app to see responsive navbar in action</Text>
			</AppShell>
			);
		</>
	);
}