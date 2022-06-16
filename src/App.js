import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';

const App = () => {
	return (
		<div className='app' style={{textAlign:'center'}}>
			<Navbar />
			<LoginForm />
		</div>
	);
};

export default App;