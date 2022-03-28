import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategory, selectSubcategory } from '../features/menu/menuSlice';
import Button from './Button';
import TabButton from './TabButton';

const MainMenu = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state)=>state.menu.categories.filter(m=>!m.parent));
    const selectedCategory = useSelector((state) => state.menu.selectedCategory);
    const selectedSubcategory = useSelector((state) => state.menu.selectedSubcategory);
    const subCats = useSelector((state)=>state.menu.categories.filter(m=>{
        if (m.parent && m.parent === selectedCategory){
            return true;
        }
    }))

    useMemo(()=>{
        console.log(subCats);
        dispatch(selectSubcategory(subCats[0].id));
    },subCats);

    const handleCatClick = (id)=>{
        dispatch(selectCategory(id));
    }

    const handleSubCatClick = (id) => {
        dispatch(selectSubcategory(id));
    }
  return (
    <div className='container'>
          {/* <pre>{JSON.stringify(subCats,null,2)}</pre> */}
          <div className='flex flex-row justify-center'>
              {
                  categories.map(c => (<Button key={c.id} title={c.name} active={selectedCategory === c.id} onClick={() => {
                      handleCatClick(c.id);
                  }} />))
              }
          </div>
          <div className='flex flex-row justify-center'>
              {
                  subCats.map(c => (<TabButton key={c.id} title={c.name} active={selectedSubcategory === c.id} onClick={() => {
                      handleSubCatClick(c.id);
                  }} />))
              }
          </div>
        

    </div>
  )
}

export default MainMenu