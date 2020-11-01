var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

request.send();

request.onload = function() {
    var data = JSON.parse(this.response);
    
    for( const i of data){
        console.log(i.flag);
    }
}
