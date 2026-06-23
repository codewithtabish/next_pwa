import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div className='py-20 mx-8 text-justify'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat earum, perspiciatis asperiores magnam harum nostrum eaque explicabo laudantium accusantium temporibus ex illo optio recusandae beatae velit! Consequuntur asperiores nihil voluptates.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod animi, est itaque enim laudantium rem quis accusamus iste, veritatis, rerum aspernatur qui nostrum eius quam autem exercitationem. Iste, ratione ea!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod animi, est itaque enim laudantium rem quis accusamus iste, veritatis, rerum aspernatur qui nostrum eius quam autem exercitationem. Iste, ratione ea!

        <Link href={'/about'}>
      About Page
      </Link>
      <br />
      <br />
      <Button variant="outline" className='cursor-pointer'>Button</Button>
      

    </div>
  )
}

export default HomePage


