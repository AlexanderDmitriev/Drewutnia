import React, { useEffect, useState } from 'react';
import { useLoadScript } from '@react-google-maps/api';

//Place ID: ChIJAws-UlJaFkcRr4QzIjHozgE

const libraries = ['places']; // IMPORTING 'PLACES' LIBRARY FROM GOOGLE MAPS

export const GoogleMapsReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries,
  });

  useEffect(() => {
    if (isLoaded && !loadError) {
        const mapDiv = document.createElement("div"); // CREATING A DIV ELEMENT TO HOST SERVICE
        mapDiv.style.display = "none";
        document.body.appendChild(mapDiv);

        const service = new window.google.maps.places.PlacesService(mapDiv); // INITIALIZING PLACES SERVICE
        service.getDetails(
            {
                // TO GET PLACE ID VISIT: https://developers.google.com/maps/documentation/places/web-service/place-id
                placeId: "ChIJAws-UlJaFkcRr4QzIjHozgE", // THIS IS PLACE ID OF 'TOUR EIFFEL' IN PARIS, FRANCE, PUT YOUR PLACE ID OF THE PLACE TO FETCH REVIEWS
                fields: ["reviews"],
            },

            (place, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                    setReviews(place.reviews); // UPDATING STATE WITH REVIEWS RECEIVED
                }
            }
        );

        return () => {
            document.body.removeChild(mapDiv); // CLEANUP BY REMOVING DIV ELEMENT
        };
    }
}, [isLoaded, loadError]);

  return (
    <>
      {reviews?.map(review => (
        <div key={review.id}>
          {review.profile_photo_url && (
            <img
              src={review.profile_photo_url}
              alt={`${review.author_name}'s profile`}
              referrerPolicy="no-referrer" //? TO REMOVE REFERRER FROM IMAGE REQUEST
            />
          )}
          <p>{review.author_name}</p>
          <p>{review.rating}</p>
          <p>{review.time}</p>
          <p>{review.text}</p>
        </div>
      ))}
    </>
  );
};
