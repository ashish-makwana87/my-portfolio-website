import React from 'react'

function SectionTitle({title, style = ''}: {title: string, style?: string}) {

  return (
    <div>
     <h2 className={`${style}`}>{title}</h2>
     <div className='my-4 md:my-6 border-b-1 border-foreground/20'></div>
    </div>
  )
}

export default SectionTitle