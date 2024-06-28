const Demo = ({Likes=0, Comment=""}) =>{

const color = ['red','blue','white'];
const loggedIn  =  true;
return(
    <>
    <ul style={{fontSize:'20px'}}>
    {color.map((color)=>(<li>{color}</li>))}
   </ul>

   <h1 style={{backgroundColor:"white",color:"black"}}>{loggedIn?'Admin' : 'User'}</h1>
   <h1>No of Likes : {Likes} </h1>
   <h1>Comments : {Comment}</h1>
   </>
    
)
}
export default Demo