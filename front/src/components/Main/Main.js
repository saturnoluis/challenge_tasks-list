import { useAppContext } from '../../App.provider';
import TasksList from '../TasksList';

import './Main.scss';

export default function Main () {
  const { tasks } = useAppContext();

  return (
    <main className="Main">
      <TasksList tasks={tasks} />
    </main>
  );
}