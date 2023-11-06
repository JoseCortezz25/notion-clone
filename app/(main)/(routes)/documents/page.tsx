"use client"
import Image from 'next/image'
import React from 'react'
import { useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'


const DocumentsPage = () => {
  const { user } = useUser();

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image src="/empty.png" height="300" width="300" alt="EMpty" className="block dark:hidden" />
      <Image src="/empty-dark.png" height="300" width="300" alt="EMpty" className="hidden dark:block" />

      <h2 className="text-lg font-medium">Welcome to {user?.firstName}&apos; <u className='font-medium text-black'>Idea</u></h2>
      <Button>
        <PlusCircle className='h-4 w-4 mr-2'/>
        Create a new Idea
      </Button>
    </div>
  )
}

export default DocumentsPage