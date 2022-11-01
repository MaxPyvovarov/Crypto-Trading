import styles from './App.module.scss';

import {Navbar, Home, Technologies, Scheme} from './components';
import {banner, circles} from './assets';

const App = () => (
	<div className={styles.wrapper}>
		<div className={styles.container}>
			<Navbar />
			<img className={styles.banner} src={banner} alt='banner' />
			<Home />
			<Technologies />
			<img src={circles} alt='background' className={styles.circles} />
			<Scheme />
		</div>
	</div>
);

export default App;
