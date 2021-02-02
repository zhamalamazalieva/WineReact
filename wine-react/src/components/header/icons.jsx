import React from 'react';
import {IconsData} from './const';
const Icons = () => {
    const [activeSearch, setActiveSearch] = React.useState(false);
    const handleClick = () => {
        setActiveSearch(activeSearch ? false:true)
    }
    const SearchRef = React.useRef();
    const SearchWrapperRef = React.useRef();
    const handleClickOutside = (event) => {
        if(!event.path.includes(SearchRef.current)){
            setActiveSearch(false)
        }
    }
    React.useEffect(()=> {
       if(SearchWrapperRef.current){
           SearchWrapperRef.current.addEventListener("click", handleClickOutside)
       }
    }, [activeSearch])
    return (
        <div className='row header__icons icons'>
            {IconsData.map(item => {
                    return(
                         <div className="icons__item">
                            {item}
                        </div>
                    )
            })}
        </div>
    )
}

export default Icons;
