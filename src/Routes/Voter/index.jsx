import React from 'react'
import PositionCard from "../../Components/Cards/PositionCard"
const Voter = () => {
    
    const data = [
        {
            position: 'Chairman',
            candidates: [
                {
                    name: "Joshua Dyer",
                    department: "cs",
                    semester: "6",
                    rollno: "10"
                },
                {
                    name: "Jhon",
                    department: "cs",
                    semester: "6",
                    rollno: "10"
                }

            ]
        },

        {
            position: 'Vice-Chairman',
            candidates: [
                {
                    name: "Joshua Dyer",
                    department: "cs",
                    semester: "6",
                    rollno: "10"
                },
                {
                    name: "Jhon",
                    department: "cs",
                    semester: "6",
                    rollno: "10"
                },
                {
                    name: "Joshua Dyer",
                    department: "cs",
                    semester: "6",
                    rollno: "10"
                },
                {
                    name: "Jhon",
                    department: "cs",
                    semester: "6",
                    rollno: "10"
                }

            ]
        },
        {
            position: 'General Secretary',
            candidates: [
                {
                    name: "Joshua Dyer",
                    department: "cs",
                    semester: "6",
                    rollno: "10"
                },
                {
                    name: "Jhon",
                    department: "cs",
                    semester: "6",
                    rollno: "10"
                },
                {
                    name: "Joshua Dyer",
                    department: "cs",
                    semester: "6",
                    rollno: "10"
                },
                {
                    name: "Jhon",
                    department: "cs",
                    semester: "6",
                    rollno: "10"
                }

            ]
        }

    ]


    return (
        <div className="dashboard-main">
            <div className="election-header-section">
                <div className="election-title-section">
                    <h2>College Election <span>2022-23</span></h2>
                </div>
                <div className="election-time-reminder">
                    <marquee>Attention voters! The polls will be closing at 12 <sup>o</sup> Clock</marquee>
                </div>
            </div>
            <div className="election-view-section">
                {data.map(position =>
                    <PositionCard {...position} key={position.position} />
                )
                }
            </div>
        </div>
    )

}
export default Voter