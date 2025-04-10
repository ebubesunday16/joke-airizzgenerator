'use client'
import { JokeArray, type JokeArrayType } from '@/data/jokes'
import { getJokeTotalKeyword } from '@/utils/func'
import { Loader, Shuffle } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from './ui/button'

const JokeGenerator = () => {
    const [currentAnswer, setCurrentAnswer] = useState<JokeArrayType | null>(null)
    const [displayText, setDisplayText] = useState('')
    const [displayCategory, setDisplayCategory] = useState('')
    const [showLoading, setShowLoading] = useState(false)
    const [showShuffle, setShowShuffle] = useState(true)
    const [selectedCategory, setSelectedCategory] = useState('Flirty')
    const [selectedVibe, setSelectedVibe] = useState('any')
    const [isTyping, setIsTyping] = useState(false)
    const [isTypingCategory, setIsTypingCategory] = useState(false)
    const [fixLoadingConflict, setIsFixLoadingConflict] = useState(false)


    const categories = getJokeTotalKeyword()
    

    const typewriterEffect = (text: string, setStateFunc: React.Dispatch<React.SetStateAction<string>>, setTypingFunc: React.Dispatch<React.SetStateAction<boolean>>) => {
        setTypingFunc(true)
        let currentText = '';
        let index = 0;
        setStateFunc('');
        
        const interval = setInterval(() => {
            if (index < text.length) {
                currentText += text[index];
                setStateFunc(currentText);
                index++;
            } else {
                clearInterval(interval);
                setTypingFunc(false);
            }
        }, 30);

        return () => clearInterval(interval);
    }

    const generateRandomPrompt = (checkInputs: boolean = false) => {
        setIsFixLoadingConflict(checkInputs)
        
        // if (checkInputs && (selectedCategory === 'all' || selectedVibe === 'any')) {
        //     toast({
        //         title: "You need to select a category!",
        //         description: "Please select both a category and vibe before generating. Otherwise use the 'Blow My Mind' button",
        //         variant: "destructive",
        //     })
        //     return
        // }

        setDisplayText('')
        setDisplayCategory('')
        
        const ArrayOfJokeMatchingSelection =  JokeArray.filter(item => 
        item.keyword.replace('-', ' ') === selectedCategory);


        const randomIndex = Math.floor(Math.random() * ArrayOfJokeMatchingSelection.length)
        const newAnswer = ArrayOfJokeMatchingSelection[randomIndex]
        setCurrentAnswer(newAnswer)
        handleLoad(checkInputs)
        
        setTimeout(() => {
            typewriterEffect(newAnswer.setup,  setDisplayText, setIsTyping)
            setShowLoading(false)
            setShowShuffle(true)

            // Start punchline typewriter after setup content is done
            setTimeout(() => {
                    typewriterEffect(newAnswer.punchline, setDisplayCategory, setIsTypingCategory)
            }, newAnswer.setup.length * 30 + 500) // Wait for setup content to finish
        }, 500)
    }

    const handleLoad = (checkInputs: boolean) => {
        setShowLoading(true)
        if (!checkInputs){
            setShowShuffle(false)
        }
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                    <label className="block text-sm font-medium mb-2">
                        Select a Scenario
                    </label>
                    <select 
                        className="w-full p-2 border rounded-md bg-white"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map(category => (
                            <option key={category} value={category}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>
                
                
            </div>

            <div className="min-h-[100px] bg-gray-50 p-4 rounded-lg">
                {isTyping || displayText ? (
                    <div className="font-medium">
                        {displayText}
                        {isTyping && <span className="animate-pulse">|</span>}

                        <div className='flex justify-between items-center'>

                            {(isTypingCategory || displayCategory) && (
                            <div className="text-xs text-gray-600 italic mt-4">
                                {displayCategory}
                                {isTypingCategory && <span className="animate-pulse">|</span>}
                            </div>

                )}
                        </div>

                    </div>
                ) : null}
            </div>

            

            <div className="self-stretch flex flex-col sm:flex-row justify-between flex-1 pb-4 gap-x-12 gap-y-3">
                <Button 
                    className='border-2 border-black text-xs text-[163300] bg-[#FFC107]  hover:bg-[#333333] focus:active:bg-[#333333] hover:text-white active:hover:text-white shadow-[2px_2px_0_0_#163300]  flex-1 '
                    onClick={() => generateRandomPrompt(true)}
                    disabled={isTyping || isTypingCategory}
                >
                    GENERATE {' '}
                    {fixLoadingConflict &&showLoading && (<Loader className="animate-spin inline" />)}
                </Button>
                <Button
                    className=' shadow-[2px_2px_0_0_#163300] bg-white text-black hover:bg-[#1f1e1e] active:bg-[#1f1e1e] border-2 border-black text-xs  focus:active:bg-[#333333] hover:text-white active:hover:text-white  flex-1  '
                    onClick={() => generateRandomPrompt(false)}
                    disabled={isTyping || isTypingCategory}
                >
                    Blow My Mind {' '}
                    {showShuffle && (<Shuffle className="inline" />)}
                    {!fixLoadingConflict &&showLoading && (<Loader className="animate-spin inline" />)}
                </Button>
            </div>
        </div>
    )
}

export default JokeGenerator