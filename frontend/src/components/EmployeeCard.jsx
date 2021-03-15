// import {useContext} from 'react'
// import {EmployeeContext} from '../Contexts/EmployeeContext'
import './EmployeeCard.scss'

const EmployeeCard = () => {
    // const employeeData = useContext(EmployeeContext)
    // employeeData.length > 0 && console.log(employeeData)
    const firstName = "Edmond"
    const lastName = "Yeo"
    const image = "../img/101.jpg"
    const jobDesc = " Database Designer"
    const jobChgHour = 125



    return (
        <div className="card">
            <div>
                <img src={image} alt="Edmond" />
                <h2>{`${firstName} ${lastName}`}</h2>
            </div>
            <div>
                <p>{jobDesc}</p>
                <p>{jobChgHour.toFixed(2)}</p>
            </div>
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, accusamus, repellendus velit nobis voluptate labore quis dignissimos architecto consequatur, omnis aliquid dolorum eos. In at incidunt omnis neque ratione sint.
                </p>
            </div>


        </div>
    )

}

export default EmployeeCard