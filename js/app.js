const vue = new Vue({
    el: '#app',
    data: {
        country: '',
        countryList: [],
        cases: '',
        death: '',
        recovered: ''
    },
    methods: {
        getCountry(){
            fetch("https://covid-193.p.rapidapi.com/countries", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "1f36b8aa09msh0ccabfb08009570p15f1c1jsn873d806e824f",
                    "x-rapidapi-host": "covid-193.p.rapidapi.com"
                }
            }).then(response => response.json()).then(data => {
                this.countryList = data.response;
            })
        },
        getData(){
            fetch("https://covid-193.p.rapidapi.com/statistics?country=" + this.country, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "1f36b8aa09msh0ccabfb08009570p15f1c1jsn873d806e824f",
                    "x-rapidapi-host": "covid-193.p.rapidapi.com"
                }
            }).then(response => response.json()).then(data => {
                data = data.response[0];
                this.cases = data.cases.total;
                this.death = data.deaths.total;
                this.recovered = data.cases.recovered;
            })
        }
    },
    mounted() {
        this.getCountry();
    },
})