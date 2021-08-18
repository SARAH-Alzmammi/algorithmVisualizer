export default function delay (speed) { 
 return new Promise(resolve => { 
     setTimeout(() => { resolve('') }, speed); 
 }) 
}
