import '@mantine/core/styles.css';
import Header from '@components/Header/Header';
import style from './HomePublic.module.scss';

export default function HomePublic() {
	return (
		<>
			<Header />
			<div className={style.HomePublic}>
				<h1>A fully featured questionnaire platform</h1>
				<p>
					Create and manage questionnaires easily - Queztro provides many form features that will cover you in
					any situation.
				</p>
			</div>
		</>
	);
}
