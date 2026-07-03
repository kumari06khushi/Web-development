
// attributes ={
//     className:"element",
//     id:"first",
//     style:{fontSize:"30px",
//         backgroundColor:"orange",
//         color:"white"
//     }
// }

// element ={
//     tag:"h1",
//     textContent:"hello coder army",
//     className:"element",
//     id:"first",
//       style:{fontSize:"30px",
//         backgroundColor:"orange",
//         color:"white"
//     }
// }

function createElement(tag,attributes,children){
const element = document.createElement(tag);
element.textContent = children;

for(const key in attributes){
    if(key==='style'){
        Object.assign(element.style,attributes.style);
    }
    else{
element[key]= attributes[key];
}
}


return element;

}


// const element1 = createElement("h1",{className:"element",id:"first",style:{fontSize:"30px",backgroundColor:"orange",color:"white"}},"hello coder army");

// const element2 = createElement("h2",{className:"element",id:"second",style:{fontSize:"20px",backgroundColor:"pink",color:"blue"}},"hello world");


// create a h1 element using js

// const element1 = document.createElement('h1');
// element1.textContent = "Hii miss khushi";
// element1.className='element';
// element1.id = 'first';
// element1.style.fontSize ="20px";
// element1.style.backgroundColor = "pink";
// element1.style.color = "green";


// const element2 = document.createElement('h1');
// element2.textContent = "Hello world";
// element12.className='element';
// element2.id = 'first';
// element2.style.fontSize ="20px";
// element2.style.backgroundColor = "pink";
// element2.style.color = "green";


//  const root = document.getElementById('root');
//  root.append(element1);
//  root.append(element2);



/**costom react */

const React ={
     createElement: function(tag,attributes,children){
const element = document.createElement(tag);
element.textContent = children;

for(const key in attributes){
    if(key==='style'){
        Object.assign(element.style,attributes.style);
    }
    else{
element[key]= attributes[key];
}
}

return element;

}
}


// const element1 = React.createElement("h1",{className:"element",id:"first",style:{fontSize:"30px",backgroundColor:"orange",color:"white"}},"hello coder army")

// const element2 = React.createElement("h2",{className:"element",id:"second",style:{fontSize:"20px",backgroundColor:"pink",color:"blue"}},"hello world")



//  const root = document.getElementById('root');
//  root.append(element1);
//  root.append(element2);


  const ReactDOM ={
    render: function(child,parent){
        parent.append(child);
    }
  }

  const element1 = React.createElement("h1",{className:"element",id:"first",style:{fontSize:"30px",backgroundColor:"orange",color:"white"}},"hello coder army")

const element2 = React.createElement("h2",{className:"element",id:"second",style:{fontSize:"20px",backgroundColor:"pink",color:"blue"}},"hello world")



 const root = document.getElementById('root');
 ReactDOM.render(element1,root);
  ReactDOM.render(element2,root);
