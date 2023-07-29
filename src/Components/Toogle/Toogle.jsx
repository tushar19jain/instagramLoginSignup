import { useState } from "react";
import './Signin.css'
import './Signup.css'
function Toogle(){
    let [state, setState] = useState(false)
    return (
        state  ?  
    <div className="Signup">
        <input type="email"placeholder="Email"/> 
        <br />
        <input type="text" placeholder="Full Name"/> 
        <br />
        <input type="text" placeholder="Phone number,username,or email" />
        <br />
        <input type="password"placeholder="Password"/>
        <br />
        <button>Sign up</button>
        <p>Have an account? <a  href="#" onClick={()=> setState(!state)}>log in</a></p>
    </div> 
    :
    <div className="Signin">
        <input type="text"placeholder="Phone number,username,or email" />
        <br />
        <input type="password"placeholder="Password"/>
        <br />
        <button >Sign in</button> 
        <p>Don't have account? <a  href="#" onClick={() => setState(!state)}>Sign up</a></p>
    </div>
    )
}
export default Toogle