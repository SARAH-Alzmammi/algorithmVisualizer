import './css/ColorKey.css'

const ColorKey = () => {
 return (
  
  <div className="colorkey-container">

   <div className="row-Container">

    <span className=" sqr ProcessingSqr"></span>
    <p>Processing</p>

   </div>

   
   <div className="row-Container">

<span className=" sqr notSqr"></span>
<p>Not Sorted</p>

   </div>
   
   <div className="row-Container">

<span className=" sqr yestSqr"></span>
<p>Sorted</p>

   </div>
   

  </div>
 
 );
}
 
export default ColorKey;