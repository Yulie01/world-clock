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

function updateCity ( event )
{
    let cityTimeZone = event.target.value;
    if ( cityTimeZone === "current" )
    {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace( "_", " " ).split( "/" )[1];
    let cityTime = moment().tz( cityTimeZone );
    let cityElement = document.querySelector( "#cities" );
    citiesElement.innerHTML = cityTimeZone;
    citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector( "#city" );
citiesSelectElement.addEventListener( "change", updateCity );