/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
      //import ClassComponent from './ClassComponent';
  import PropsExample from './PropsExample'
  function App() {
      return (
        <section>
        <PropsExample name="ravi" age="20"/>
        <PropsExample name="suresh" age="90"/>
           {/*<p>destiny</p>
           <h1>peace</h1>
           <ClassComponent/>
           <img src="https://www.shutterstock.com/image-photo/prakasam-barrage-vijayawada-india-260nw-1633594330.jpg" alt="first" />*/}
        </section>
      )
     }
  export default App
