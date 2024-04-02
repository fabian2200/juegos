class Api{

    constructor() {
        this.url = "https://mapas.comprocafedecolombia.com/sustain_map/app_modules/maps/API/maps/";
        this.response = null;

        this.dataVectores= {};



        this.dataInversion = {
            "total_ejecucion" : 0,
            "rp" : 0,
            "fonc" : 0,
            "tercero" : 0
        };

        this.dataBeneficiarios = {
            "total_beneficiario" : 0,
            "afroValue" : 0,
            "joveValue" : 0,
            "mujerValue" :  0,
            "hombreValue" :  0
        };

        this.dataEjeInidicativo1 = {};

    }




    post = function (url, data = [],sucessCallBack, falloCallback){
        const  _self = this;
        url = _self.url+url;
        $.ajax({
            url: url,
            type: "POST",
            data: data,
            timeout: 30000,
            dataType: 'json',
            cache: false,
            success : sucessCallBack,
            error : falloCallback
        });
    }

    getInversion = function ($data = {}, sucessCallBack, falloCallback){
        const  _self = this;
        $data.anio = $("#selectAnoCargue").val();

        $data.dpto = nameDpto1;
        $data.municipio = nameMunicipio;

        if($typeOffice == 1){
            $data.table = "view_oficina_inversion";
            $data.type = 7;
            $data.dependencia_id = 18;
        }else if($typeOffice == 2){
            $data.table = "view_oficina_inversion";
            $data.type = 7;
            $data.dependencia_id = 1;
        }else{
            $data.table = "monto_inversion";
            $data.type = 1;
        }

        _self.post("get_data_nfc", $data,sucessCallBack, falloCallback);
    }

    getBeneficiarios = function ($data = {}, sucessCallBack, falloCallback){
        const  _self = this;
        $data.anio = $("#selectAnoCargue").val();
        $data.type = 1;
        $data.table = "monto_beneficiarios";
        $data.dpto = nameDpto1;
        $data.municipio = nameMunicipio;

        _self.post("get_data_nfc", $data,sucessCallBack, falloCallback);
    }


    getVectores = function ($data = {}, sucessCallBack, falloCallback){
        const  _self = this;
        $data.anio = $("#selectAnoCargue").val();

        $data.dpto = nameDpto1;
        $data.municipio = nameMunicipio;
        $data.table = "vectores";

        if($typeOffice == 1){
            $data.table = "vectores_dependencia";
            $data.type = 7;
            $data.dependencia_id = 18;
        }else if($typeOffice == 2){
            $data.table = "vectores_dependencia";
            $data.type = 7;
            $data.dependencia_id = 1;
        }else{
            $data.type = 2;
        }


        _self.post("get_data_nfc", $data,sucessCallBack, falloCallback);
    }

    getVieEjeIndicativo = function ($data = {}, sucessCallBack, falloCallback){
        const  _self = this;
        $data.anio = $("#selectAnoCargue").val();
        $data.type = 1;
        $data.table = "view_eje_indicativo";

        if($typeOffice == 1){
            $data.table = "view_oficina_indicativo";
            $data.type = 7;
            $data.dependencia_id = 18;
        }else if($typeOffice == 2){
            $data.table = "view_oficina_indicativo";
            $data.type = 7;
            $data.dependencia_id = 1;
        }

        $data.dpto = nameDpto1;
        $data.municipio = nameMunicipio;

        _self.post("get_data_nfc", $data,sucessCallBack, falloCallback);
    }

    getVieEjeIndicativo1 = function ($data = {}, sucessCallBack, falloCallback){
        const  _self = this;
        $data.anio = $("#selectAnoCargue").val();
        $data.type = 0;
        $data.table = "view_eje_eje";

        if($typeOffice == 1){
            $data.table = "view_oficina_eje";
            $data.type = 7;
            $data.dependencia_id = 18;
        }else if($typeOffice == 2){
            $data.table = "view_oficina_eje";
            $data.type = 7;
            $data.dependencia_id = 1;
        }


        $data.dpto = nameDpto1;
        $data.municipio = nameMunicipio;
        _self.post("get_data_nfc", $data,sucessCallBack, falloCallback);
    }

    getVieEjeIndicativo2 = function ($data = {}, sucessCallBack, falloCallback){
        const  _self = this;
        $data.anio = $("#selectAnoCargue").val();
        $data.type = 4;
        $data.table = "view_eje_eje_dpta_municipio";
        $data.dpto = nameDpto1;
        $data.municipio = nameMunicipio;

        _self.post("get_data_nfc", $data,function (data){


            var AMBIENTAL = data.find(x => x.eje === "AMBIENTAL");
            var GOBERNANZA =  data.find(x => x.eje === "GOBERNANZA");
            var ECONOMICO =  data.find(x => x.eje === "ECONOMICO");
            var SOCIAL = data.find(x => x.eje === "SOCIAL");

            if(!AMBIENTAL){
                AMBIENTAL = {total : 0};
            }

            if(!GOBERNANZA){
                GOBERNANZA = {total : 0};
            }

            if(!ECONOMICO){
                ECONOMICO = {total : 0};
            }

            if(!SOCIAL){
                SOCIAL = {total : 0};
            }

            api.dataEjeInidicativo1 = {
                AMBIENTAL,
                GOBERNANZA,
                ECONOMICO,
                SOCIAL
            };
            // Doughnut chart



            if (data && data[0].ano_carge) {


                chDonutData1.datasets[0].data = [
                    getPorcentaje(api.dataEjeInidicativo1["AMBIENTAL"].total,100),
                    getPorcentaje(api.dataEjeInidicativo1["GOBERNANZA"].total,100),
                    getPorcentaje(api.dataEjeInidicativo1["ECONOMICO"].total,100),
                    getPorcentaje(api.dataEjeInidicativo1["SOCIAL"].total,100),
                ];


                chDonut3 = document.getElementById("circlemap4").getContext('2d');
                if (chDonut3) {
                    chDonut3Chart = new Chart(chDonut3, {
                        type: 'pie',
                        data: chDonutData1,
                        options: donutOptions1
                    });
                }
            }
        }, function (error){

        });
    }
    getVieEjeIndicativo3 = function ($data = {}, sucessCallBack, falloCallback){
        const  _self = this;
        $data.anio = $("#selectAnoCargue").val();
        $data.type = 0;
        $data.table = "view_indicadores";
        $data.dpto = nameDpto1;
        $data.municipio = nameMunicipio;
        _self.post("get_data_nfc", $data,sucessCallBack, falloCallback);
    }


}

const  api = new Api();



function getLoadMunicipios(){
    getLoad();
    api.getVieEjeIndicativo2();

}

function getLoad(){
    //inversion

    api.getVieEjeIndicativo({}, function (data){




        // Doughnut chart
        circlemapChart.clear();
        circlemapChart.data.datasets[0].data = [];
        circlemapChart.update();

        if(data && data.ano_carge){


            circleMapData.datasets[0].data = [getPorcentaje(data.gob), getPorcentaje(data.inter),  getPorcentaje(data.org_nal_pri),  getPorcentaje(data.org_nal_pub),  getPorcentaje(data.mun)];
            switch (typeDefault){
                case 1:{

                    circlemap = document.getElementById('circlemap').getContext('2d');
                    circlemapChart = new Chart(circlemap, {
                        type: 'pie',
                        data: circleMapData,
                        options : circlemapConfig,
                    });
                    break;
                }
                case 2:{
                    circlemap3 = document.getElementById('circlemap3').getContext('2d');
                    circlemap3Chart = new Chart(circlemap3, {
                        type: 'pie',
                        data: circleMapData,
                        options : circlemapConfig,
                    });
                }
            }
        }
    }, function (error){

    });


    api.getVieEjeIndicativo1({}, function (data){

        var AMBIENTAL = data.find(x => x.eje === "AMBIENTAL");
        var GOBERNANZA =  data.find(x => x.eje === "GOBERNANZA");
        var ECONOMICO =  data.find(x => x.eje === "ECONOMICO");
        var SOCIAL = data.find(x => x.eje === "SOCIAL");

        if(!AMBIENTAL){
            AMBIENTAL = {total : 0};
        }

        if(!GOBERNANZA){
            GOBERNANZA = {total : 0};
        }

        if(!ECONOMICO){
            ECONOMICO = {total : 0};
        }

        if(!SOCIAL){
            SOCIAL = {total : 0};
        }

        api.dataEjeInidicativo1 = {
            AMBIENTAL,
            GOBERNANZA,
            ECONOMICO,
            SOCIAL
        };
        // Doughnut chart



        if (data && data[0].ano_carge) {




            chDonutData1.datasets[0].data = [
                getPorcentaje(api.dataEjeInidicativo1["AMBIENTAL"].total,100),
                getPorcentaje(api.dataEjeInidicativo1["GOBERNANZA"].total,100),
                getPorcentaje(api.dataEjeInidicativo1["ECONOMICO"].total,100),
                getPorcentaje(api.dataEjeInidicativo1["SOCIAL"].total,100),
            ];


            switch (typeDefault) {
                case 1: {

                    circlemap1 = document.getElementById("circlemap1").getContext('2d');
                    if (circlemap1) {
                        circlemap1Chart = new Chart(circlemap1, {
                            type: 'pie',
                            data: chDonutData1,
                            options: donutOptions1
                        });
                    }
                    break;
                }
                case 2:{

                    chDonut3 = document.getElementById("circlemap4").getContext('2d');
                    if (chDonut3) {
                        chDonut3Chart = new Chart(chDonut3, {
                            type: 'pie',
                            data: chDonutData1,
                            options: donutOptions1
                        });
                    }
                    break;
                }
            }




        }
    }, function (error){

    });





}



function getPorcentaje(data, total, value = 1000000, fixed= 2){
    return (((data * value)/ total).toFixed(fixed));
}



(function() {
    /**
     * Ajuste decimal de un número.
     *
     * @param {String}  tipo  El tipo de ajuste.
     * @param {Number}  valor El numero.
     * @param {Integer} exp   El exponente (el logaritmo 10 del ajuste base).
     * @returns {Number} El valor ajustado.
     */
    function decimalAdjust(type, value, exp) {
        // Si el exp no está definido o es cero...
        if (typeof exp === 'undefined' || +exp === 0) {
            return Math[type](value);
        }
        value = +value;
        exp = +exp;
        // Si el valor no es un número o el exp no es un entero...
        if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
            return NaN;
        }
        // Shift
        value = value.toString().split('e');
        value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
        // Shift back
        value = value.toString().split('e');
        return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    }

    // Decimal round
    if (!Math.round10) {
        Math.round10 = function(value, exp) {
            return decimalAdjust('round', value, exp);
        };
    }
    // Decimal floor
    if (!Math.floor10) {
        Math.floor10 = function(value, exp) {
            return decimalAdjust('floor', value, exp);
        };
    }
    // Decimal ceil
    if (!Math.ceil10) {
        Math.ceil10 = function(value, exp) {
            return decimalAdjust('ceil', value, exp);
        };
    }
})();