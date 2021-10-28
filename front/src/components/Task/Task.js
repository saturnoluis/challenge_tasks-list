import PropTypes from 'prop-types';
import { useAppContext } from '../../App/provider';

import './Task.scss';

export default function TasksList ({ title, uuid, done, n }) {
  const mod = done ? ' Task--done' : '';
  const { setOpenTask } = useAppContext();

  const handleClick = () => {
    setOpenTask({
      n,
      uuid,
      title,
      done,
    });
  }

  return (
    <article
      id={uuid}
      onClick={handleClick}
      className={`Task${mod}`}>

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