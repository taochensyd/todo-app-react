import {createContext,useState,useEffect} from 'react';

const DataContext = createContext({});

export const DataProvider = ({children}) => {

    const [todoData, setTodoData] = useState({task:'',date:''});




    return (
        <DataContext.Provider value={{
            todoData, setTodoData
        }}> 
            {children} 
        </DataContext.Provider>
    )
}

export default DataContext;