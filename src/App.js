import  React from 'react';

function App() {
  var  style1 = {
    color: "blue",
    fontSize :30,
    background :"orange"
   }
   var var1 ="Hello World";
   var var2 =(5*5);
   var var3 = 19;
   var func1 = function func1(){
     console.log("Some kind of function")
    };
     
     <div>
     <h1 style ={style1} title= "This is the Heading">Heading - JSX Method</h1>
      <p id="para1">This is a paragraph</p>
     <p className="para2">This is a second paragraph</p>
     <p>{var1} {var2}</p>
     <p>{var3 === 19 ? "True" :"False"}</p>
        <div>
          <label htmlFor="input1">Some Data</label>
          <input id="input1" name="input1"/>
          <br/>
          </div>
      <button onClick={func1}>Click Me</button>
    </div>
}

export default App;
