import React, { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(()=>{
    document.title= `${title} - FLY_PLANE`
    },[title])
};

export default useTitle;