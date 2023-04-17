import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
 

<div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
    <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
    </div>
</div>

      <p className="tex-x1 font-semibold dark:text-white text-center mx-auto">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p> 
    </header>
  );
}