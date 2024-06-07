import type {MetaFunction} from "@remix-run/node";
import {Link} from "@remix-run/react";

export const meta: MetaFunction = () => {
	return [
		{title: "Programming Quizzes"},
		{name: "description", content: "Welcome to the Programming Quizzes!"},
	];
};

export default function Index() {
	return (
		<div className="bg-gray-900 min-h-screen flex items-center justify-center py-8">
			<div className="text-center px-4">
				<h1 className="text-3xl font-bold mb-4 text-white">Добро пожаловать!</h1>
				<p className="text-lg mb-8 text-gray-400">Выберите категорию квиза, чтобы проверить свои знания:</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					<Link to="/js"
								className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-md transition duration-300 flex items-center justify-center">
						💻 JavaScript
					</Link>
					<Link to="/ts"
								className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition duration-300 flex items-center justify-center">
						🤖 TypeScript
					</Link>
					<Link to="/react"
								className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition duration-300 flex items-center justify-center">
						⚛️ React
					</Link>
					<Link to="/css"
								className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-md transition duration-300 flex items-center justify-center">
						🎨 CSS
					</Link>
					<Link to="/html"
								className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-md transition duration-300 flex items-center justify-center">
						📄 HTML
					</Link>
				</div>
			</div>
		</div>
	);
}
