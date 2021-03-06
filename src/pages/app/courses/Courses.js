import React from 'react';
import Course from '../../../components/Course';
import figma from 'assets/img/figma.svg';
import analog from 'assets/img/analog.svg';
import instagram from 'assets/img/instagram.svg';
import drawing from 'assets/img/drawing.svg';
import { DashboardNav, Grid } from 'components/Styles';
import styled from 'styled-components';

const Wrapper = styled.div`
	padding: 56px;

	section {
		max-width: 740px;
		width: 100%;
	}
`;

export default () => {
	const courses = [
		{
			img: figma,
			title: 'Learn Figma',
			author: 'Christopher Morgan',
			time: '6h 30min',
			percentage: 0,
			button: 'Start Course',
		},

		{
			img: analog,
			title: 'Analog photography',
			author: 'Gordon Norman',
			time: '3h 15min',
			percentage: 67,
			button: 'Resume',
		},

		{
			img: instagram,
			title: 'Master Instagram',
			author: 'Sophie Gill',
			time: '6h 30min',
			percentage: 99,
			button: 'Resume',
		},

		{
			img: drawing,
			title: 'Basics of drawing',
			author: 'Jean Tate',
			time: '11h 30min',
			percentage: 99,
			button: 'Resume',
		},
	];
	return (
		<Wrapper>
			{/* Top section */}
			<DashboardNav className='mb-70'>
				<li className='active'>All courses</li>
				<li>Completed</li>
			</DashboardNav>
			<section>
				{courses.map((course) => (
					<Course course={course} />
				))}
			</section>
		</Wrapper>
	);
};
