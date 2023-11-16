import './form.css';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDog, getDogs, reset_error } from "../../redux/actions/actions";
import validation from './validation';

const Form = ({temperaments, dogsNames})=>{
    const dispatch = useDispatch();
    const catchError = useSelector((state)=>state.global_Error);
    const [created, setCreated] = useState(false);
    const [errors, setErrors] = useState({});
    const [dogsData, setDogsData] = useState({ name: '', 
                                               minWeight: 0,
                                               maxWeight: 0,
                                               minHeight: 0,
                                               maxHeight: 0,
                                               life_span_min: 0,
                                               life_span_max: 0,
                                               temperaments:'',
                                               image:''
                                                });

    const handleChange = async(event) => {
        setDogsData({
          ...dogsData,
          [event.target.name]: event.target.value
        });
      }

      useEffect(() => {
        if (dogsData.name !== '' || 
            dogsData.minWeight !== 0 ||
            dogsData.maxWeight !== 0 ||
            dogsData.minHeight !== 0 ||
            dogsData.maxHeight !== 0 ||
            dogsData.life_span_min !== 0 ||
            dogsData.life_span_max !== 0 ||
            dogsData.image !== ''        
            ) {
          setErrors(validation(dogsData, dogsNames));
        }
    }, [dogsData, catchError]);


    
    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            const selectedTemperaments = Array.from(event.target.temperaments.selectedOptions).map(option => option.value);
            const newDog = {
                    name: dogsData.name.charAt(0).toUpperCase()+dogsData.name.slice(1).toLowerCase(), 
                    image: dogsData.image, 
                    height: [Number(dogsData.minHeight), Number(dogsData.maxHeight)].join(' - '), 
                    weight: [Number(dogsData.minWeight), Number(dogsData.maxWeight)].join(' - '), 
                    life_span: [Number(dogsData.life_span_min), Number(dogsData.life_span_max)].join(' - ') + ' years', 
                    temperament: selectedTemperaments
                };
            dispatch(addDog(newDog));
          
            dispatch(getDogs());

            if(catchError==='none'){
                setCreated(true);
                setDogsData({ name: '', 
                minWeight: 0,
                maxWeight: 0,
                minHeight: 0,
                maxHeight: 0,
                life_span_min: 0,
                life_span_max: 0,
                temperaments:'',
                image:''})      
            }
      
        } catch (error) {
            setErrors({creation: error.message})
        }
      }

    const handleCloseMessage =()=>{
        document.getElementById('temperaments').value=[];
        setCreated(false);
    }


    return (
    <div className="container">
        <form onSubmit={handleSubmit} className="form">
            <label htmlFor="name">🐶</label>
            <input  type="text"
                    name="name"
                    id="name"
                    value={dogsData.name}
                    onChange={handleChange}/>
            {errors.name !== '' && <span className="error-message"> {errors.name}</span>}
            <br />
            <div>⚖️ 
                <label htmlFor="minWeight"> min</label>
                <input  type="number" min="1" max="100" 
                        name="minWeight"
                        id="minWeight"
                        value={dogsData.minWeight}
                        onChange={handleChange}
                        />
                <label htmlFor="maxWeight"> max</label>
                <input  type="number" min="1" max="100" 
                        name="maxWeight"
                        id="maxWeight"
                        value={dogsData.maxWeight}
                        onChange={handleChange}
                        />
                {errors.minWeight !== '' && <span className="error-message"> {errors.minWeight}</span>}
                {errors.maxWeight !== '' && <span className="error-message"> {errors.maxWeight}</span>}
            </div>
            <br />
            <div>📏
                <label htmlFor="minHeight"> min</label>
                <input  type="number" min="1" max="100" 
                        name="minHeight"
                        id="minHeight"
                        value={dogsData.minHeight}
                        onChange={handleChange}
                        />
                <label htmlFor="maxHeight"> max</label>
                <input  type="number" min="1" max="100" 
                        name="maxHeight"
                        id="maxHeight"
                        value={dogsData.maxHeight}
                        onChange={handleChange}
                        />
                {errors.minHeight !== '' && <span className="error-message"> {errors.minHeight}</span>}
                {errors.maxHeight !== '' && <span className="error-message"> {errors.maxHeight}</span>}
            </div>
            <br />
            <div>❤️
                <label htmlFor="life_span_min"> min</label>
                <input  type="number" min="1" max="50" 
                        name="life_span_min"
                        id="life_span_min"
                        value={dogsData.life_span_min}
                        onChange={handleChange}
                        />
                <label htmlFor="life_span_max"> max</label>
                <input  type="number" min="1" max="25" 
                        name="life_span_max"
                        id="life_span_max"
                        value={dogsData.life_span_max}
                        onChange={handleChange}
                        />
                {errors.life_span_min !== '' && <span className="error-message"> {errors.life_span_min}</span>}
                {errors.life_span_max !== '' && <span className="error-message"> {errors.life_span_max}</span>}

            </div>
            <br />
            <label htmlFor="image">🖼️ url:</label>
            <input type="text"
                   name="image"
                   id="image"
                   value={dogsData.image}
                   onChange={handleChange}/>
               {errors.image !== '' && <span className="error-message"> {errors.image}</span>}
            <br />
            <label htmlFor="temperaments">🎭</label>
            <select id="temperaments" name="temperaments" multiple size='7' onChange={handleChange} className='selTemp'>
                {temperaments.map((temp)=>{
                    return <option key={temp.id} value={temp.id}>{temp.name}</option>
                })}
            </select>
            {errors.temperaments !== '' && <span className="error-message"> {errors.temperaments}</span>}
            <br />

            <button type="submit" disabled={Object.keys(errors).length > 0 || dogsData.name===''} className='submit-button' >Create</button>
        </form>
        {errors.creation !== '' && <span className="error-message">{errors.creation}</span>}

        {dogsData.image!==''?
            <img className='dogImage' src={dogsData.image} alt="❌" />
        :
            <img className='dogImage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAzI5kcxbq88NthmxTkhxPtRg0hN8FJJFs2A&usqp=CAU" alt="❌" />
        }
        
        {/* Error Message displayed when the dog is created */}
        {catchError!=='none' && catchError!==''?(
            <div className="catch-message">
                <span className='catch-error' id='catch-error' key='catch-error'>
                    <p>Error</p>
                    <p>Message: {catchError}</p>
                </span>
                <button onClick={()=>dispatch(reset_error())}>Close</button>
            </div>
        ):
        created && (
            <div className="success-message">
               <span className="dog-created" id="dog-created" key="dog-created">🐶 Dog created successfully! 🐶</span>
               <button onClick={handleCloseMessage} className="close-button">Close</button>
            </div>
            )
        }
    </div>
    )
}

export default Form