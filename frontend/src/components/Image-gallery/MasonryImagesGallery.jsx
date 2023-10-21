
import React from "react";
import Masonry from "react-responsive-masonry";
import galleryImages from './galleryImages';

const MasonryImagesGallery = () => {
  const breakpointColumnsObj = {
    default: 4,
    992: 3,
    768: 2,
    350: 1
  };
  
  return (
    <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
        {galleryImages.map((item,index) => (
          <img 
            className="masonry__img"
            src={item} 
            key={index} 
            alt="" 
            style={{ "width":"100%", "display":"block", "borderRadius":"10px" }}
          />
        ))}
    </Masonry>
  );
};

export default MasonryImagesGallery;
