import React from "react";
import TiltedCard from "../assets/TiltedCard/TiltedCard";

const Project = () => {
  return (
    <div className="main-project w-screen h-screen bg-emerald-900">
      project
      <TiltedCard
        imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
        altText="Kendrick Lamar - GNX Album Cover"
        captionText="Kendrick Lamar - GNX"
        containerHeight="300px"
        containerWidth="300px"
        imageHeight="300px"
        imageWidth="300px"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>
        }
      />
    </div>
  );
};

export default Project;
