import styles from './App.module.scss';

import {Navbar, Home} from './components';
import {banner} from './assets';

const App = () => (
	<div className={styles.wrapper}>
		<div className={styles.container}>
			<Navbar />
			<img className={styles.banner} src={banner} alt='banner' />
			<Home />
		</div>
	</div>
);

export default App;
