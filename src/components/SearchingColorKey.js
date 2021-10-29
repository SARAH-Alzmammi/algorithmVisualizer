import './css/ColorKey.css'

const SearchingColorKey = () => {
 return (
  
  <div className="colorkey-container">

   <div className="row-Container">

    <span className=" sqr ProcessingSqr"></span>
    <p>Processing</p>

   </div>

   
   <div className="row-Container">

<span className=" sqr notSqr"></span>
<p>Not Found  </p>

   </div>
   
   <div className="row-Container">

<span className=" sqr yestSqr"></span>
<p>Founded</p>

   </div>
   

  </div>
 
 );
}
 
export default SearchingColorKey;