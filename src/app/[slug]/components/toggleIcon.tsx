'use client'
import { CircleChevronDown } from 'lucide-react'
import React from 'react'

const ToggleIcon = ({answer}: {answer: string}) => {
    const [openSetup, setOpenSetup] = React.useState(false)
    
    const toggleClick = () => {
        setOpenSetup(prev => !prev)
    }
    
  return (
    <div
        
    >
            <div 
            onClick={toggleClick}
            className={`absolute right-0 top-1/2 -translate-y-1/2 transition-transform duration-300 ease-in-out} ${openSetup ? 'rotate-180' : 'rotate-0' }  }`  }>
                    <CircleChevronDown className='' />
            </div>

            {openSetup && (
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSetup ? 'max-h-24 text-sm opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>

                <p>{answer}</p>
            </div>
            ) }
        
    </div>





  )
}

export default ToggleIcon
