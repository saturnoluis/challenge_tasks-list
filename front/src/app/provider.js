import { createContext, useState, useContext, useEffect } from 'react';
import { getTasks } from './api';

export const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [limit, setLimit] = useState(13);
  const [tasks, setTasks] = useState([]);
  const [openTask, setOpenTask] = useState({});

  useEffect(() => {
    getTasks(limit).then(newTasks => {
      setTasks(newTasks);
    });
  }, [limit]);

  return (
    <AppContext.Provider value={{
      limit,
      tasks,
      openTask,
      setTasks,
      setLimit,
      setOpenTask,
    }}>
      {children}
    </AppContext.Provider>
  );
};