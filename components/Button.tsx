import React from 'react'
import { useFormStatus } from 'react-dom'
import { FaPaperPlane } from 'react-icons/fa'

export default function Button() {
    const { pending } = useFormStatus()

  return (
    <button
        className='group bg-gray-900 outline-none transition-all flex items-center justify-center text-white rounded-full hover:scale-110 active:scale-105 w-32 h-12 disabled:scale-100 disabled:bg-opacity-75 dark:bg-white  dark:bg-opacity-10'
        type='submit' disabled={pending}>
        {pending ? <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div> :
        (<>
            Submit
            <FaPaperPlane className='ml-1 text-xs opacity-70 group-hover:-translate-y-1 group-hover:translate-x-1 transition' />{''}
        </>)}
    </button>
  )
}
