import Demo from './Demo';
import Like from './Like';
import Togglelike from './Togglelike';

function App() {
  const name1 = 'ajay'
  const x= 10;
  const y=5;
  const style_h2= {
    color:'white',
    fontSize: '40px'
  }
  const color = ['red','blue','white'];

  return (
    <>
     <h1 style={{color:'white',fontSize:'50px',backgroundColor:'blue'}}>My APP</h1>
     <h2 style={style_h2}>{name1}</h2>
     <h2 className='test'>sum of {x} and {y} is {x+y}</h2>
     <ul style={{color:'yellow', fontSize:'30px'}}>
      <li>{color[0]}</li>
      <li>{color[1]}</li>
     </ul>
    <Demo Likes={10} Comment='Hi this is a comment' />

    <Like/>
    <Togglelike/>
  </>
  )
}
export default App
