import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className='alignment py-10 md:py-20'>
      <h1 className="my-4">Private Repo</h1>
      <p className="my-4">
        Github repo for this project has been kept private due to non-disclosure
        agreement(NDA) signed with the client.
      </p>
      <Button className='bg-foreground text-background hover:bg-white' asChild>
        <Link href='/#projectsList'>Back to portfolio</Link>
      </Button>
    </div>
  );
}
