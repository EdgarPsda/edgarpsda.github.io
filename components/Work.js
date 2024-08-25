import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'

export const Skills = ({ title, cards }) => {
	return (
		<div id="skills" className="bg-secondary py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card
							key={index}
							title={value.title}
							description={value.description}
							link={value.link} />
					))}
				</div>
			</div>
		</div>
	);
}

export const Projects = ({ title, cards }) => {
	return (
		<div id="projects" className="bg-primary py-5 px-5">
			<div className="container">
				<h1 className="text-light fw-bold">Projects</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card
							key={index}
							title={value.title}
							description={value.description}
							icons={value.icons} />
					))}
				</div>
				{/* <div className="text-center">
					<button type="button" className="btn btn-outline-light">See More</button>
				</div> */}
			</div>
		</div>
	);
}

export const Card = ({ title, description, icons }) => {
	return (
		<div className="card py-3 px-3 mx-sm-4 my-4 card-work" style={{ width: "20rem" }}>
			<h4 className="text-primary">{title}</h4>
			<p className="text-dark">{description}</p>
			<div className="text-end">
				{icons && icons.map((value, index) => (
					<Link key={index} href={value.link}>
						<a target="_blank" rel="noreferrer">
							<FontAwesomeIcon className="icon-style mx-1" icon={value.icon} size="2x" />
						</a>
					</Link>
				))}
			</div>
		</div>
	);
}

export const Grafito = ({ title, image, description, icons }) => {
	return (
		<div id="grafito" className="bg-white py-5 px-5">
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<h1 className="text-primary fw-bold">{title}</h1>
						<div className="px-sm">
							{description.map((value, index) => (
								<p key={index} >{value}</p>
							))}
						</div>
						<div className="text-end">
							{icons && icons.map((value, index) => (
								<Link key={index} href={value.link}>
									<a target="_blank" rel="noreferrer">
										<FontAwesomeIcon className="icon-style mx-1" icon={value.icon} size="2x" />
									</a>
								</Link>
							))}
						</div>
					</div>
					<div className="col-md-4">
						<img
							className="img-fluid my-3 card-image" width="250"
							height="250" src={image.src}
							alt="grafito 3d image"
						/>
					</div>
				</div>

			</div>
		</div>
	);
}

export const Experience = ({ title, cardsExperience }) => {
	return (
		<div id="experience" className="bg-secondary py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cardsExperience.map((value, index) => (
						<CardExperience
							key={index}
							title={value.title}
							image={value.image}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export const CardExperience = ({ title, image }) => {
	return (
		<div className="card py-3 px-3 mx-sm-4 my-4 card-work" style={{ width: "20rem" }}>
			<h4 className="text-primary">{title}</h4>
			<img
				className="img-fluid my-3 card-image" width="250"
				height="250" src={image.src}
				alt="grafito 3d image"
			/>
		</div>
	);
};