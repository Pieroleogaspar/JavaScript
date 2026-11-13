
async function buscarDados(){

    const url = 'https://booking-com15.p.rapidapi.com/api/v1/cars/searchCarRentals?pick_up_latitude=40.6397018432617&pick_up_longitude=-73.7791976928711&drop_off_latitude=40.6397018432617&drop_off_longitude=-73.7791976928711&pick_up_time=10%3A00&drop_off_time=10%3A00&driver_age=30&currency_code=USD';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '1ea52f944emshef06e35ecf30dc9p140418jsn6a200e01cd6d',
            'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

buscarDados()
