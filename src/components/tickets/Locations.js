import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
//import "./Locations.css"

export const LocationList = () => {
    const [locations, setLocations] = useState([])
    const [filteredLocations, setFilteredLocations] = useState([])



    useEffect(
        () => {
            fetch(`http://localhost:8088/locations`)
            .then(response => response.json())
            .then((locationArray) => {
                setLocations(locationArray)
            })

        },
        []
    )

    return <>
    
    <h2>List of Locations</h2>

    <article className="tickets">
        {
            locations.map(
                (location) => {
                    return <section className="ticket">
                        <header>{location.address}</header>
                        <footer>Square Footage: {location.sqFt}</footer>
                    </section>
                }
            )
        }
    </article>
</>

}