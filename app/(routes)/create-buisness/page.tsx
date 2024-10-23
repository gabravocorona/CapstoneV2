"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { app } from '@/config/FirebaseConfig'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'

function CreateBusiness() {
    const [businessName,setBusinessName]=useState('');
    const db = getFirestore(app);
    const {user}=useKindeBrowserClient();
    const router=useRouter();

    const onCreateBusiness = async () => {
      if (!user?.email) {
        {/* Handle the case where the user's email is not available */}
        toast('User email is not available');
        return;
      }
    
      try {
        console.log("btn Click", businessName);
        await setDoc(doc(db, 'Business', user.email), {
          businessName: businessName,
          user: user.email,
          userName: user.given_name + " " + user.family_name,
        });
        console.log("Document Saved");
        toast('New Business Created');
        router.replace('/dashboard');
      } catch (error) {
        console.error("Error creating business:", error);
        toast('Error creating business');
      }
    };
    
  return (
    <div className='p-14 items-center flex flex-col gap-20 my-10'>
      <Image src='logo.svg' width={200} height={200} alt='logo'/>
      <div className='flex flex-col items-center gap-4 max-w-3xl'>
        <h2 className='text-4xl font-bold'>What should we call your Business</h2>
        <p className='text-slate-500'>You can always change this later from your settings.</p>
        <div className='w-full'>
            <label className='text-slate-400'>Team Name</label>
            <Input placeholder="Business Name" 
            className='mt-2'
            onChange={(event)=>setBusinessName(event.target.value)}
            />
        </div>
        <Button className='w-full'
        disabled={!businessName}
        onClick={onCreateBusiness}
        >Create Business</Button>
      </div>
    </div>
  )
}

export default CreateBusiness


