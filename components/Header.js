import Link from 'next/link';
export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
 
         {/* <div className="w-16 h-16 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" /> */}

         <div style={{
    background: "url('https://unsplash.com/photos/EwaV3HjwmUo=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
    height: '16vh',
    width: '16vh',
    marginLeft: 'auto',
    marginRight: 'auto',
}}/>

      <p className="text-xl dark:text-white text-center mx-auto">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p> 
    </header>
  );
}