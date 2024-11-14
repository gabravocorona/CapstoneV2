import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { CalendarCheck, Clock, Timer } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

function ScheduledMeetingList() {
  // Hardcoded meeting data
  const meetingList = [
    {
      formatedDate: "October 31st, 2024",
      duration: 45,
      selectedTime: "10:00 AM",
      locationUrl: "(530) 412-0502"
    },
    {
      formatedDate: "November 5th, 2024",
      duration: 30,
      selectedTime: "10:00 AM",
      locationUrl: "(530) 412-0502"
    },
    {
      formatedDate: "November 14th, 2024",
      duration: 30,
      selectedTime: "12:00 AM",
      locationUrl: "(530) 412-0502"
    },
  ];

  return (
    <div>
        {meetingList.map((meeting, index) => (
            <Accordion type="single" collapsible key={index}>
                <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger>{meeting.formatedDate || "No Date Available"}</AccordionTrigger>
                    <AccordionContent>
                        <div className='mt-5 flex flex-col gap-4'>
                            <h2 className='flex gap-2'><Clock />{meeting.duration || "N/A"} Min</h2>
                            <h2 className='flex gap-2'><CalendarCheck />{meeting.formatedDate || "N/A"}</h2>
                            <h2 className='flex gap-2'><Timer />{meeting.selectedTime || "N/A"}</h2>
                            <Link href={meeting.locationUrl || '#'}>
                                <span className='text-primary'>{meeting.locationUrl || "No Link Available"}</span>
                            </Link>
                            {meeting.locationUrl && (
                                <Link href={meeting.locationUrl}>
                                    <Button className="mt-5">Join Now</Button>
                                </Link>
                            )}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        ))}
    </div>
  )
}

export default ScheduledMeetingList


