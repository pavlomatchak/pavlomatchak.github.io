import{r as s,j as e,a as n,A as c}from"./index-BtQMCz1v.js";import{M as m}from"./MoviesList-CUKPQOtf.js";import"./index-DKwoqn4X.js";const u=()=>{const[o,r]=s.useState([]);return s.useEffect(()=>{async function a(){const i={headers:{Authorization:`Bearer ${c}`}};n.get("https://api.themoviedb.org/3/trending/movie/day",i).then(({data:t})=>{r(t.results)}).catch(t=>console.error(t))}a()},[]),e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Trending today"}),e.jsx(m,{movies:o})]})};export{u as default};