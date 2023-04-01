import Link from 'next/link';
export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
 
         {/* <div className="w-16 h-16 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" /> */}

         <div style={{
    background: "url('https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
    height: '16vh',
    width: '16vh',
    
}}/>

      <p className="text-xl dark:text-white  text-center ">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p> 
    </header>
  );
}