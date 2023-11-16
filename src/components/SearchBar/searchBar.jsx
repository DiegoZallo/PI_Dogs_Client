import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { filter, order } from "../../redux/actions/actions"; 
import './searchBar.css';


const SearchBar = ({onSearch, temperaments, setPage, setFilterCond, filterCond, setName, name})=>{
    const dispatch = useDispatch();
   
    useEffect(()=>{
      dispatch(filter(filterCond, name))
      dispatch(order(filterCond.order))
    },[filterCond])

    const handleSrchChange = (event)=> {
       setName(event.target.value)
    }
    
    const handleOpChange = async (event)=>{
      event.target.name === 'temperaments' && setFilterCond({...filterCond, temp: event.target.value});
      event.target.name === 'addedBy' && setFilterCond({...filterCond, addedBy: event.target.value});
      event.target.name === 'order' &&  setFilterCond({...filterCond, order: event.target.value});
      setPage(1)
   }    

   const cleanAll=()=>{
      setFilterCond({temp:'all', addedBy:'all', order:'ascendent'});
      setName('');
   }
    
    return (
       <div className="searchBar">
         <div className="search">
            <input className="input-button" type='search' onChange={handleSrchChange} value={name} id='search'/>
            <button className="search-button" onClick={onSearch}>🔎 Breed</button>
         </div>
         
         <div className="filters">
            <label htmlFor="temperaments">Temperaments</label>
            <select name="temperaments" id="temperaments" onChange={handleOpChange} value={filterCond.temp}>
               <option key='all' value='all'>All</option>
               {temperaments.map((temp)=>{
                  return <option key={temp.id} value={temp.name}>{temp.name}</option>
               })}
            </select>
            
            <label htmlFor="addedBy">Added by</label>
            <select name="addedBy" id="addedBy" onChange={handleOpChange} value={filterCond.addedBy}>
               <option value="all">All</option>
               <option value="me">Me</option>
               <option value="others">Others</option>
            </select>
         </div>
         
         <div className="orders">
            <label htmlFor="order">Order</label>
            <select name="order" id="order" onChange={handleOpChange} value={filterCond.order}>
               <option value="ascendent">Breed 🡱</option>
               <option value="descendent">Breed 🡳</option>
               <option value="weightAsc">Weight 🡱</option>
               <option value="weightDesc">Weight 🡳</option>
            </select>
         </div>
         <div className="clean">
            <button className="clean-button" onClick={cleanAll}>Clean 🧹</button>
         </div>
       </div>
    )
}

export default SearchBar