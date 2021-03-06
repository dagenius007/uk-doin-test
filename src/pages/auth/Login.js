import React from 'react';
import Input from 'components/form/Input';
import styled from 'styled-components';
import { ButtonFullWidth } from 'components/Styles';
import { Link } from 'react-router-dom';
import message from 'assets/img/message.svg';
import padlock from 'assets/img/padlock.svg';

const Wrapper = styled.div`
	padding: 0px 170px;
	@media (max-width: 960px) {
		padding: 30px;
	}
	& > img {
		margin-bottom: 15px;
	}
	h3 {
		font-size: 1.4rem;
		margin-bottom: 5px;
		font-weight: 500;
		color: #293340;
		font-weight: bold;
	}
	p.top {
		margin-bottom: 40px;
		font-size: 0.9375rem;
		line-height: 1.7;
		color: #8798ad;
	}

	p.terms {
		font-size: 0.95rem;
		span {
			color: #8865db;
		}
	}

	button {
		margin-top: 25px;
	}
`;

const Text = styled.p`
	text-align: center;
	margin: 10px auto;
	color: #b0bac9;
	a {
		color: #242582;
	}
`;

export default ({ history, match, success }) => {
	return (
		<Wrapper>
			<div>
				<h3>Sign In</h3>
				<p className='top'>Please enter your credentials to proceed.</p>
				<form>
					<Input icon={message} name='email' placeholder='email' label='EMAIL ADDRESS' />

					<Input icon={padlock} name='password' type='password' label='PASSWORD' />

					<ButtonFullWidth
						type='button'
						onClick={() => {
							history.push('/app/home');
						}}
					>
						Login
					</ButtonFullWidth>
				</form>

				{match?.path === '/auth/register' ? (
					<Text className='mt-50'>
						Already have an account? <Link to='/auth/login'>Login</Link>
					</Text>
				) : (
					<Text>
						Don't have an account? <Link to='/auth/register'>Sign up</Link>
					</Text>
				)}
			</div>
		</Wrapper>
	);
};
