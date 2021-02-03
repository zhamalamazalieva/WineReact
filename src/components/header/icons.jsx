import React from 'react';
import {IconsData} from './const';
import Search from './search/index';
const Icons = () => {

    const [activeSearch, setActiveSearch] = React.useState(false);
    const [activeCart, setActiveCart] = React.useState(false);
    const [activeMenu, setActiveMenu] = React.useState(false);


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
        <>
     
        <div className='row header__icons icons'>
           {activeSearch && (
            <Search/>
        )}
            {IconsData.map((item, index) => {
                    return(
                         <div className="icons__item"
                         onClick = {()=> {
                                    switch (index) {
                                        case 0:
                                            setActiveSearch(true)
                                            break;
                                        case 0:
                                            setActiveCart(true)
                                            break;
                                        case 0:
                                            setActiveMenu(true)
                                            break;
                                        default:
                                            break;
                                    }
                                }
                            }>
                            {item}
                        </div>
                    )
            })}
        </div>
        </>
    )
}

export default Icons;
