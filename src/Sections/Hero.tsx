import { Cheers } from "../customSVG"
import { CircleArrowDown } from "lucide-react"

const Hero = () => {
    return (
        <div className="flex flex-col justify-center items-center space-y-6">

        {/* Label DESIGN */}
        <div className="flex bg-[#FFC107] border border-[#C8AC57]  rounded-[4px] py-1 px-2 sm:justify-center gap-2">
            <Cheers  />
            <p className="text-[10px] text-[#1C3144] text-center">NEW: Generate Hilarious Jokes with our AI Joke Machine <CircleArrowDown size={14} className="inline-block"/></p>
        </div>

        {/* Hero TEXT */}
        <h1 className="text-center font-bold text-3xl" >
            Crack up any crowd with two <br/>clicks
        </h1>

        <p className="text-xs text-center max-w-[500px]">Generate, save your favorites, and become the life of the party with our AI Joke Generator</p>
    </div>

    )
}

export default Hero