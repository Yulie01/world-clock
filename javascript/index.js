function updateTime()
    //Chicago
{
    let chicagoElement = document.querySelector( "#chicago" );
    if ( chicagoElement )
    {
        let chicagoDateElement = chicagoElement.querySelector( ".date" );
        let chicagoTimeElement = chicagoElement.querySelector( ".time" );
        let chicagoTime = moment().tz( "America/Chicago" );

        chicagoDateElement.innerHTML = chicagoTime.format( "MMMM Do YYYY" );
        chicagoTimeElement.innerHTML = chicagoTime.format( "h:mm:ss [<small>]A [</small]" );
    }

    //Valletta

    let vallettaElement = document.querySelector( "#valletta" );
    if ( vallettaElement )
    {
        let vallettaDateElement = vallettaElement.querySelector( "#.date" );
        let vallettaTimeElement = vallettaElement.querySelector( "#time" );
        let vallettaTime = moment().tz( "Europe/Malta" );

        vallettaDateElement.innerHTML = vallettaTime.format( "MMMM Do YYYY" );
        vallettaTimeElement.innerHTML = vallettaTime.format( "h:mm:ss [<small>]A[</small>]" );
    }
  
  //Fiji
  let fijiElement = document.querySelector( "#fiji" );
    if ( fijiElement )
    {
        let fijiDateElement = fijiElement.querySelector( "#.date" );
        let fijiTimeElement = fijiElement.querySelector( "#time" );
        let fijiTime = moment().tz( "Pacific/Fiji" );

        fijiDateElement.innerHTML = fijiTime.format( "MMMM Do YYYY" );
        fijiTimeElement.innerHTML = fijiTime.format( "h:mm:ss [<small>]A[</small>]" );
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
  <a href="index.html">Show all cities</a>
  `;
}

updateTime()
setInterval( updateTime, 1000 );

let citiesSelectElement = document.querySelector( "#city" );
citiesSelectElement.addEventListener( "change", updateCity );