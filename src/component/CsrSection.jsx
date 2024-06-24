// Import React library
import React from "react";

// Import the CSS file for this component
import "./CsrSection.css";

// Define the CsrSection component
function CsrSection() {
  // Return the JSX for this component
  return (
    //  The outer div has a class of CsrContainer, which will center its contents
    <div className="CsrContainer">
       {/* The first inner div has a class of CsrCss, which will style it accordingly */}
      <div className="CsrCss">CSR Photos</div>
      
       {/* The second inner div also has a class of CsrCss, which will style it the same way */}
      <div className="CsrCss">CSR Details</div>
    </div>
  );
}

// Export the CsrSection component as the default export
export default CsrSection;