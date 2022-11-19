import React, { FC } from 'react';
import { Calendar } from "antd";
import { IEvent } from "../models/IEvent";
import { Moment } from "moment";
import { formatDate } from "../utils/date";
import { Link, Redirect } from "react-router-dom";
import { PlusCircleOutlined } from '@ant-design/icons';




interface EventCalendarProps {
    events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = (props) => {


    function dateCellRender(value: Moment) {
        const formatedDate = formatDate(value.toDate());
        const currentDayEvents = props.events.filter(ev => ev.date === formatedDate);
        return (
            <div>

                {currentDayEvents.map((ev, index) =>
                    <div key={index}>{ev.description}</div>
                )}
               
                <Link to={'/daydescription/'+String(value.calendar())}>
                    <PlusCircleOutlined />
                </Link>

            </div>
        );
    }

    function onDateSelect(value: Moment) {
        return <Redirect to='/daydescription'></Redirect>;
    }


    return (
        <Calendar
            //dateCellRender={cellRender}
            dateCellRender={dateCellRender}
            onSelect={(cal) => { onDateSelect(cal) }}
        />
    );
};

export default EventCalendar;
