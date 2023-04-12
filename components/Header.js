import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
 
        
        

      <p className="text-xl dark:text-white text-center mx-auto">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p> 
    </header>
  );
}