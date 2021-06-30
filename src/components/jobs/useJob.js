import { createContext,useState} from 'react';
import jobsList from './static';
export const JobContext = createContext();

// Creating a Context for jobs data to do operations on it and to use it anywhere.
const JobContextProvider=(props)=> {
    const [jobs, setJobs] = useState(jobsList);
    return (
        <div>
            <JobContext.Provider value={{ jobs,setJobs }}>
                {props.children}
            </JobContext.Provider>
        </div>
    );
};
export default JobContextProvider;