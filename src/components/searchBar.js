import React, { useState, useEffect } from 'react';
import MyFilteringComponent from './search';
import CardGrid from './CardGrid';


const SearchBar = ({card, setCurrentId}, props) => {
  const [input, setInput] = useState('');
  const [items, setItems] = useState(card);
  const [subjectList, setSubjectList] = useState(card);

  const updateInput = async (input) => {
     const filtered = items.filter( card => {
      return card.subject.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setSubjectList(filtered);
  }
	
  return (
    <>
      <h1>Country List</h1>
      <MyFilteringComponent 
       input={input} 
       onChange={updateInput}
      />
      <CardGrid subjectList={subjectList}/>
    </>
   );
}

export default SearchBar