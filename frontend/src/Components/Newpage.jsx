import React from 'react';
import { useLocation } from 'react-router-dom';


const NewPage = () => {
    const location = useLocation();
    const searchParams = location.state.data;
    // console.log(location.state.searchParamsString);
    // const dataString = searchParams.get('data');
    //console.log(searchParams);
  
    let data;
    try {
        data = searchParams
      //data = JSON.parse(searchParams); // Deserialize data
    } catch (error) {
      console.error('Error parsing data:', error);
      // Handle parsing errors
    }

  return (
    <div>
      <h1>New Page (Backend Data)</h1>
      {data && (
        <>
          <p>{data}</p>
        </>
      )}
      {!data && <p>Loading data...</p>} {/* Display loading state */}
    </div>
  );
};

export default NewPage;
