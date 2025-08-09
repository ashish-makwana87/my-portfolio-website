import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <section className='border-b border-foreground/20'>
      <div className='px-8 md:px-4 lg:mx-10 flex justify-between items-center h-20'>
        <h6 className='text-primary font-bold tracking-wider text-xl md:text-2xl'>
          AM
        </h6>
        <div className='flex gap-x-4 md:gap-x-8'>
          <Link href='/' className='text-sm md:text-base hover:text-primary'>
            Portfolio
          </Link>
          <Link href='/' className='text-sm md:text-base hover:text-primary'>
            Experience
          </Link>
          <Link href='/' className='text-sm md:text-base hover:text-primary'>
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
