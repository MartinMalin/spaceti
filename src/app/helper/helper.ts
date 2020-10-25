import { cloneDeep } from 'lodash';

import { Day } from '../models';

export const trackByFn = (index: number, item: any) => item;

const weekDayMap = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday',
};

const weekDayFromNumber = (day: number) => weekDayMap[day];

export const daysInitialization = (data: { buckets: [Day] }) => data.buckets.reduce((acc, item) => acc.concat({ label: weekDayFromNumber(item.key), value: 0 }), []);

export const makeDataMap = (data: { buckets: [Day] }) => {
    const objectMap = {};
    const initiateDays = daysInitialization(data);
    if (data && data.buckets && data.buckets.length) {
        data.buckets.forEach((bucket, index) => {
            bucket.histogram.buckets.forEach(item => {
                if (!objectMap[item.key_as_string] && item.data.value) {
                    objectMap[item.key_as_string] = cloneDeep(initiateDays);
                }
                if (objectMap[item.key_as_string] && objectMap[item.key_as_string][index]) {
                    objectMap[item.key_as_string][index] = {
                        label: weekDayFromNumber(bucket.key),
                        value: item.data.value
                    };

                }
            });
        });
    }
    return objectMap;
}

export const showWeekDays = (data: { buckets: [Day] }) => {
    return data && data.buckets && data.buckets.map(bucket => {
        return bucket.histogram.buckets.every(item => item.data.value === 0) ? null : weekDayMap[bucket.key];
    });
}
