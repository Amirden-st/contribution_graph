import React, {useCallback, useMemo} from 'react';
import moment from "moment";
import Column from "./components/Column";
import {MARGIN_UNIT} from "./constants";
import Weekdays from "./components/Weekdays";
import "./index.css"
import Months from "./components/Months";

const Graph = ({contributions = {}, date}) => {
    const COLUMN_COUNT = 51

    const generateDateList = useCallback((numDates, endDate) => {
        const dateList = [];
        const endDateObj = moment(endDate);

        for (let i = numDates - 1; i >= 0; i--) {
            const currentDate = moment(endDateObj).subtract(i, 'days');
            const formattedDate = currentDate.format('YYYY-MM-DD');
            dateList.push({
                value: formattedDate,
                contributions: contributions[formattedDate] ?? 0
            });
        }

        return dateList;
    }, [contributions])

    const weeks = useMemo(() => {
        const weeks = []
        let currentDate = date

        for (let i = 0; i < COLUMN_COUNT; i++) {
            const generatedWeek = generateDateList(moment(currentDate).isoWeekday(), currentDate)
            weeks.unshift(generatedWeek)
            const lastDate = new Date(generatedWeek[0].value)
            currentDate = moment(lastDate).subtract(1, 'day').toDate()
        }
        return weeks

    }, [date, generateDateList]);

    const months = useMemo(() => {
        const data = []
        weeks.forEach((week, column) => {
            week.forEach(date => {
                const month = moment(date.value).locale('ru').format('MMM')
                if (!data.find(m => m.name === month)) {
                    data.push({
                        name: month,
                        column
                    })
                }
            })
        })
        return data
    }, [weeks]);

    return (
        <svg width={920} height={137}>

            <Weekdays y={18} />
            <g transform={`translate(20, 0)`}>
                <Months
                    data={months}
                />
                {weeks.map((week, idx) => {
                    return (
                        <Column data={week} transform={`translate(${idx * MARGIN_UNIT}, 18)`} key={idx}/>
                    )
                })}
            </g>
        </svg>
    );
};

export default Graph;