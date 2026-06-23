import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
  return (
    <div className=''>
        <h2 className='text-xl'>About Me</h2>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A adipisci quasi ab dolore accusantium fuga illum sint vitae aut quis deserunt cum at doloremque ipsa, sequi quia maxime non aspernatur!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A adipisci quasi ab dolore accusantium fuga illum sint vitae aut quis deserunt cum at doloremque ipsa, sequi quia maxime non aspernatur!
        <br />
        <br />
        <Link href={'/'}>
        Back
        </Link>
      
    </div>
  )
}

export default AboutPage
