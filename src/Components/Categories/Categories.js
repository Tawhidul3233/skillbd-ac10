import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';

const Categories = () => {

     const [categories, setCategories] = useState([])

     useEffect( ()=>{
          fetch('http://localhost:5000/categories')
          .then(res => res.json())
          .then(data => setCategories(data))
     },[]);

     return (
          <div>
               <h5> Find Categories </h5>
               <div>
                    {
                         categories.map(category => <ButtonGroup key={category.id} vertical className='d-flex lg:d-block'>
                          <Button href={`/categories/${category.id}`} className='mt-3 '> {category.name} </Button>
                         
                    </ButtonGroup>)
                    }
               </div>
          </div>
     );
};

export default Categories;