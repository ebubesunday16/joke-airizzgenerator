import { HeartLogo } from "@/customSVG"
import Link from "next/link"
import CategoryUI from "@/components/CategoryUI"
import { Laugh } from "lucide-react"


const Footer = ({className}: {className: string}) => {
  return (
    <footer className={`mt-36 mb-16 ${className} `}>
      
      <CategoryUI className="mb-16"/>
      
      <div className="flex flex-col gap-6 justify-between items-start sm:flex-row ">
        <div className=" flex-1 flex flex-col space-y-4">
          <Link href={'/'} className="flex items-center gap-4">
            <HeartLogo />
            <span className="block font-semibold text-sm sm:text-base">AI RIZZ GENERATOR</span>
            <span className="block font-semibold text-sm sm:text-base bg-red-500 text-white px-1 rounded-[3px]">
                Joke
            </span>
          </Link>
          <p className="text-[12px] ">
            <span className="border-b-2 border-b-[#1C3144]/60"> AI Joke Generator</span> is a fun extension of AI Rizz Generator, bringing laughter to your everyday conversations.
          </p>
          <p className="text-[12px] ">Created to help you break the ice and lighten the mood in any situation with just a few clicks.</p>
          <p className="text-[12px] ">Have feedback or joke suggestions? Let us know on <a href={'https://x.com/emannsunday'} target="_blank" rel="noopener noreferrer">X</a></p>
          <p className="text-[10px]">&copy; Copyright {new Date().getFullYear()}.</p>
        </div>
        
        <div className=" flex-1">
          <h2 className="text-base font-bold mb-2">Quick Links</h2>
          <ul className="text-xs font-light flex flex-col space-y-2">
            <li className="hover:underline">
              <a href='https://airizzgenerator.com/'>
                AI Rizz Generator
              </a>
            </li>
            <li className="hover:underline">
              <Link href='/privacy-policy'>
                Privacy Policy
              </Link>
            </li>
            <li className="hover:underline">
              <Link href='/terms-of-service'>
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
