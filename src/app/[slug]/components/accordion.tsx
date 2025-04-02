import ToggleIcon from './toggleIcon'

const Accordion = ({key, answer, question}: {key: string, answer: string, question: string}) => {
    
    return (
        <li 
        className="bg-white shadow p-4 border-b border-black rounded-t-[4px] text-[#212529]"
        id={key}>
            
            <div className='flex flex-col justify-between  cursor-pointer relative'>
                <div className='gap-2'>
                    <p className="font-medium">{question}</p>
                </div>
                
                <ToggleIcon answer={answer}/>
                
            </div>
            
            
        </li>
    )
}

export default Accordion