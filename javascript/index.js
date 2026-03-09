function updateTime ()
    //California
{
    let californiaElement = document.querySelector( "#california" );
    if ( californiaElement )
    {
        let californiaDateElement = californiaElement.querySelector( ".date" );
        let californiaTimeElement = californiaElement.querySelector( ".time" );
        let californiaTime = moment().tz( "America/California" );

        californiaDateElement.innerHTML = californiaTime.format( "MMMM Do YYYY" );
        californiaElement.innerHTML = californiaTime.format( "h:mm:ss [<small>]A [</small]" );
    }
}
    //Oslo
{
    let osloElement = document.querySelector( "#oslo" );
    if ( osloElement )
    {
        let osloDateElement = osloElement.querySelector( "#.date" );
        let osloTimeElement = osloElement.querySelector( "#time" );
        let osloTime = moment().tz( "Europe/Oslo" );

        osloDateElement.innerHTML = osloTime.format( "MMMM Do YYYY" );
        osloTimeElement.innerHTML = osloTime.format( "h:mm:ss [<small>]A[</small>]" );
    }
}

updateTime();
setInterval(updateTime, 1000);
