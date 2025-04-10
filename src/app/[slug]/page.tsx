import { Button } from '@/components/ui/button';
import { JokeArray } from '@/data/jokes';
import { keywordContent } from '@/data/keywordContent';
import { getJokeTotalKeyword, slugify, toTitleCase } from '@/utils/func';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Accordion from './components/accordion';

type Props = {
  params: {
    slug: string;
  };
};

// Generate metadata for each dynamic route
export async function generateMetadata({ params }: Props): Promise<Metadata> {

  const resolvedParams = await params
  const paramSlug = resolvedParams.slug
  
  const requestedJoke = getJokeTotalKeyword().find((item) => slugify(item) === paramSlug);
  
  if(!requestedJoke){
    return {
        title: `404: This Page Could Not be Found | AI Joke Generator`,
      };
  }

  const defaultMetaDescription = "Enjoy and laugh yourself out with these hilarious jokes";
  
  const metaDescription = keywordContent[requestedJoke]?.metaDescription || defaultMetaDescription;

  const matchingArray = JokeArray.filter((item) => item.keyword === requestedJoke);

  const capitalizedTitle = toTitleCase(requestedJoke);
  
  return {
    title: `${matchingArray.length}+ ${capitalizedTitle} Jokes and Puns | AI Joke Generator`,
    description: metaDescription,
    openGraph: {
      title: `${matchingArray.length}+ ${capitalizedTitle} Jokes and Puns | AI Joke Generator`,
      description: metaDescription,
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${paramSlug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${matchingArray.length}+ ${capitalizedTitle} Jokes`,
      description: metaDescription,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/${paramSlug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export async function generateStaticParams() {
  return getJokeTotalKeyword().map((category) => ({
    slug: slugify(category)
  }));
}

const Page = async ({ params }: Props) => {
  
  const resolvedParams = await params
  const paramSlug = resolvedParams.slug
  const requestedJoke = getJokeTotalKeyword().find((item) => slugify(item) === paramSlug);
  
  if(!requestedJoke){
    notFound();
  }

  const defaultHeroText = "Enjoy and laugh yourself out with these hilarious jokes";

  const heroText = keywordContent[requestedJoke]?.heroText || defaultHeroText;

  const matchingArray = JokeArray.filter((item) => item.keyword === slugify(requestedJoke));
  
  return (
    <section className='space-y-16'>
      <div className='flex flex-col items-center gap-4 sm:flex-row'>
        <div className='w-48 h-48 bg-slate-500 min-w-48'>
          {/* Image placeholder */}
        </div>
        <div className='space-y-4 flex flex-col items-stretch'>
          <h1 className="text-3xl font-bold mb text-[#1C3144]">
            {matchingArray.length}+ {' '} {toTitleCase(requestedJoke)} Jokes and Puns That Gets Anyone
          </h1>
          <p className='text-xs text-[#163300]'>{heroText}</p>
          <Button 
            asChild
            className='shadow-[2px_2px_0_0_#163300]  border-2 border-black text-xs text-[#163300] bg-[#FFC107] hover:bg-[#333333] focus:active:bg-[#333333] hover:text-white active:hover:text-white'
          >
            <Link href={'/jokes'} className='text-sm font-bold'>
              {`Generate More ${toTitleCase(requestedJoke)} Jokes`.toUpperCase()}
            </Link> 
          </Button>
        </div>
      </div>

      <div className="space-y-4 bg-white border-2 border-black rounded-[4px]">
        <ul>
          {matchingArray.map((joke) => (
            <Accordion 
              key={joke.id}
              question={joke.setup}
              answer={joke.punchline}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;