import PropTypes from 'prop-types';

import './Task.scss';

export default function TasksList ({ title, uuid, done, n }) {
  const mod = done ? 'Task--done' : '';
  return (
    <article className={`Task${mod}`} id={uuid}>
      <aside className="Task__number">Task #{n}</aside>
      <p className="Task__title">{title}</p>
    </article>
  );
}

TasksList.propTypes = {
  title: PropTypes.string,
  done: PropTypes.bool,
  uuid: PropTypes.string,
  n: PropTypes.number,
};

TasksList.defaultProps = {
  title: '',
  done: true,
  uuid: null,
  n: null,
};