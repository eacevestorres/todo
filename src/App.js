import React from 'react';
// This example's for browser use, so I'm using `BrowserRouter`.
// The are other routers for other environments, though.
import { Route, BrowserRouter, Routes } from 'react-router-dom';

// Your components.
import Todo from './Todo.js';

export default function App () {
	return (
			<BrowserRouter>
				<Routes>
					<Route path="/todo" element={<Todo />} />
					<Route path="/" element={<HomePage />} />
				</Routes>
			</BrowserRouter>
	);
}

function HomePage() {
	return(<div>Hola mundo</div>);
}
