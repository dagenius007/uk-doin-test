import React from 'react';
import styled from 'styled-components';
import cheers from 'assets/img/cheers.png';
import { Grid, GridEqual, H1, Flex, DashboardNav } from 'components/Styles';
import icons from 'assets/icons/icon-collections.svg';
import Course from 'components/Course';
import project from 'assets/img/project.png';
import figma from 'assets/img/figma.svg';
import analog from 'assets/img/analog.svg';
import instagram from 'assets/img/instagram.svg';
import drawing from 'assets/img/drawing.svg';
import frontarrow from 'assets/img/frontarrow.svg';
import backarrow from 'assets/img/backarrow.svg';
import graph from 'assets/img/graph.png';

const Wrapper = styled.div`
	padding-top: 41px;
	padding-left: 25px;
	padding-right: 33px;
`;

const TopSection = styled.div`
	margin-bottom: 40px;
	& > div:nth-child(1) {
		padding-top: 46px;
		margin-bottom: 24px;
		padding-left: 25px;
		background: #f8fafb;
		position: relative;
		height: 160px;
		border-radius: 14px;
		display: flex;
		justify-content: space-between;
		img {
			width: 102px;
			height: 53px;
			position: absolute;
			top: 0;
			right: 0;
		}
		h2 {
			color: #242582;
			font-weight: bold;
			font-size: 36px;
			font-family: GTWalsheimPro;
		}
		p {
			font-family: GTWalsheimProRegular;
		}
		svg {
			margin-top: -73px;
		}
	}
`;

const CourseProgress = styled.div`
	& .progress_block {
		background: #f8fafb;
		border-radius: 14px;
		margin-bottom: 43px;
		display: flex;
		align-items: center;
		justify-content: center;
		span {
			display: block;
			color: #f64c71;
			font-size: 4rem;
			margin-right: 11px;
		}
	}
`;

const Courses = styled.div``;

const Graph = styled.div`
	img {
		width: 100%;
	}
`;

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

const Dashboard = () => {
	return (
		<Wrapper>
			<Grid columns={['1.3fr', '1fr']} gap={'45px'}>
				{/* Top section */}
				<TopSection>
					<div>
						<div>
							<h2>Hello Nimi</h2>
							<p>It’s good to see you again.</p>
						</div>

						<svg>
							<use xlinkHref={`${icons}#user`} />
						</svg>
						<img src={cheers} />
					</div>
					<Grid columns={['500px', '1fr']} gap={'23px'}>
						<Course
							course={{
								img: project,
								title: 'Project management ',
								author: 'Gloria Martins',
								percentage: 83,
								button: 'Continue',
							}}
						></Course>
						<Flex>
							<img className='mr-16' src={backarrow} alt='backfarrow' />
							<img src={frontarrow} alt='frontarrow' />
						</Flex>
					</Grid>
				</TopSection>

				{/*my courses */}
				<CourseProgress>
					<GridEqual count={2} gap={'23px'}>
						<div className='progress_block'>
							<span>11</span>
							<p>
								Courses <br /> Completed
							</p>
						</div>
						<div className='progress_block'>
							<span>11</span>
							<p>
								Courses <br /> Completed
							</p>
						</div>
					</GridEqual>
					<GridEqual count={2} gap={'23px'}>
						<div className='progress_block'>
							<span>11</span>
							<p>
								Courses <br /> Completed
							</p>
						</div>
						<div className='progress_block'>
							<span>11</span>
							<p>
								Courses <br /> Completed
							</p>
						</div>
					</GridEqual>
				</CourseProgress>
			</Grid>

			<Grid columns={['1.3fr', '1fr']} gap={'45px'}>
				<Courses>
					<H1>My courses</H1>
					<DashboardNav>
						<li className='active'>All courses</li>
						<li>Newest courses</li>
					</DashboardNav>
					{courses.map((course) => (
						<Course course={course} />
					))}
				</Courses>

				<Graph>
					<H1>Your statistics</H1>
					<Flex className='mb-15'>
						<h4>Learning Hours</h4>
						<p>Weekly</p>
					</Flex>

					<img src={graph} />
				</Graph>
			</Grid>
		</Wrapper>
	);
};

export default Dashboard;
