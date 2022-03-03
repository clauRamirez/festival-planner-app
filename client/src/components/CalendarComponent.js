import React, { useContext, useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment';
import FestivalDataContext from '../context/FestivalDataContext'

const CalendarComponent = () => {

    const localizer = momentLocalizer(moment);

    let { festivalData } = useContext(FestivalDataContext)

    const myEvents = festivalData.flatMap(event => {
        return (event.performances ?
            event.performances.map(performance => {
                return {
                    title: event.title,
                    start: new Date(performance.start),
                    end: new Date(performance.end),
                    allDay: false
                }
            })
            : event)
    }
    )

    let date;

    festivalData.length > 0 ?
        date = new Date(festivalData[0].performances[0].start)
        :
        date = new Date()



    return (
        <>
            {festivalData.length > 0 ?
                <Calendar
                    localizer={localizer}
                    events={myEvents}
                    startAccessor="start"
                    endAccessor="end"
                    defaultDate={date}
                    style={{ height: '80vh', width: '100vh' }}
                /> :
                <div>
                    <h1>Loading Calendar</h1>
                </div>}

        </>
    )
}

export default CalendarComponent