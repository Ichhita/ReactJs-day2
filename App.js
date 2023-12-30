
import './App.css';
import ToDoList from './day 2/Todo';
// import DisplayDataButton from './day 1/data';
// import Counter from './day 1/counter';
// import './day 1/header.css' ;
// import'./day 1/footer.css';
// import'./day 1/sideNav.css';
// import './day 1/main.css';
import UseList from './day 2/add';
import ClickCounter from './day 2/Clickcounter';

function App() 
{
    return (
   <div className="App">
    {/* <DisplayDataButton/> 
    <Counter/>  
      <h1 className="box">HEADER</h1>
      <h1 className="footer">FOOTER</h1>
      <h1 className="nav"></h1>
      <h1 className="text">SIDENAV</h1>
      <h1 className="main"></h1> 
      <h1 className="letter">MAIN CONTENT</h1> */}
      <ClickCounter/>
      <UseList/> 
      <ToDoList/>
    </div>
  )};


export default App;
