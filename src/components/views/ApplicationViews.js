import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../tickets/Locations"

export const ApplicationViews = () => {
	return (
		<Routes>
			<Route path="/" element={
				<>

					<h1>Kandy Korner</h1>
					<div>Your one-stop-shop for all your candy needs</div>


					<Outlet />

				</>
			}>
			<Route path="Locations" element={ <LocationList />} />

			</Route>
		</Routes>
	)
}