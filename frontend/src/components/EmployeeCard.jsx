import {useContext} from 'react'
import {EmployeeContext} from '../Contexts/EmployeeContext'

const EmployeeCard = () => {
    const employeeData = useContext(EmployeeContext)
    employeeData.length > 0 && console.log(employeeData)


    return (
        <div>
            


        </div>
    )

}

export default EmployeeCard