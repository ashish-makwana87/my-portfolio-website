import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <section className='border-b border-foreground/20'>
      <div className='alignment flex justify-between items-center h-20'>
        <h6 className='text-primary font-bold tracking-wider text-xl md:text-2xl'>
          AM
        </h6>
        <div className='flex gap-x-4'>
          <Link href='/' className='text-sm md:text-base hover:text-primary'>
            Portfolio
          </Link>
          <Link href='/' className='text-sm md:text-base hover:text-primary'>
            Portfolio
          </Link>
          <Link href='/' className='text-sm md:text-base hover:text-primary'>
            Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
