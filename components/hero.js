import React, { Fragment } from 'react';
import { Popover, Transition, Dialog } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

export default function Hero() {
	return (
		<div className="relative bg-white overflow-hidden">
			<div
				className="hidden lg:block lg:absolute lg:inset-0"
				aria-hidden="true"
			></div>

			<div className="relative pt-0 pb-16 sm:pb-24 lg:pb-32">
				<Popover>
					<Transition
						as={Fragment}
						enter="duration-150 ease-out"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="duration-100 ease-in"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<Popover.Panel
							focus
							className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
						>
							<div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
								<div className="px-5 pt-4 flex items-center justify-between">
									<div>
										<img
											className="h-8 w-auto"
											src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
											alt=""
										/>
									</div>
									<div className="-mr-2">
										<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
											<span className="sr-only">Close main menu</span>
											<XIcon className="h-6 w-6" aria-hidden="true" />
										</Popover.Button>
									</div>
								</div>
								<div className="px-2 pt-2 pb-3 space-y-1"></div>
								<a
									href="#"
									className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
								>
									Log in
								</a>
							</div>
						</Popover.Panel>
					</Transition>
				</Popover>

				<main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
					<div className="lg:grid lg:grid-cols-12 lg:gap-4">
						<div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
							<h1>
								<span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-5xl">
									<span className="block text-gray-900 mb-6">
										Hey, I'm Justin!
									</span>
									<p className="block text-indigo-600 whitespace-nowrap ">
										I'm a
										<Typewriter
											options={{
												strings: ['Software Developer', 'UI/UX Designer'],
												autoStart: true,
												loop: true,
											}}
										/>
									</p>
								</span>
							</h1>
							<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
								hi a
							</p>
							<div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
								<Link href="/">
									<a
										type="button"
										className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									>
										About Me!
									</a>
								</Link>
							</div>
						</div>
						<div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
							<svg
								className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
								width={640}
								height={784}
								fill="none"
								viewBox="0 0 640 784"
								aria-hidden="true"
							>
								<defs></defs>
								<rect
									y={72}
									width={640}
									height={640}
									className="text-gray-50"
									fill="currentColor"
								/>
							</svg>
							<div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
								<button
									type="button"
									className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								>
									<img
										className="w-full"
										src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
										alt=""
									/>
								</button>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
