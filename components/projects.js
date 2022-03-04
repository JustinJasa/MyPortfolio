import React from 'react';

const posts = [
	{
		title: 'Water Resources and Accessibility',
		href: '/module1',
		category: { name: 'Module 1', href: '#' },
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
		date: 'Mar 16, 2020',
		datetime: '2020-03-16',

		readingTime: '6 min',
		author: {
			name: 'Roel Aufderehar',
			href: '#',
			imageUrl:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
	{
		title: 'Water Health and Safety',
		href: '#',
		category: { name: 'Module 2', href: '#' },
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
		date: 'Mar 10, 2020',
		datetime: '2020-03-10',

		readingTime: '4 min',
		author: {
			name: 'Brenna Goyette',
			href: '#',
			imageUrl:
				'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
	{
		title: 'Water Sustainability',
		href: '#',
		category: { name: 'Module 3', href: '#' },
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
		date: 'Feb 12, 2020',
		datetime: '2020-02-12',

		readingTime: '11 min',
		author: {
			name: 'Daniela Metz',
			href: '#',
			imageUrl:
				'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
	{
		title: 'Sanitation',
		href: '#',
		category: { name: 'Module 4', href: '#' },
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
		date: 'Mar 16, 2020',
		datetime: '2020-03-16',

		readingTime: '6 min',
		author: {
			name: 'Roel Aufderehar',
			href: '#',
			imageUrl:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
	{
		title: 'Hand Hygiene',
		href: '#',
		category: { name: 'Module 5', href: '#' },
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
		date: 'Mar 16, 2020',
		datetime: '2020-03-16',

		readingTime: '6 min',
		author: {
			name: 'Roel Aufderehar',
			href: '#',
			imageUrl:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
	{
		title: 'Disinfection and other Hygienic Practices',
		href: '#',
		category: { name: 'Module 6', href: '#' },
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
		date: 'Mar 16, 2020',
		datetime: '2020-03-16',

		readingTime: '6 min',
		author: {
			name: 'Roel Aufderehar',
			href: '#',
			imageUrl:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
];

export default function BlogSection() {
	return (
		<div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
			<div className="absolute inset-0">
				<div className="bg-white h-1/3 sm:h-2/3" />
			</div>
			<div className="relative max-w-7xl mx-auto">
				<div className="text-center">
					<h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
						My Projects
					</h2>
				</div>
				<div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
					{posts.map((post) => (
						<div
							key={post.title}
							className="flex flex-col rounded-lg shadow-lg overflow-hidden"
						>
							<div className="flex-shrink-0">
								{/* <img
									className="h-48 w-full object-cover"
									src={post.imageUrl}
									alt=""
								/> */}
								<img src="https://picsum.photos/200/300" alt="" />
							</div>
							<div className="flex-1 bg-white p-6 flex flex-col justify-between">
								<div className="flex-1">
									<p className="text-sm font-medium text-indigo-600">
										<a href={post.href} className="hover:underline">
											{post.category.name}
										</a>
									</p>
									<a href={post.href} className="block mt-2">
										<p className="text-xl font-semibold text-gray-900">
											{post.title}
										</p>
										<p className="mt-3 text-base text-gray-500">
											{post.description}
										</p>
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
