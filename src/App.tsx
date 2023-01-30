import Egg from "./components/Egg/Egg";
import "./App.css";

const totalEggs = 5;

const App = (): JSX.Element => {
  const eggs = Array(totalEggs).fill("");

  return (
    <div className="container">
      <ul className="eggs">
        {eggs.map((egg, position) => (
          <li key={position}>
            <Egg />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
