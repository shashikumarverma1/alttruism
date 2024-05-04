
import './App.css';

function App() {
  return (
    <div className="CardContainer" >
  {
    [1,1,1,1,1].map((e)=>{
      return (
      <div className="cardContainer">
        <div>
       
       <img src={'https://reactnative.dev/img/tiny_logo.png'} alt="Logo" />
        </div>
        <div>
          <p style={{}}>created by  <img src={'https://reactnative.dev/img/tiny_logo.png'} style={{width:10, height:10}}  alt="Logo" /> ramu</p>
          <p>market cap {'4.5k'}</p>
          <p>reply {'13'}</p>
          <p>IGOMEOW (ticker: IGOMEOW):
I GO MEOW I GO MEOW I GO MEOW I GO MEOW I GO MEOW I GO MEOW I GO MEOW I GO MEOW I GO MEOW I GO MEOW I GO MEOW I GO MEOW I GO I GO MEOW I GO MEOW I GO MEOW I GO MEOW I GO MEOW I GO MEOW I GO MEOW I GO MEOW I GO MEOW MEOW I GO MEOW I GO MEOW</p>
        </div>
      </div>
      )
    })
  }
    </div>
  );
}

export default App;
