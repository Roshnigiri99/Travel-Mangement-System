import React, { useState, useEffect } from 'react';
import TourCard from '../../shared/TourCard';
import tourData from '../../assets/Data/tours';
import { Col } from 'reactstrap';
import { BASE_URL } from './../../utils/config';

const FeaturedTourList = () => {
  const [featuredTours, setFeaturedTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedTours = async () => {
      try {
        const response = await fetch(`${BASE_URL}/tours/search/getFeaturedTour`);
        console.log('Response status:', response.status);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          setFeaturedTours(data);
        } else {
          throw new Error('Response is not valid JSON');
        }

        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchFeaturedTours();
  }, []);

  return (
    <>
      {loading && <h4>Loading.....</h4>}
      {error && <h4>{error}</h4>}
      {!loading && !error && (
        featuredTours.map((tour) => (
          <Col lg="3" md="4" sm="6" className="mb-4" key={tour._id}>
            <TourCard tour={tour} />
          </Col>
        ))
      )}
    </>
  );
};

export default FeaturedTourList;

