"use client"
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import React, { useEffect , useState } from 'react'
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from '@/config/FirebaseConfig';
import { useRouter } from 'next/navigation';
import Meetingtype from './meeting-type/page';

function Dashboard() {
  const db = getFirestore(app);
  const { user } = useKindeBrowserClient();
  const [loading,setLoading]=useState(true)
  const router=useRouter();
  
  useEffect(() => {
    if (user && user.email) {
      isBusinessRegistered();
    }
  }, [user]);

  const isBusinessRegistered = async () => {  
    if (!user?.email) return;  {/* Ensure email is not undefined or null */}

    const docRef = doc(db, "Business", user.email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setLoading(false)
    } else {
      console.log("No such document!");
      setLoading(false)
      router.replace('/create-buisness');
    }
  }

  if(loading){
    return <h2>Loading...</h2>
  }
  return (
    <div>
      <Meetingtype/>
      <div className='p-4 px-10'>
        <div className='flex items-center float-right'>
          <LogoutLink>Logout</LogoutLink>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

