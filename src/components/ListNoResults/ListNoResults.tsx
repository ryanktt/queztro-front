import { Box, Flex, rem, Text, Title, useMantineTheme } from '@mantine/core';
import { IconFileSearch } from '@tabler/icons-react';
import { ReactNode } from 'react';

export default function ListNoResults({
	title,
	subTitle,
	btn,
}: {
	title: string;
	subTitle: string;
	btn?: ReactNode;
}) {
	const theme = useMantineTheme();
	return (
		<Flex
			justify="center"
			align="center"
			h={200}
			bg="white"
			style={{ borderRadius: theme.radius.lg }}
			p="md"
		>
			<Box>
				<Flex align="self-end">
					<IconFileSearch
						color={theme.colors.dark[7]}
						stroke={1.8}
						style={{ marginRight: rem(5), height: rem(38), width: rem(38) }}
					/>
					<Title c="dark.7" size={25} fw={500}>
						{title}
					</Title>
				</Flex>
				<Text c="dark.5" size="lg" mb="md">
					{subTitle}
				</Text>
				{btn}
			</Box>
		</Flex>
	);
}
