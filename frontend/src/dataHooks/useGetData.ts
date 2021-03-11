
import {useState, useEffect} from 'react'

type employee = {
  emp_fname: string
  emp_lname: string
  job_description: string
  job_chg_hour: any

}

const useGetData = () => {
  // // API URL
  // const url = "http://localhost:4000/employees"
  // // Response state
  // const [data, setData] = useState<employee[]>([])

  // useEffect(() => {
  //   const fetchAPI = async () => {
  //     try {
  //       // Fetch data from REST API
  //       const response = await fetch(url)
  
  //       if(response.status === 200) {
  //         // extract JSON
  //         const employeeData: employee[] = await response.json()
  //         setData(employeeData)
  //       } else {
  //         console.error(`Error ${response.status} ${response.statusText}`)
  //       }
   
  //     } catch(error) {
  //       console.error(`Error ${error}`)
  //     }
  //   }

  //   fetchAPI()

  // }, [])

  // return data

  const url = "http://localhost:4000/employees"
  // response state
  const [data, setData] = useState<employee[]>([])

  useEffect(() => {

    // create asyn fetch api function in sync function

    const fetchAPI = async () => {
      try{
        // fetch the data from the rest API
        const response = await fetch(url)

        // if status is 200 then extract JSON
        if(response.status === 200 ) {
          const employeeData = await response.json()
          // set data
          setData(employeeData)
        } else {
          console.error(`Error ${response.status} ${response.statusText}`)
        }
      } catch(error) {
        console.error(`Error ${error}`)
      }
    }
    
    // call fetchAPI function
    fetchAPI()

  }, [])

  return data

  };

export default useGetData