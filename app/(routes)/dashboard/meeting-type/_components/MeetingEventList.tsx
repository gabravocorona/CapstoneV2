"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { app } from '@/config/FirebaseConfig'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { getFirestore, collection, query, where, getDocs, orderBy, deleteDoc, doc, getDoc } from 'firebase/firestore'
import { Clock, Copy, MapPin, Pen, Settings, Trash } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


function MeetingEventList() {
    const db=getFirestore(app); {/* get the data from my firebase */}
  const {user}=useKindeBrowserClient(); {/* we get the specific user that is logged in with kinde */}
  const [businessInfo,setBusinessInfo]=useState();
  const [eventList, setEventList]=useState([]); {/* create a const to store the list of events in a list from my firebase */}

  useEffect(()=>{
    user&&getEventList();
    user&&BusinessInfo();
  },[user])
  const getEventList=async()=>{ 
    setEventList([]); 
    {/* I querie the firesbase database for the saved data in the Meeting event colletion where the users email should be the same as the created by field */}
    const q = query(collection(db, "MeetingEvent"), where("createdBy", "==", user?.email), 
    orderBy('id','desc')); {/* every event is ordered by the id to always show the newest event created */}

    const querySnapshot = await getDocs(q); {/* the query is then executed where i get the documents */}
    querySnapshot.forEach((doc) => {
      {/* I then have the data logged into the event list using the set event list */}
    console.log(doc.id, " => ", doc.data());
    setEventList(prevEvent=>[...prevEvent, doc.data()])
  });
  }

  const BusinessInfo=async()=>{
    const docRef=doc(db,'Business',user?.email);
    const docSnap=await getDoc(docRef);
    setBusinessInfo(docSnap.data());
  }

    {/* code to be able to delete an event this code is able to delete the event data from page and firebase wheredata is saved  */}
  const onDeleteMeetingEvent=async(event)=>{
    await deleteDoc(doc(db, "MeetingEvent", event?.id)).then(resp=>{ {/* we look at our data base where we store our meeting events and we delete the event using the event id saved in the firebase */}
      toast('Meeting Event Deleted!');
      getEventList(); {/* then call the new modiied event list with to delete the event that was deleted */}
    })
  }

  const onCopyClickHandler=(event)=>{
    const meetingEventUrl=process.env.NEXT_PUBLIC_BASE_URL+'/'+businessInfo?.businessName+'/'+event.id
    navigator.clipboard.writeText(meetingEventUrl);
    toast('Link Saved to Clipboard')
  }
  return (
    <div className='mt-10 grid grid-cols-1 md:grid-cols-2 
    lg:grid-cols-3 gap-7'>
      {eventList.length>0?eventList?.map((event,index)=>(
        <div className='border shadow-md 
        border-t-8 rounded-lg p-5 flex flex-col gap-3'
        style={{borderTopColor:event?.themeColor}}
        >
            <div className='flex justify-end'>
              <DropdownMenu>
              <DropdownMenuTrigger asChild>
              <Settings className='cursor-pointer'/>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className='flex gap-2'
                onClick={()=>onDeleteMeetingEvent(event)}
                > <Trash/> Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            </div>
            <h2 className='font-medium text-xl'>
                {event?.eventName}</h2>
            <div className='flex justify-between'>
            <h2 className='flex gap-2 text-gray-500'><Clock/>{event?.duration} Min</h2>
            <h2 className='flex gap-2 text-gray-500'><MapPin/>{event?.locationType} </h2>

            </div>
            <hr></hr>
            <div className='flex justify-between'>
              <h2 className='flex gap-2 text-sm text-primary 
              items-center cursor-pointer'
              onClick={()=>{
                onCopyClickHandler(event)
              }}
              >
                <Copy className='h-4 w-4'/>Copy Link </h2>
              <Button variant="outline"
              className='border-primary rounded-full text-primary'>Share</Button>
            </div>
        </div>
      ))
        :<h2>Loading...</h2>
    }
    </div>
  )
}

export default MeetingEventList
