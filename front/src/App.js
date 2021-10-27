import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <h1>My Tasks</h1>
      </header>
      <main className="App__header">
        <ul>
          {dummyData().map(({ title, done, uuid }, i) => (
            <li key={uuid}>
              <article>
                <h1>Task #{i}</h1>
                <p>{title}</p>
              </article>
            </li>
          ))}
        </ul>
      </main>
      <footer className="App__footer">
        <a
          rel="noreferrer"
          target="_blank"
          href="http://github.com/saturnoluis">

            github/saturnoluis
        </a>
      </footer>
    </div>
  );
}

export default App;

function dummyData() {
  return (
    [
      {
        "title": "possimus dolorem et",
        "done": false,
        "uuid": "0eb516a0-d3d7-45ab-9e3b-7fd01d6cefee"
      },
      {
        "title": "veritatis distinctio modi",
        "done": false,
        "uuid": "cc3601df-9dbb-4d68-87f6-42e62259379d"
      },
      {
        "title": "sequi maxime corporis",
        "done": false,
        "uuid": "205aa0b5-dd1f-480d-b3b6-851dfdd66a81"
      },
      {
        "title": "nesciunt error magnam",
        "done": false,
        "uuid": "2c3e6f2f-7cf2-498d-942e-afa0c7826e9d"
      },
      {
        "title": "unde minima quia",
        "done": false,
        "uuid": "4f33faf9-3890-49ff-a67e-df33ba3a221a"
      }
    ]
  );
}