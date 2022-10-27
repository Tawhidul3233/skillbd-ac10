import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Category = () => {
     return (
          <div>
               <h3>Find Categories </h3>
               <ButtonGroup vertical className='d-flex lg:d-block'>
                    <Button className='mt-3 '> Freelancing skill </Button>
                    <Button className='mt-3 '> Learning English </Button>
                    <Button className='mt-3 '> Professional skill</Button>
                    <Button className='mt-3 '> Admission Test </Button>
               </ButtonGroup>
          </div>
     );
};

export default Category;