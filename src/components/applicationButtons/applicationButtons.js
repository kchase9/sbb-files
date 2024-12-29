// import React, { useState, useEffect } from 'react';

// const ApplicationButtons = () => {
//   const [hasRegistration, setHasRegistration] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const checkRegistration = async () => {
//       try {
//         // Get user ID from JWT token
//         const token = localStorage.getItem('token');
//         const userId = JSON.parse(atob(token.split('.')[1])).userId;

//         // Fetch registration status
//         const response = await fetch(`http://localhost:5000/api/registrations/user/${userId}`, {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch registration status');
//         }

//         const data = await response.json();
//         setHasRegistration(!!data.registration); // Will be true if registration exists
//       } catch (err) {
//         console.error('Error checking registration:', err);
//         setError('Failed to check registration status');
//       } finally {
//         setLoading(false);
//       }
//     };

//     checkRegistration();
//   }, []);

//   if (loading) {
//     return <div className="widget-col">Loading...</div>;
//   }

//   if (error) {
//     return <div className="widget-col text-red-600">{error}</div>;
//   }

//   return (
//     <div id='app-nav-btn' className='row btn-container'>
//       <div className='widget-col'>
//         {hasRegistration ? (
//           <a href='/client-review-app' className='btn btn-green'>
//             Review Application
//           </a>
//         ) : (
//           <a href='/sb-registration' className='btn btn-green'>
//             See Application
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ApplicationButtons;

import React, { useState, useEffect } from 'react';

const ApplicationButtons = () => {
  const [hasRegistration, setHasRegistration] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkRegistration = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No authentication token found');
        }

        // Decode the token to get userId
        const payload = JSON.parse(atob(token.split('.')[1]));
        const userId = payload.userId;

        // First try to get registrations and check if any exist for this user
        const response = await fetch(`http://localhost:5000/api/registrations?userId=${userId}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // Check if there are any registrations for this user
        // Assuming the API returns an array of registrations or a paginated result
        setHasRegistration(
          Array.isArray(data) ? data.length > 0 : 
          data.registrations ? data.registrations.length > 0 : false
        );

      } catch (err) {
        console.error('Error checking registration:', err);
        // Set a more user-friendly error message
        setError(err.message === 'No authentication token found' 
          ? 'Please log in to view your applications' 
          : 'Unable to check registration status');
      } finally {
        setLoading(false);
      }
    };

    checkRegistration();
  }, []);

  if (loading) {
    return <div className="widget-col">Loading application status...</div>;
  }

  if (error) {
    return <div className="widget-col text-red-600">{error}</div>;
  }

  return (
    <div id='app-nav-btn' className='row btn-container'>
      <div className='widget-col'>
        {hasRegistration ? (
          <a href='/client-review-app' className='btn btn-green'>
            Review Application
          </a>
        ) : (
          <a href='/sb-registration' className='btn btn-green'>
            See Application
          </a>
        )}
      </div>
    </div>
  );
};

export default ApplicationButtons;