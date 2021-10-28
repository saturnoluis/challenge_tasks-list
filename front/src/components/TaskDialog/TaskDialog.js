import { useAppContext } from '../../App/provider';

export default function TaskDialog () {
  const { openTask, setOpenTask } = useAppContext();
  const { n, uuid, title, done } = openTask;

  const closeDialog = () => {
    setOpenTask({});
  }

  const handleClose = () => {
    closeDialog();
  }

  const handleComplete = () => {
    console.log(uuid);
    closeDialog();
  }

  return (
    <>
    {uuid && !done
      ? <article className="TaskDialog">
          <header className="TaskDialog__header">
            Task #{n}
          </header>
          <h1 className="TaskDialog__title">
            {title}
          </h1>
          <footer className="TaskDialog__footer">
          <input
              className="TaskDialog__button--complete"
              type="button"
              value="Complete"
              onClick={handleComplete}
            />
            <input
              className="TaskDialog__button--close"
              type="button"
              value="Close"
              onClick={handleClose}
            />
          </footer>
        </article>
      : null
    }
    </>
  );
}