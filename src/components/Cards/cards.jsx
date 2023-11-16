import './cards.css'
import Card from "../Card/card";

const Cards = ({dogs, handlePage, page, totalPages}) => {
    console.log(page);
    return (<div className='cards-container'>
                <div className="cards">
                    {   
                        dogs.map((dog) => {
                            return <Card 
                                key={dog.id}
                                id={dog.id}
                                name={dog.name}
                                height={dog.height}
                                weight={dog.weight}
                                temperament={dog.temperament}
                                image={dog.image}
                            />
                        })
                    }
                </div>
                {dogs.length==0 &&<span className="noDogFound">🤷🏾No Dog Found, please change your search criteria🧐</span>}
                <div className="pagination">
                    <div className="page-button prev" onClick={() => handlePage(page-1)}></div>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <div
                                key={index + 1}
                                className={`page-button ${index + 1 === page ? 'active' : 'inactive'}`}
                                onClick={() => handlePage(index + 1)}
                            >
                                {index + 1}
                            </div>
                        ))}
                    <div className="page-button next" onClick={() => handlePage(page+1)}></div>
                </div>
        </div>
    );
}

export default Cards;
