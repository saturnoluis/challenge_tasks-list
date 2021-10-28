import { createContext, useState, useContext, useEffect } from 'react';
import { getTasks } from './App.api';

export const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    getTasks(limit).then(newTasks => {
      setTasks(newTasks);
    });
  }, [limit]);

  return (
    <AppContext.Provider value={{
      tasks,
      limit,
      setTasks,
      setLimit,
    }}>
      {children}
    </AppContext.Provider>
  );
};