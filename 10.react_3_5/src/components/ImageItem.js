import React from "react";

const ImageItem = ({ photo }) => {
  return (
    <div className="image_item">
      <img src={photo.urls.regular} alt={photo.description} />
    </div>
  );
};

export default ImageItem;
