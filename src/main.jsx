import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import Signup from "./Signup.jsx";
import Test from "./Test.jsx";

createRoot(document.getElementById('root')).render(
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Test/>}/>
				<Route path="/signup" element={<Signup/>}/>
			</Routes>

		</BrowserRouter>
)
