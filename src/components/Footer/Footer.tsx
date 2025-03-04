import { ActionIcon, Container, Group, rem } from '@mantine/core';
import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import classes from './Footer.module.scss';

export default function Footer() {
	return (
		<div className={classes.footer}>
			<Container className={classes.inner}>
				<p className={classes.quaestio}>Quaestio</p>
				<Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
					<ActionIcon size="lg" color={'dark.5'} variant="subtle">
						<IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
					</ActionIcon>
					<ActionIcon size="lg" color={'dark.5'} variant="subtle">
						<IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
					</ActionIcon>
					<ActionIcon size="lg" color={'dark.5'} variant="subtle">
						<IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
					</ActionIcon>
				</Group>
			</Container>
		</div>
	);
}
