import classes from "./App.module.css"

import Header from "./components/header/Header";
import Todo from "./components/Todo"

function App() {
  return (
    <div className={classes.app}>
      <Header header={'Website todo'} />
      <Todo/>
    </div>
  );
}

export default App;
