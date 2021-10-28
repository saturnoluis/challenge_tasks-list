import PropTypes from 'prop-types';
import Task from '../Task';

import './TasksList.scss';

export default function TasksList ({ tasks }) {
  return (
    <ul className="TasksList">
      {tasks.map(({ title, done, uuid }, i) => (
        <li className="TasksList__item" key={uuid}>
          <Task
            n={i + 1}
            uuid={uuid}
            title={title}
            done={done}/>
        </li>
      ))}
    </ul>
  );
}

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    done: PropTypes.bool,
    uuid: PropTypes.test,
  })),
};

TasksList.defaultProps = {
  tasks: [],
};