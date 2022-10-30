import styles from './App.module.scss';

import {Navbar} from './components';

const App = () => (
	<div className={styles.wrapper}>
		<div className={styles.container}>
			<Navbar />
		</div>
	</div>
);

export default App;
