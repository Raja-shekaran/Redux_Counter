import Counter from "./features/counter/Counter";

function App() {
  return (
    <div className="App">
     <Counter />
    </div>
  );
}

export default App;


// import {compose, pipe} from 'lodash/fp'
// import './App.css';


// Curring

// // function add(a,b){
// //   return function(b)
// //   {
// //     return a + b
// //   }
// // }

// // const add2 = a=> b=> c => a+b+c;

// // console.log(add2(6)(4)(12));

// let input = " Subscribe    "

// const trim = str => str.trim();
// const wrap = type => str => `<${type}>${str}</${type}>`;
// const toLowerCase = str => str.toLowerCase();

// //const transform = compose(wrap, toLowerCase, trim)
// const transform = pipe(trim, toLowerCase, wrap("div"));

// console.log(transform(input));
