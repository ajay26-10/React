import Coursecard from "./Coursecard"
import courses from '../courses.json'


const Cards = () => {
  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
      {
        courses.map((coursedetails)=>(
          <Coursecard key={coursedetails.id} course={coursedetails} />
        )
      )
    
      }
    
</div>
    </>
  )
}

export default Cards