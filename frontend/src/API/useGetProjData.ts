import {useState, useEffect} from 'react'

export type Project = {
    emp_fname: string
    emp_lname: string
    job_description: string
    proj_name: string
    assign_date: string
    assign_chg_hr: number
    assign_hours: number
    assign_chg: number
}

const useGetProjData = () => {
    const url = "http://localhost:4000/projects"
    const [data, setData] = useState<Project[]>([])
    useEffect(() => {

       
    const fetchAPI = async () => {
        try {
            const response =  await fetch(url)
    
            if(response.status === 200) {
                const projectData = await response.json()
                setData(projectData)
            } else {
                console.error(`Error ${response.status} ${response.statusText}`)
            }
            
        } catch (error) {
            console.error(`Error ${error}`)

        }
    }
    fetchAPI()


    }, [])

    return data

}

export default useGetProjData