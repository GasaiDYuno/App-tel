import React from 'react';
import {Button, Image, ScrollView,Alert,StyleSheet, Text, Modal, TouchableOpacity, View} from 'react-native';
import {homeStyle} from './style/home';
import {fontsStyle} from "./style/fonts";
import {globalStyle} from "./style/global";
import AppHeader from "./components/AppHeader";
import ScanButton from "./components/ScanButton";
import ProductItem from "./components/ProductItem";


export default class App extends React.Component {
  constructor(){
    super();

    this.state = {
      modalVisible: false,
      products : [
        {id: 1, name : 'Le Bon Paris', date: new Date()},
        {id: 2, name : 'Kinder Bueno', date: new Date()},
        {id: 3, name : 'Nestea', date: new Date()},
        {id: 4, name : 'Bière sans alcool', date: new Date()}
      ]
  
      
    };


 

    this.title = "Yiko"
  }


  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  handleScanPress = () => {
    this.setModalVisible(true)
    //alert('Je scan un produit')
  };



  handleProductPress = async (id) => {
    if(id == 1){
      await this._handleBarCodeRead({type: 'EAN' , data: '3154230030294'})
    }
    else{
      
    }
    if(id == 2){
      await this._handleBarCodeRead({type: 'EAN' , data :'8000500037560'})
    }
    else{
      
    }
    if(id == 3){
      await this._handleBarCodeRead({type: 'EAN' , data: '3228886043714'})
    }
    else{

    }
    if(id == 4){
      await this._handleBarCodeRead({type: 'EAN' , data: '3244851003668'})
    }
    else{
      
    }
  };



  async getProductFromApi(barcode) {
    try {
      let response = await fetch(
          'https://fr.openfoodfacts.org/api/v0/produit/' + barcode + '.json'
      );
      let responseJson = await response.json();
      return responseJson.product;
    } catch (error) {
      console.error(error);
    }
  }

   /*
  Appelée quand la caméra a détecté un code barre,
  testez vous même !
   */
  async _handleBarCodeRead ({ type, data }) {
    // On récupère le produit scanné
    let scannedProduct = await this.getProductFromApi(data);
 
    // On crée un nouvel obj. produit
    let newProduct = {id: 1, name: scannedProduct.product_name, date: new Date()};
 
    let _products = this.state.products; // récupération de la liste actuelle
 
    console.log(scannedProduct);
    console.log(newProduct);
 
    _products.push(newProduct); // ajout du nouveau produit
    this.setState({products : _products}); // on set les nouveau produits dans le state
    this.setState({modalScanVisible: false});
    if(_products.push){
      newProduct = _products.push
    }
    else{
      alert('nothing')
    }
  };
  


  render() {
    return (
      <View style={globalStyle.container}>
        <AppHeader title={this.title}/>
        
        <ScanButton handlePress={this.handleScanPress}/>

        <ScrollView style={homeStyle.scrollProductView}>
          {
           this.state.products.map(
               (produit) => {
                 return (
                     <ProductItem product={produit} key={produit.id} onPressItem={this.handleProductPress}/>
                 )
               }
           )
          }
        </ScrollView>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{flex: 1}}>
            <AppHeader title="Scanner"/> 

            <TouchableOpacity 
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
              style={{
                position: "absolute", 
                backgroundColor: "#CD5C5C", 
                width: "100%",
                height: 70,
                left: 0, 
                bottom: 0}}>


                <Text
                style={{
                  textAlign:"center",
                  fontSize: 22,
                  alignItems:"center",
                  paddingTop: "5%",
                  
                }}>Cacher le modal</Text> 
                
            </TouchableOpacity>
          </View>
        </Modal>
        
      </View>
    );
  }
}