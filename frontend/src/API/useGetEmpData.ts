
import {useState, useEffect} from 'react'

export type employee = {
  emp_num: number
  emp_fname: string
  emp_lname: string
  img: string
  job_description: string
  job_chg_hour: any

}



const useGetEmpData = () => {

  const url = "http://localhost:4000/employees"

  // response data state
  const [data, setData] = useState<employee[]>([])

  useEffect(() => {
    // create async function in sync function to fetch data

    const fetchAPI = async () => {


      try {
        // make api request
        const response = await fetch(url)

        // if status return is 200, extract data from response
        if(response.status === 200) {
          const responseData = await response.json()
          // set response data
          setData(responseData)

        } else {
          console.error(`Error ${response.status} ${response.statusText}`);
          
        }

      } catch(error) {
        console.error(`Error ${error}`);
        
      }

    }

    // run fetch API function
    fetchAPI()
    

  }, [])

  // return data
  return data

  };

export default useGetEmpData