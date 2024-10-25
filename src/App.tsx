import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="orange" content="red" active />
      <Button color="orange" content="blue" />
      <Button color="purple" content="#000" active />
      <Button color="purple" content="#00ff00" />
    </div>
  );
}

export default App;
