import{r as n,j as s}from"./index-BtQMCz1v.js";import{P as e}from"./index-DKwoqn4X.js";const c="_list_1n8gn_1",p="_image_1n8gn_6",t={list:c,image:p},l=({cast:i,fetchMovieCast:a})=>(n.useEffect(()=>{a()},[a]),s.jsx("div",{children:s.jsx("ul",{className:t.list,children:i.length?i.map(r=>s.jsxs("li",{children:[s.jsx("img",{src:`https://image.tmdb.org/t/p/w500/${r.profile_path}`,alt:r.name,className:t.image}),s.jsx("p",{children:r.name}),s.jsxs("p",{children:["Character: ",r.character]})]},r.id)):s.jsx("p",{children:"No known cast"})})}));l.propTypes={cast:e.arrayOf(e.shape({id:e.number.isRequired,character:e.string.isRequired,profile_path:e.string.isRequired,name:e.string.isRequired})).isRequired,fetchMovieCast:e.func.isRequired};export{l as default};