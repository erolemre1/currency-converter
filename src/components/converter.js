import React, {Component} from "react";
import {Text, StyleSheet, View, TextInput} from "react-native";
import axios from "axios";


class Converter extends Component{

    constructor(props) {
        super(props);
        this.state = {
            tl  : "",
            usd : "",
            cad : "",
            jpy : "",
            eur : "",
            gbp : "",
            chf : "",
            sek : "",
            input : "",
            rates : []
        }
        this.getRates = this.getRates.bind(this);
      }
      getRates() {
          axios.get(`http://data.fixer.io/api/latest?access_key=${env.ACCESS_KEY}&symbols=EUR,TRY,CAD,JPY,USD,GBP,SEK,CHF`)     
      .then(response=> {
         
          console.log(response); 
          const rates = response.data.rates;
          this.setState({
              rates 
          })
      });

      }
      
    componentDidMount() {
    
      
        console.log("componentDidMount");
        this.getRates();
     }
    render() {
        const{ converterWrapper, inputStyle, textStyle} = styles;
        const { input, tl, usd, cad, jpy, eur, chf , sek, gbp, rates} =this.state;
        return(
            <View style={converterWrapper}> 
            <TextInput placeholder = "EUR Değeri Giriniz"
            style={inputStyle}
            keyboardType = "numeric" 
                     onChangeText= {(text) => {
                         const i = parseFloat(text) || 0;

                         this.setState({
                             input : text, 
                             eur: (i* rates["EUR"]).toFixed(3),
                             tl: (i * rates["TRY"]).toFixed(3),
                             cad: (i* rates["CAD"]).toFixed(3),
                             jpy: (i* rates["JPY"]).toFixed(3),
                             usd: (i* rates["USD"]).toFixed(3),
                             gbp: (i * rates["GBP"]).toFixed(3),
                             sek: (i * rates["SEK"]).toFixed(3),
                             chf: (i * rates["CHF"]).toFixed(3),
                            
                             
                         })
                     }}
value = {input} />
<Text style= {textStyle}> EUR : {eur} </Text>
<Text style= {textStyle}> TRY : {tl}  </Text>
<Text style= {textStyle}> CAD : {cad} </Text>
<Text style= {textStyle}> JPY : {jpy} </Text>
<Text style= {textStyle}> USD : {usd} </Text>
<Text style= {textStyle}> GBP : {gbp} </Text>
<Text style= {textStyle}> SEK : {sek} </Text>
<Text style= {textStyle}> CHF : {chf} </Text>


            </View>
        )
    }
}
const styles = StyleSheet.create({
    converterWrapper:{
        paddingTop : 30,
        justifyContent :"center",
        alignItems : "center",
        

    },
    inputStyle:{
        width: 200,
        height : 40,
        paddingBottom :8,
        fontSize:19
        

    },
    textStyle:{
        width:170,
        height:50,
        fontWeight: "bold",
        fontSize : 20
        
    },
    

});
export default Converter;

