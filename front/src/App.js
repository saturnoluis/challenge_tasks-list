import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <h1>My Tasks</h1>
      </header>
      <main className="App__body">
        <ul>
          {dummyData().map(({ title, done, uuid }, i) => (
            <li key={uuid}>
              <article>
                <h1>Task #{i + 1}</h1>
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
    [{"title":"et quas est","done":false,"uuid":"b4506c05-ec45-45b4-b0a7-3cf380f30ef4"},{"title":"voluptatibus sed sit","done":false,"uuid":"1b6c65ae-c86b-4441-a289-03395e335585"},{"title":"accusamus similique dolorem","done":false,"uuid":"01500b28-614f-47d3-af9d-cc8869d7017a"},{"title":"veniam deserunt eligendi","done":false,"uuid":"66385592-7dd8-4800-ad8a-f11c7deb0a90"},{"title":"ut quaerat quidem","done":false,"uuid":"f9a1950d-69b2-4698-8c76-2006b5aed285"}]
  );
}