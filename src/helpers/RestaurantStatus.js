const dayMapping = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
};

export const getRestaurantStatus = (category, restaurants) => {
    let categoryStatus = false;

    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentHr = currentDate.getHours();

    const restaurantsArr = [];

    restaurants.forEach((restaurantObj, index) => {
        const resObj = {
            label: restaurantObj.name,
            desc: restaurantObj.description,
            tags: restaurantObj.tags,
            isOpen: false,
            nextOpenAtTime: 0,
            nextOpenAtDay: ''
        };
        let currentSchedule;
        let currentScheduleIndex;
        restaurantObj.schedule.forEach((currentSch, index) => {
            if (currentSch.day === currentDay) {
                currentSchedule = currentSch;
                currentScheduleIndex = index;
            }
        });
        const open = currentSchedule !== undefined ? parseInt(currentSchedule.open) : null;
        const close = currentSchedule !== undefined ? parseInt(currentSchedule.close) : null;
        if (open !== null && close !== null && currentHr >= open && currentHr <= close) {
            resObj.isOpen = true;
        } else if (open !== null && close !== null && currentHr < open) {
            resObj.nextOpenAtTime = restaurantObj.schedule[currentScheduleIndex]?.open;
            resObj.nextOpenAtDay = dayMapping[restaurantObj.schedule[currentScheduleIndex]?.day];
        } else {
            if (currentSchedule !== undefined) {
                resObj.nextOpenAtTime = restaurantObj.schedule[currentScheduleIndex + 1]?.open;
                resObj.nextOpenAtDay =
                    dayMapping[restaurantObj.schedule[currentScheduleIndex + 1]?.day];
            }
        }
        if (resObj.isOpen) {
            categoryStatus = true;
        }
        restaurantsArr.push(resObj);
    });

    const categoryObj = {
        label: category.label,
        openIcon: category.openIcon,
        closeIcon: category.sleepIcon,
        isOpen: categoryStatus,
        id: category.id
    };

    return {
        categoryObj: categoryObj,
        restaurantsArr: restaurantsArr,
        categoryId: category.id
    };
};
