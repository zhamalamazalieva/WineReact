import React from 'react';

const Icons = () => {
    const [activeSearch, setActiveSearch] = React.useState(false);
    const handleClick = () => {
        setActiveSearch(activeSearch? false:true)
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
            {activeSearch &&(
                <div 
                className='icons__item'
                onClick={setActiveSearch(activeSearch ? false:true)}
                >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11.7666" cy="11.7666" r="8.98856" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.0183 18.4851L21.5423 22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </div>
            )}
            <div className='icons__item'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7729 9.30504V6.27304C15.7729 4.18904 14.0839 2.50004 12.0009 2.50004C9.91688 2.49104 8.21988 4.17204 8.21088 6.25604V6.27304V9.30504" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7422 21.0004H7.25778C4.90569 21.0004 3 19.0954 3 16.7454V11.2294C3 8.87937 4.90569 6.97437 7.25778 6.97437H16.7422C19.0943 6.97437 21 8.87937 21 11.2294V16.7454C21 19.0954 19.0943 21.0004 16.7422 21.0004Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
            <div className='icons__item'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
            </svg>
            </div>
          
        </div>
    )
}

export default Icons;
