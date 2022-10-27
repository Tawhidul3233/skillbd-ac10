import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';

const Category = () => {

     // const [categories, setCategories] = useState()

     // useEffect( ()=>{
     //      fetch('http://localhost:5000/')
     //      .then(res => res.json())
     //      .then(data => setCategories(data))
     // },[]);

     return (
          <div>
               <h5> Find Categories </h5>
               {/* <div>
                    {
                         categories.map(category => <p key={category.id}>
                              <Link to={`/category/${category.category}`}> {category.category_name} </Link>
                         </p>)
                    }
               </div> */}
               <ButtonGroup vertical className='d-flex lg:d-block'>
                    <Link> <Button className='mt-3 '> Freelancing skill </Button></Link>
                    <Button className='mt-3 '> Learning English </Button>
                    <Button className='mt-3 '> Professional skill</Button>
                    <Button className='mt-3 '> Admission Test </Button>
                    <Button className='mt-3 '> Microsoft skill </Button>
               </ButtonGroup>
          </div>
     );
};

export default Category;