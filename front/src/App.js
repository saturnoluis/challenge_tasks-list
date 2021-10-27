import './App.scss';

function App() {
  return (
    <div className="App dark">
      <header className="App__header">
        <h1>My Tasks</h1>
      </header>
      <main className="App__body">
        <ul className="TasksList">
          {dummyData().map(({ title, done, uuid }, i) => (
            <li className="TasksList__item" key={uuid}>
              <article className="Task">
                <aside className="Task__number">Task #{i + 1}</aside>
                <p className="Task__title">{title}</p>
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
    [{"title":"et 5 quas est","done":false,"uuid":"b4506c05-ec45-45b4-b0a7-3cf380f30ef4"},{"title":"voluptatibus sed sit","done":false,"uuid":"1b6c65ae-c86b-4441-a289-03395e335585"},{"title":"accusamus similique dolorem","done":false,"uuid":"01500b28-614f-47d3-af9d-cc8869d7017a"},{"title":"veniam deserunt eligendi","done":false,"uuid":"66385592-7dd8-4800-ad8a-f11c7deb0a90"},{"title":"ut quaerat quidem","done":false,"uuid":"f9a1950d-69b2-4698-8c76-2006b5aed285"}]
    // [{"title":"enim 60 esse omnis","done":false,"uuid":"7a3904bc-7b7f-49f3-813a-05b7f41b6dba"},{"title":"animi voluptas nihil","done":false,"uuid":"bfa8cee6-9966-42e7-a244-443c8374d346"},{"title":"sunt dolore eaque","done":false,"uuid":"b0c98f9b-caa8-4b62-b872-dea5d96d1c8e"},{"title":"beatae maxime ipsa","done":false,"uuid":"f9512304-07cb-4757-a12b-a5ba321c48fd"},{"title":"atque aspernatur aut","done":false,"uuid":"8993a686-64f1-4386-8500-e614f0420a6b"},{"title":"tenetur nesciunt quo","done":false,"uuid":"0fadfd2c-dd03-4aff-b315-02e35ab09e99"},{"title":"distinctio sunt eum","done":false,"uuid":"4edaa2cb-e355-4e03-88f7-ff53e0154473"},{"title":"eos voluptatibus quasi","done":false,"uuid":"af988245-09a3-45c3-8244-f85c56f51f22"},{"title":"assumenda saepe et","done":false,"uuid":"ed04628d-9575-42a0-8b87-c1c35095d4f7"},{"title":"itaque saepe officia","done":false,"uuid":"e192a9c8-9a80-4fe3-a9f8-eea7b12c0f36"},{"title":"fuga et molestias","done":false,"uuid":"a086820c-f232-4c6c-8110-d29f5f395183"},{"title":"alias incidunt deleniti","done":false,"uuid":"1e663fa9-d0ef-49a9-a6f3-761021f7b226"},{"title":"dicta rerum id","done":false,"uuid":"4bcfaee3-ef61-4f09-a1bc-2de9bc0e3f07"},{"title":"labore et ipsam","done":false,"uuid":"33ca399c-05d9-43b3-9e2c-7b91843032de"},{"title":"et hic ut","done":false,"uuid":"58eda18a-79a5-4513-b81a-d644cb0a3fb0"},{"title":"est soluta voluptas","done":false,"uuid":"1dcec157-8cda-4b3c-8b76-1d6f336f691c"},{"title":"non dolorem porro","done":false,"uuid":"ee6ceede-8410-4abb-9ec7-437da1d404b6"},{"title":"molestiae enim facere","done":false,"uuid":"06a68c68-f489-4e3a-978d-9f84e6e93063"},{"title":"nam ratione possimus","done":false,"uuid":"08a1b1b7-e1b5-4b7c-a1f1-ef741d9909fd"},{"title":"nihil placeat laborum","done":false,"uuid":"c32d2100-f45c-4c34-a5c6-e1e27652933b"},{"title":"deleniti pariatur est","done":false,"uuid":"0ed2e192-fa24-472c-863f-baed64a9856e"},{"title":"dignissimos dolorem in","done":false,"uuid":"376dda48-f423-4331-8fa3-e8edf72c4e56"},{"title":"molestiae ut aliquid","done":false,"uuid":"497ea37e-29c2-4cbb-8e60-e24d582f471c"},{"title":"inventore qui expedita","done":false,"uuid":"2c328479-6338-4eb3-9435-99e50cb6b380"},{"title":"et commodi voluptatum","done":false,"uuid":"35b16aa5-4586-49dd-af56-a10a873e27f1"},{"title":"eum cum ut","done":false,"uuid":"2c936e67-73be-4634-a1a1-a880273456c1"},{"title":"culpa vel soluta","done":false,"uuid":"bdc3e93a-7624-4e73-bf20-d566ef5fc8f9"},{"title":"quia at fugit","done":false,"uuid":"c898a687-3b1b-43ad-abf6-f45b5597f3af"},{"title":"inventore pariatur voluptatem","done":false,"uuid":"731e4703-57ac-4488-a414-9431db7e92a0"},{"title":"sed minima et","done":false,"uuid":"4f95fcf2-27c0-4847-ac78-c685a281a59b"},{"title":"aliquid qui autem","done":false,"uuid":"75d09f7f-aa12-46c9-8046-b82631c3a5c2"},{"title":"et quam et","done":false,"uuid":"32549504-e354-45a3-89e3-5f98b07edd79"},{"title":"illum quia molestias","done":false,"uuid":"7e9d3ec3-20d5-4bf3-8f50-11c76ce5918d"},{"title":"fuga a et","done":false,"uuid":"f4f7d913-663f-4a7d-ac33-253fa2762b54"},{"title":"vero veritatis saepe","done":false,"uuid":"4c23b5cc-4a24-4b06-b5aa-508139a58be9"},{"title":"rerum voluptas aut","done":false,"uuid":"21dcfa85-ef26-4277-b223-8a819233b9b1"},{"title":"rerum excepturi ipsam","done":false,"uuid":"75b4552b-556a-40e7-85a7-6ad37b5ab2a0"},{"title":"ut a natus","done":false,"uuid":"a3984244-8beb-4494-ba9f-b62aa2e25312"},{"title":"inventore aliquam nihil","done":false,"uuid":"75edbed4-73ac-4486-9f3d-167c4d4bd84a"},{"title":"delectus repudiandae qui","done":false,"uuid":"4ecb1def-bb9c-4f61-8c37-bf88056880d0"},{"title":"qui ipsa et","done":false,"uuid":"69053f51-fa50-4f18-a9ae-243e85dd1b4b"},{"title":"eaque dolor qui","done":false,"uuid":"fac80e14-5610-4547-8d20-022616e1fb25"},{"title":"et dolorum ut","done":false,"uuid":"324208f0-5d56-4c17-8601-c928ce809c3b"},{"title":"dicta id reprehenderit","done":false,"uuid":"000486d6-f171-4d7f-83ee-62697e14577d"},{"title":"voluptas necessitatibus iusto","done":false,"uuid":"d16c41f2-a373-4811-9633-b97166095ea7"},{"title":"quo reiciendis sed","done":false,"uuid":"ccec2186-e945-4cca-ba70-2275eb066711"},{"title":"et voluptas rem","done":false,"uuid":"806ad30b-d68f-414d-a799-5f1abe199bc4"},{"title":"consequatur laborum praesentium","done":false,"uuid":"bdffb34e-f533-4202-9cdf-9844c7eb3759"},{"title":"nesciunt omnis non","done":false,"uuid":"2804cfce-3e11-4e3a-80a6-7126445e39ac"},{"title":"temporibus iure quia","done":false,"uuid":"b110a9de-88d2-4b14-83b1-c2a8de36bb45"},{"title":"a laudantium doloribus","done":false,"uuid":"ce68cba9-7a60-4288-b697-6a3bf092e903"},{"title":"nihil enim praesentium","done":false,"uuid":"2a0ed48f-f160-4556-b4a2-7c4b81959dd6"},{"title":"rem perferendis harum","done":false,"uuid":"4af30ffd-57ea-4224-9122-0c0879e234a3"},{"title":"voluptatem rerum aspernatur","done":false,"uuid":"6856abc6-7d89-4888-8b35-6f8854750bd2"},{"title":"labore quidem et","done":false,"uuid":"0014da74-3938-4315-bb5f-12e27a9fb1fc"},{"title":"fuga sed fugiat","done":false,"uuid":"5e7ff697-5f6b-45a2-9a3f-de4822b0ebb4"},{"title":"sint nulla exercitationem","done":false,"uuid":"431209d3-622a-42cb-a711-7e48be57dd1f"},{"title":"optio ex non","done":false,"uuid":"f2120c66-d10a-4dcf-9908-2c268cdbf9b6"},{"title":"nesciunt autem et","done":false,"uuid":"be4e7e0b-ac08-41ea-bddf-8f289008515b"},{"title":"culpa atque pariatur","done":false,"uuid":"320a0948-a293-4124-958e-1e73df8005b3"}]
  );
}