import React, {useContext} from 'react';
import {Context} from "./components/Wrapper";

export default function App(props: any): JSX.Element {
 const context = useContext(Context);

 return (
   <div className="App">
     <header className="App-header">
       <select value = {context.locale} onChange={context.selectLanguage}>
         <option value= 'en'>English</option>
         <option value= 'fr'>French</option>
         <option value= 'es'>Spanish</option>
       </select>
     </header>
   </div>
 );
}
