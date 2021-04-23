const dayOfTheWeek = (date = new Date()) => {
<<<<<<< HEAD
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wday', 'Thursday', 'Friday', 'Saturday'];
=======
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
>>>>>>> 3fa02859488f3d75dc715295fa88499392a43be4

    return days[date.getDay()];
}


try {
    document.getElementById('day').innerText = dayOfTheWeek();
} catch(err) {}


exports.dayOfTheWeek = dayOfTheWeek;
