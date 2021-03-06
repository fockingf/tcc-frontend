import React, { useEffect, useMemo, useState } from 'react';
import {
    addDays,
    format,
    setHours,
    setMinutes,
    setSeconds,
    subDays,
    isBefore,
    isEqual,
    parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

import pt from 'date-fns/locale/pt-BR';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';
import { Container, Time } from './styles';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

export default function Dashboard() {
    const [schedule, setSchedule] = useState([]);
    const [date, setDate] = useState(new Date());

    const dateFormated = useMemo(
        () => format(date, "d 'de' MMMM", { locale: pt }),
        [date]
    );

    useEffect(() => {
        async function loadSchedule() {
            const response = await api.get('agenda', {
                params: { date },
            });
            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            const data = range.map(hour => {
                const checkDate = setSeconds(
                    setMinutes(setHours(date, hour), 0),
                    0
                );
                const compareDate = utcToZonedTime(checkDate, timezone);

                return {
                    time: `${hour}:00h`,
                    past: isBefore(compareDate, new Date()),
                    agendamento: response.data.find(a => parseISO(a.date).toString() === compareDate.toString()),
                };
            });
            setSchedule(data);
        }
        loadSchedule();
    }, [date]);

    function handlePreviusDay() {
        setDate(subDays(date, 1));
    }

    function handleNestDay() {
        setDate(addDays(date, 1));
    }

    return (
        <Container>
            <header>
                <button type='button' onClick={handlePreviusDay}>
                    <MdChevronLeft size={36} color='#fff' />
                </button>
                <strong>{dateFormated}</strong>
                <button type='button' onClick={handleNestDay}>
                    <MdChevronRight size={36} color='#fff' />
                </button>
            </header>
            <ul>
                {schedule.map(time => (
                    <Time
                        key={time.time}
                        past={time.past}
                        available={!time.agendamento}
                    >
                        <strong>{time.time}</strong>
                        <span>
                            {time.agendamento
                                ? time.agendamento.user.name
                                : 'Livre'}
                        </span>
                    </Time>
                ))}
            </ul>
        </Container>
    );
}
