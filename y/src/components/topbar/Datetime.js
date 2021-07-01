import React from 'react'



var Datetime = ()=>
{
    var showdate=new Date();
    var displaytodaydate=showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear();
    return(
        <div>
            <input type="text" value={displaytodaydate} readOnly="true"/>
        </div>
    );
}
export default Datetime;
