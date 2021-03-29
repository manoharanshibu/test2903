export default class Provider {
    /** 
     * Gets the weather for a given city 
    */
    static getWeather(city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d3c71d1a7241fa2f371c454125358cd8&units=metric`)
        .then(resp => resp.json())
        .then(data => {
            const { weather } = data;
            //return Promise.resolve(`The weather of ${city} is Cloudy`)
            console.log(`The weather of ${city} is ${weather[0].description}`)
        })
        
    };
    /** 
    * Gets the weather for a given city 
    */
    static getLocalCurrency(city) {
        // return Promise.resolve(`The local currency of ${city} is GBP`)
        console.log(`The local currency of ${city} is GBP`);
    };
    /** 
   * Given Longtitude and latitude, this function returns a city 
   */
    static findCity(long, lat) {
        return fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${long}&lon=${lat}&limit=1&appid=d3c71d1a7241fa2f371c454125358cd8`)
        .then(resp => resp.json())
        .then(data => {
            return (data[0].name);
        })
        // return Promise.resolve(`London`)
    };
};