import React from 'react'
import LinkObject from '../linkobject/LinkObject';
import './Links.css';

function Links() {
    return (
        <div className="link-table">
            <h3 className="title">ESA</h3>
            <LinkObject link="European Robotic Arm Launches Into Space" />
            <LinkObject link="New Financial Framework Sets Future for European Space Program" />
            <LinkObject link="ESA Selects EnVision for Venus Mission" />
            <h3 className="title">UFO's</h3>
            <LinkObject link="Alleged UFO Sighting at Skinwalker Ranch" />
            <LinkObject link="NY Times: Should We Make Contact With Aliens?" />
            <LinkObject link="UFO Witnesses Reject Recent DNI UFO Report" />
            <LinkObject link="Steven Greer, Disclosure Project Release New Documentary" />
            <LinkObject link="DNI Report: UFOs Are Real, But Still Unexplained" />
            <LinkObject link="CIA Declassifies Hundreds of Official Documents on UFO Sightings" />
            <LinkObject link="Utah Obelisk Remains Subject of Numerous Theories" />
            <h3 className="title">Tech</h3>
            <LinkObject link='Microsoft Pledges to Emit Zero Carbon by 2030' />
            <LinkObject link="Data Center Supply Chains Collapsing" />
            <LinkObject link="China Cracks Down on Crypto Miners" />
            <LinkObject link="WWII German Submarine Turned Into Data Center" />
            <LinkObject link="Chip Shortage Accelerates" />
            <LinkObject link="IoT Startup Makes Battery-Free Sensors" />
            <LinkObject link="5G Edge Computing Deployments Increasing" />
            <LinkObject link="DOD Joint-All Domain Command and Control Initiative Sets High Bar" />
            <h3 className="title">Security</h3>
            <LinkObject link="Microsoft Patches Zero Day Security Flaw" />
            <LinkObject link="Industrial Networks Exposed Through Cloud Based Operational Tech" />
            <LinkObject link="Pegasus Spyware Infection May be More Widespread Than Thought" />
            <LinkObject link="Saudi Aramco Hit With $50 Million Ransom Attack" />
            <LinkObject link="6000 Humana Customers See Data Exposed" />
            <LinkObject link="80 US Cities Suffer Data Breach" />
        </div>
    )
}

export default Links
