import React, { useState } from 'react';
import CurrentShow from './CurrentShow'; // Import the CurrentShow component
import scheduleData from './scheduleData';

const daysOfWeek = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

const ScheduleTable = () => {
	const [selectedDay, setSelectedDay] = useState('Monday');
	const headings = ['Time', 'Show', 'Presenters', 'Hashtags', 'Actions'];

	const getCurrentShow = (day) => {
		const now = new Date();
		const currentTime = `${now.getHours()}:${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()}`;
		return scheduleData[day].find((show) => {
			const [start, end] = show.time.split(' - ');
			return start <= currentTime && end >= currentTime;
		});
	};

	const renderRows = (day) => {
		return scheduleData[day].map((show, index) => (
			<tr
				key={index}
				className={`border-b ${index % 2 === 0 ? 'bg-earthYellow' : 'bg-white'}`}
			>
				<td className="border px-4 py-2 text-center text-sm">{show.time}</td>
				<td className="border px-4 py-2 text-center text-sm">{show.show}</td>
				<td className="border px-4 py-2 text-center text-sm">
					<div className="flex items-center justify-center">
						{show.image && (
							<img
								src={show.image}
								alt={`Presenter: ${show.presenters}`}
								className="w-12 h-12 rounded-full object-cover mr-2"
							/>
						)}
						<a
							href={`#${show.presenters.replace(/ /g, '-')}`}
							className="text-spanishOrange hover:underline"
						>
							{show.presenters || 'N/A'}
						</a>
					</div>
				</td>
				<td className="border px-4 py-2 text-center text-sm">
					{show.hashtags
						? show.hashtags.split(' ').map((hashtag, i) => (
							<a
								key={i}
								href={`https://x.com/hashtag/${hashtag.replace('#', '')}`}
								className="text-spanishOrange hover:underline mr-1"
							>
								{hashtag}
							</a>
						))
						: 'N/A'}
				</td>
				<td className="border px-4 py-2 text-center text-sm">
					<a
						href={show.archiveLink || '#'}
						className="text-spanishOrange hover:underline"
					>
						Archives
					</a>{' '}
					|
					<a
						href={show.moreInfoLink || '#'}
						className="text-spanishOrange hover:underline ml-2"
					>
						More Info
					</a>
				</td>
			</tr>
		));
	};

	const currentShow = getCurrentShow(selectedDay);

	return (
		<section id="schedule" className="m-5">
			<div className="mx-auto px-4 md:px-6">
				<h2 className="mb-6 text-3xl sm:text-4xl font-semibold text-center mt-16">
					Weekly Schedule
				</h2>
				{currentShow && <CurrentShow show={currentShow} />}
				<div className="mb-4 flex justify-center overflow-x-auto">
					<ul className="flex border-b overflow-x-auto">
						{daysOfWeek.map((day) => (
							<li
								key={day}
								className={`cursor-pointer px-4 py-2 text-base sm:text-lg ${selectedDay === day
									? 'border-b-2 border-spanishOrange text-spanishOrange'
									: 'text-gray-600'
									}`}
								onClick={() => setSelectedDay(day)}
							>
								{day}
							</li>
						))}
					</ul>
				</div>
				<div className="overflow-x-auto">
					<table className="min-w-full border-collapse bg-white shadow-lg">
						<thead>
							<tr className="bg-spanishOrange text-white uppercase text-xs sm:text-sm">
								{headings.map((heading, index) => (
									<th
										key={index}
										className="border px-4 py-2 sm:px-6 sm:py-3"
									>
										{heading}
									</th>
								))}
							</tr>
						</thead>
						<tbody>{renderRows(selectedDay)}</tbody>
					</table>
				</div>
			</div>
		</section>
	);
};

export default ScheduleTable;
