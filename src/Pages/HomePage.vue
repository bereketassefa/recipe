<template>
	<!-- <section class="h-screen dark:bg-gray-800 dark:text-gray-100">
		<div class="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 ">
			<h1 class="text-4xl font-bold leading-none sm:text-5xl">All you contacts
				<span class="dark:text-violet-400">in ONE place</span>
			</h1>
			<p class="px-8 mt-8 mb-12 text-lg">Easy & Free Online Address Book.Easily consolidate all your contacts in one secure, online location.</p>
			<div class="flex flex-wrap justify-center">
				<router-link to="/login" class="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Log In</router-link >
				<router-link to="/signup" class="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">Sign Up</router-link>
			</div>
		</div>
	</section> -->
	<section class="bg-white dark:bg-gray-900 h-screen flex justify-center align-center">
		<div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
			<div class="mr-auto place-self-center lg:col-span-7">
				<h1
					class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
					Beki's Contact app</h1>
				<p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From
					checkout to global sales tax compliance, companies around the world use Flowbite to simplify their
					payment stack.</p>
				<router-link to="/login"
					class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
					Log In
					<svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clip-rule="evenodd"></path>
					</svg>
				</router-link>
				<router-link to="signup"
					class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
					Signup
				</router-link>
			</div>
			<div class="hidden lg:mt-0 lg:col-span-5 lg:flex ">
				<img src="../assets/main.png" alt="mockup">
			</div>
		</div>
	</section>
</template>