import styles from './App.module.scss';

import {Navbar, Home, Chart} from './components';
import {banner, circles} from './assets';

const App = () => (
	<div className={styles.wrapper}>
		<div className={styles.container}>
			<Navbar />
			<img className={styles.banner} src={banner} alt='banner' />
			<Home />
			<Chart />
			<img src={circles} alt='background' className={styles.circles} />
		</div>
	</div>
);

export default App;
