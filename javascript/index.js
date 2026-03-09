function updateTime ()
    //Chicago
{
    let chicagoElement = document.querySelector( "#chicago" );
    if ( chicagoElement )
    {
        let chicagoDateElement = chicagoElement.querySelector( ".date" );
        let chicagoTimeElement = chicagoElement.querySelector( ".time" );
        let chicagoTime = moment().tz( "America/Chicago" );

        chicagoDateElement.innerHTML = chicagoTime.format( "MMMM Do YYYY" );
        chicagoElement.innerHTML = chicagoTime.format( "h:mm:ss [<small>]A [</small]" );
    }
}
    //Malta
{
    let maltaElement = document.querySelector( "#malta" );
    if ( maltaElement )
    {
        let maltaDateElement = maltaElement.querySelector( "#.date" );
        let maltaTimeElement = maltaElement.querySelector( "#time" );
        let maltaTime = moment().tz( "Europe/Malta" );

        maltaDateElement.innerHTML = maltaTime.format( "MMMM Do YYYY" );
        maltaTimeElement.innerHTML = maltaTime.format( "h:mm:ss [<small>]A[</small>]" );
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
    let cityElement = document.querySelector( "#cities");
    cityElement.innerHTML = cityTimeZone;
    cityElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  < a href="/">Show all cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector( "#city" );
citiesSelectElement.addEventListener( "change", updateCity );