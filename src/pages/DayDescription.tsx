import React, {FC, useEffect, useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IEvent} from "../models/IEvent";
import { useParams } from 'react-router-dom';


interface EventCalendarProps {
    events: IEvent[];
}


const DayDescription: FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const {fetchGuests, createEvent, fetchEvents} = useActions();
   // const {guests,events} = useTypedSelector(state => state.event);
    const {user} = useTypedSelector(state => state.auth);

    useEffect(() => {
        console.log('render')
    }, [])

    let { date } = useParams<{date?: string}>();


    return (
        <Layout>
            <h1>
                {date}
            </h1>
        </Layout>
    );
};

export default DayDescription;
