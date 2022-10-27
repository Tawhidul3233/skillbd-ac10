import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CoursesDetails = ({}) => {
     const details = useLoaderData()
     const {id } = details
     console.log(id)
     return (
          <div>
               deeeeeeeeeeeee
          </div>
     );
};

export default CoursesDetails;