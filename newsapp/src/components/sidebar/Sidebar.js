import React from 'react';
import Sidenews from '../sidenews/Sidenews';
import './Sidebar.css'

function Sidebar(){
    return(
        <div className="sidebar">
            <img className="advertisement" src="https://upload.wikimedia.org/wikipedia/commons/a/aa/1922_bottled_Coca-Cola_ad.png" alt="" />
            <Sidenews text='Abrams Tank Rolls' byline='Walter White' lead='The new tank is going to kill a lot of Chineese troops.' date='22 July 2021' />
            <Sidenews text='Space Man Lives!' byline='Staff Writer' lead='We all thought they were gone forever.' date='21 July 2021' />
            <Sidenews text='Water Found For Real' byline='Roger Geek' lead='NASA announces new major lunar discovery.' date='20 July 2021' />
            <Sidenews text="NASA Perseverance Mars Rover to Acquire First Sample" byline="Staff Writer" lead="NASA is making final preparations for its Perseverance Mars rover to collect its first-ever sample of Martian rock, which future planned missions will transport to Earth." date="20 July 2021" />
            <Sidenews text="NASA Science Mission Directorate to Hold Town Hall Meeting" byline="Staff Writer" lead="NASA's Science Mission Directorate will hold a community town hall meeting with Associate Administrator for Science Thomas Zurbuchen and his leadership team at 1:30 p.m. EDT Thursday, July 22, to discuss updates to NASA's science program and share the current status of NASA activities." date="19 July 2021" />
            <Sidenews text="NASA to Brief Early Science from Perseverance Mars Rover" byline="Staff Writer" lead="NASA will hold a virtual media briefing at 1 p.m. EDT Wednesday, July 21, to discuss early science results from the agency’s Perseverance Mars rover and its preparations to collect the first-ever Martian samples for planned return to Earth." date="16 July 2021" />
            <Sidenews text="NASA Announces Nuclear Thermal Propulsion Reactor Concept Awards" byline="Walter White" lead="NASA is leading an effort, working with the Department of Energy (DOE), to advance space nuclear technologies. The government team has selected three reactor design concept proposals for a nuclear thermal propulsion system." date="13 July 2021" />
            <Sidenews text="NASA, ESA Partner in New Effort to Address Global Climate Change" byline="Roger Geek" lead="NASA and ESA (European Space Agency) have formed a first-of-its-kind strategic partnership to observe Earth and its changing environment." date="13 July 2021" />
            <Sidenews text="NASA, Northrop Grumman Finalize Moon Outpost Living Quarters Contract" byline="Staff Writer" lead="NASA and Northrop Grumman of Dulles, Virginia, have finalized a contract to develop the Habitation and Logistics Outpost (HALO) for Gateway, which will be a critical way station and outpost in orbit around the Moon as part of NASA’s Artemis program." date="9 July 2021" />
            
        </div>
    )
}
export default Sidebar;