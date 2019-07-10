import React from 'react';

const Hotel_listing = (hotel) => {
    const { Name, Facilities } = hotel;
    const stars = <span className='hotel__stars'>{'⭐️'.repeat(hotel.StarRating)}</span>;

    return (
        <div className='hotel'>
            <img className='hotel__image' src="https://source.unsplash.com/270x170/?hotel,building" alt={hotel.name}/>
            <div className="hotel__content">
                <h4 className='hotel__name'>{Name} {stars}</h4>
                <ul className='hotel__facilities-list'>
                    { Facilities && Facilities.map( (facility, i) => <li key={i} className='hotel__facilities-item'>{facility}</li> )}
                </ul>
            </div>
        </div>
    );
};

export default Hotel_listing;