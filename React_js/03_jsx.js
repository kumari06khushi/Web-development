
// const element = React.createElement('h1',{id:'title'}, "Hello coder Armmy");

// const element2 = React.createElement('div', null,

// React.createElement('h1',null,"hello"),
// React.createElement('h2',null,"hi"));

// jsx: javascript XML: look like Html(beble)
// jsx-->React.createElement()--> React element(JS object)-->Real DOM(HTML ELEMENT)
//   bable                    react                         reactDOM
 // <h1 id="title">hello coder army</h1> --> React.createElement('h1',{id:'title'}, "Hello coder Armmy")--> {type: "h1", props:{id:"title", children: "Hello Coder army"}} --> <h1 id="title">hello coder army</h1> 


 //**** element2 rap-up  in react  */

//  React.createElement('div',null,  React.createElement("h1",null,"hello coder army"),
// React.createElement("h2",null,"kaise ho")
// )
//  const element2 = (<div>
//   <h1> hell</h1>
//  <h2> hii</h2>
//  </div>);


//*** */ REACT COMPONENT ***//

// function App(name){
//     return(
//        <h1> Hello  Khushi {name}</h1>
//     );
// }

//const a = App("rohit");
// text/element: javascript ka expression app iske ander likh skte 
//number ,string and arry ---> display And  true ,flase , null, undefined , object(error ) ---> not display

//const element = <h1> Hello coder { [10,40]}</h1>

//const element = <h1 id="title" className="first" >Hello coder army</h1>

// function App(props){
//     return(
//         <h1> How are you { props.name} {props.age}</h1>
//     )
// }
// {
//name: "khushi",
// age : 30
// }
// React.createElement("APP")
 //const element = <App name="Khushi" age={30}></App>

///const courses = ["HTML", "css","javascript"," react"];
//** *  {[<li>HTML</li>, <li>css</li>, <li>javascript</li>,<li>react</li>]}
// const element = (
//     <ul>
//   {courses.map(courses=><li>{courses}</li>)}
//     </ul>
// )



//******  min project  ****//
function Header({props}){
    return (
        <h1> {name} Welcome to election commission </h1>
    )
}

const props ={
    name: "Khushi"
}
const {name}= props;


function Main({user}){
    return(
        <>
        <h1> This information about us</h1>
        <h2> Hi { user.name}</h2>
        <h3>{ user.Age >= 18?"Your are eligible for vote":"your not eligible for vote"}
            <p> Your city is {user.City}</p>
        </h3>
        </>
    )
}

function Footer(){
    return(
        <h3> Thank you</h3>
    )
}

 function App(){
    return(
/* <div>
<Header></Header>
<Main></Main>
</div> */
//** or **/
<>
<Header name="Khushi"></Header>
<Main user={{name:"Khushi", Age:18 ,City: "nawada"}}></Main>
<Footer />
</>
    )
 }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

//root.render(App());  //or root.render(App/>);
//root.render(a);
