// Import React library
import React from "react";

// Import the CSS file for this component
import "./BusinessSection.css";

// Define the BusinessSection component
function BusinessSection() {
  // Return the JSX for this component
  return (
    //  The outer div has a class of BusinessContainer, which will center its contents
    <div className="BusinessContainer">
       {/* The first inner div has a class of BusinessCss, which will style it accordingly */}
      <div className="BusinessCss">Transmission Business</div>
      
       {/* The second inner div also has a class of BusinessCss, which will style it the same way */}
      <div className="BusinessCss">Telecom Business</div>
    </div>
  );
}

// Export the BusinessSection component as the default export
export default BusinessSection;