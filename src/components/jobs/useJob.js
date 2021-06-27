import { createContext,useState} from 'react';
import jobsList from './static';
export const JobContext = createContext();
// export function useDetails() {
// 	return useContext(JobContext);
// }
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