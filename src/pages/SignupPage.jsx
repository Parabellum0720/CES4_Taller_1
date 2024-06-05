import LoginForm from '../components/LoginForm';

const SignupPage = () => {
	return (
		<section
			style={{ height: '80vh' }}
			className='d-flex flex-column justify-content-center align-items-center'
		>
			<div className='d-flex flex-column align-items-center'>
				<h1>Registrar empleado</h1>
				<LoginForm type='signup' />
			</div>
		</section>
	);
};

export default SignupPage;
