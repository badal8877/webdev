// //  Import React library
// import React from "react";
// import "./TenderOfficeSection.css";

// function TenderOfficeSection() {
//   return (
//     <div className="TenderContainer">
//       <div className="TenderCss">Office Order</div>
//       <div className="TenderCss">Active Tender</div>
//     </div>
//   );
// }

// export default TenderOfficeSection;
// Import the React library, which is required for building React components
import React from "react";

// Import the CSS file for this component, which will style the HTML elements
import "./TenderOfficeSection.css";

// Define the TenderOfficeSection component, a functional component that returns JSX
function TenderOfficeSection() {
  // Return the JSX for this component, which will be rendered to the DOM
  return (
    // The outer div has a class of TenderContainer, which will center its contents
    <div className="TenderContainer">
       {/* The first inner div has a class of TenderCss, which will style it with a specific design */}
      <div className="TenderCss">Office Order</div>
      
       {/* The second inner div also has a class of TenderCss, which will style it the same way */}
      <div className="TenderCss">Active Tender</div>
    </div>
  );
}

// Export the TenderOfficeSection component as the default export, making it available for import in other files
export default TenderOfficeSection;