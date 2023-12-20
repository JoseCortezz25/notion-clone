"use client"
import Image from 'next/image'
import React from 'react'
import { useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

const DocumentsPage = () => {
  const { user } = useUser();
  const router = useRouter();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: 'Untitled', })
      .then((documentId) => router.push(`/documents/${documentId}`));

    toast.promise(promise, {
      loading: 'Creating new Idea note...',
      success: 'New idea Created!',
      error: 'Failed to create Idea.',
    })
  }

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image src="/empty.png" height="300" width="300" alt="Empty" className="block dark:hidden" />
      <Image src="/empty-dark.png" height="300" width="300" alt="Empty" className="hidden dark:block" />

      <h2 className="text-lg font-medium">Welcome to {user?.firstName}&apos; <u className='font-medium text-black dark:text-neutral-300'>Ideas</u></h2>
      <Button onClick={onCreate}>
        <PlusCircle className='h-4 w-4 mr-2' />
        Create a new Idea
      </Button>
    </div>
  )
}

export default DocumentsPage