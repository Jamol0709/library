// //we should import Context folder and its settings
// import { DataContext } from '../Context';
// import React,{useContext, useState } from 'react';
// // import './App.css';

// export const Page =()=> {

// //this's how to bring Context
// const [Datas, setDatas] = useContext(DataContext);
// const [data, useData] = useState(Datas)

// //Search input
// const onSearch =(e)=> {
//     let res = Datas.filter((value)=>
//          value.title.includes(e.target.value)
//          )};
         
// //Sort or filter btn
// const onSort =(genre)=> {
//     let res = Datas.filter((value)=> value.genre ==='film')};
//   setDatas(res);;
//   setDatas(res);

// //Delete btn
// const onDelete = (id)=>{
//     let res=Datas.filter((value)=>value.id !== id)};
// this.setState({data:res});

// // Random data 
// const onRandom =()=> {
//     let res = Datas.map((value)=>{
//         return {...value, order:Math.random()};
//     })};
    
//     // Edit btn
//     const onEdit= (value, kay) => {
//            if (kay){
//             this.setState({active:null})
//             } else {
//             this.setState({
//         name:value.username,
//         phone:value.phone,
//         active : value.id,
//         });
//     }
//     };
//   return (
//     <div className="App">
        
     
   






// <input onClick={()=>onSearch(Datas.title)}> Search Input</input>



// <button onClick={()=>onSort(Datas.genre)}>Sort Buttn</button>

// <button onClick={()=>onDelete(Datas.value.id)}>delete</button>


// <button onClick={()=>onEdit(Datas.value, this.state.active===Datas.value.id)}>
//         {this.state.active===Datas.value.id ? 'save' : 'edit'}
// </button>

// {/* //Map with data */}

// <div>
//     {Datas.map((value) =>(
//       <div>
//         <div key={value.id}>
//         </div >
//          <div>
//          <div>
//            {value.id }{ value.title}
         
//          <h4>
//            {value.genre}
//         </h4>
//        </div>
//       </div>
   
//     </div>
//   ))};
// </div>
//  </div> );
// }

