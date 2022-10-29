let happyBirthDay = ( day:number, month:number, state:Array<string> ) => {
    let date = new Date();
    let _day = date.getDate();
    let _month = date.getMonth();
    
    if( _day == day && month == month ) {
        console.log(state[0]);
    } else {
        console.log(state[1]);
    }

}

happyBirthDay(19, 10, ["Happy birthday", "Sorry but not is u birth day :("]);