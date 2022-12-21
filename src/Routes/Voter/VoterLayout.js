import DashboardLayout from '../../Components/Layout/DashboardLayout'

import avatar from "../../Assets/Images/avatar.png"
import useAuth from '../../Hooks/useAuth'

const VoterLayout = () => {
   
   useAuth("voter");

    const userData = {

        name: "Mia",
        status: "Student",
        avatar: avatar
    }

    const data = [
        {
            id:1,
            title: "Dashboard",
            subMenu: [
                {
                    id:1,
                    title: "Vice-Chairman"
                },
                {
                    id:2,
                    title: "General Secratary"
                },
                {
                    id:3,
                    title: "Magazine Editor",
                },
            ]
        },
        {
            id:2,
            title: "History",
            path: "history"
        },
        {
            id:3,
            title: "Result",
            path: "result"
        }
    ]




    return (
        <DashboardLayout  userData={userData} data={data} />
    )
}

export default VoterLayout