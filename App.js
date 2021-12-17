/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
 
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Avatar,Card,Button,Image } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';


const App = () => {
 
  return (
    <ScrollView style = {{flex : 1}} >
    <View style={styles.container}>
    
         
              
              <View style={styles.viewhaut}>
                <View style = {styles.header}>
                  <View style = {styles.start}>
                    <View style = {styles.avatar}>
                            <Avatar
                          rounded
                          source={{
                          uri:
                            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                        
                      />
            </View>
                    <View>
                    <Text style = {styles.ralph}>Babacar KADAM</Text>
                    </View>
                    </View>
                    <View style= {styles.icones}>
                    <View >
                    
                    <Icon
                    name='bell'
                    size={23}
                    color='#FFFFFF' />
                    </View>
                    <View style={{marginLeft : 10}}>
                    
                  <Icon
                    name='cog'
                    size={23}
                    color='#FFFFFF' />
                    </View>
                    </View>
                    </View>

                    <View style = {styles.secondHeader}>
                    <View style = {styles.iconBack}>
                    <Icon
                      name='arrow-left'
                      size={22}
                    
                      color='#FFFFFF' />
                      </View>
                      <View style = {styles.recherche}>
                    <Text style= {styles.title}>
                      Recherche
                    </Text>
                      </View>

                    </View>

                    <View style ={styles.firstcard}>
                    <Card containerStyle={styles.card}>
                      <View style = {styles.innercard1}>
            <View style={styles.innercard}>
              <View>
              <Text style={{marginBottom: 10,fontSize : 12,fontWeight: 'bold'}}>
                Mots cles (postes , secteurs)
              </Text>
              </View>
              <View style = {styles.buttonsgroup}>
                <View >
              <Button
              buttonStyle = {styles.buttonStyle2}
            title="UI/UX Designer"
            type="rounded"
            titleStyle = {styles.titleStyle}
          />
          </View>

          <View>
              <Button
              buttonStyle = {styles.buttonStyle2}
            title="Prototype"
            type="rounded"
            titleStyle = {styles.titleStyle}
          />
          </View>
            
              </View>
              </View>
              <View >
              <Button
            buttonStyle = {styles.buttonStyle}
            icon={
              <Icon
                name="pencil"
                size={
                  17}
                color="#95ADBE"
              />}
          />
            
              </View>
              </View>
              <View style = {styles.localisation}>
                <Text style = {{color : "#2B58DC",fontWeight : "bold" , fontSize : 12}}>Localisations souhaitees</Text>
              </View>
          
              <View style = {{top : 30}}>
              <Button
              buttonStyle = {styles.buttonStyle3}
            title="Bordeaux"
            type="rounded"
            titleStyle = {styles.titleStyle2}
          />
          </View>

          <View style = {{top  : 40}}>
                <Text style = {{color : "#2B58DC",fontWeight : "bold" , fontSize : 12}}>quels types de contrats vous interessent?</Text>
              </View>
          
              <View style = {styles.buttongroup}>
                <View >
                  <Button buttonStyle = {styles.buttonStyle4} title="CDD" titleStyle = {styles.titleStyle2}/>
                </View>
                <View style = {{marginLeft : 10}}>
                  <Button buttonStyle = {styles.buttonStyle5} title="CDI" titleStyle = {styles.titleStyle2}/>
                </View>
                <View style = {{marginLeft : 10}}>
                  <Button buttonStyle = {styles.buttonStyle6} title="Freelance" titleStyle = {styles.titleStyle2}/>
                </View>
              </View>
              <View style = {{top  : 75}}>
              <Text style = {{color : "#2B58DC",fontWeight : "bold" , fontSize : 13}}>Annees d'experience</Text>
              </View>


          </Card>
          </View>

                    </View>
              
                
                 
                 <View style = {{top : 220}}>
                 <Card containerStyle = {{borderRadius : 10 ,height : 486}}>
                   <View style={{display : 'flex' , justifyContent : 'space-between' , flexDirection : 'row'}}>
                   <View>
                   <Image
                    source={{ uri:  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
                    style={{ width: 50, height: 50 ,borderRadius : 5}}
                  />
                   </View>
            <View style = {{display : 'flex',flexDirection : 'column',right : 90}}>       
              <View>
                <Text style={{marginBottom: 10 ,color :'#95ADBE',fontWeight : 'bold',fontSize : 13}}>
                MANAGER COMMERCIAL
                </Text>
                </View>
                <View>
                <Text style={{marginBottom: 10,color :'#181818',fontWeight : 'normal',fontSize : 12}}>
                CDI - AXA - 12/09/2020
                </Text>
                </View>
              </View>
              </View>
              <Text></Text>
              <View style = {{flexDirection : 'row' , display : 'flex' , justifyContent : 'space-between'}}>
                  <View style = {{flexDirection : 'row' , display : 'flex',justifyContent : 'flex-start'}}>
                    <View>
                  <Icon
                name="map-marker"
                size={
                  17}
                color="#95ADBE"
              />
              </View>
              <Text></Text>
              <View>
                  <Text style = {{color : '#95ADBE',fontWeight : 'bold',fontSize : 14}}>France entiere</Text>
              </View>
                  </View>
                  <View style = {{flexDirection : 'row' , display : 'flex',justifyContent : 'center',right : 80}}>
                    <View>
                  <Icon
                name="calendar-times-o"
                size={
                  17}
                color="#95ADBE"
              />
              </View>
          
              <View>
                <Text style = {{color : '#95ADBE',fontWeight : 'bold',fontSize : 14}}>12/09/2020</Text>
              </View>
                  </View>
              </View>
              <Text></Text>
              <View>
                <Text style = {{color : '#181818',fontWeight : 'normal' }}>
                Rejoignez une entreprise leader au sein d’un réseau en pleine croissance !</Text>
                <Text></Text>
                <Text style = {{color : '#181818',fontWeight : 'normal' }}> AXA, leader mondial de l’assurance, accompagne plus de 105 millions de clients à travers 64 pays. AXA se positionne comme la 1ère marque mondiale d’assurance pour la 8ème année consécutive (classement Interbrand).
                </Text>
              </View>
              <Text></Text>
              <Text></Text>
              <View style ={{flexDirection : 'row'}}>
                <Button buttonStyle = {{backgroundColor : "#DFE8EF",width : 65,height : 31,borderRadius : 10}} title="sketch" titleStyle = {styles.titleStyle2}/>
                <Button buttonStyle = {{backgroundColor : "#DFE8EF",width : 62,marginLeft : 10,height : 31,borderRadius : 10}} title="figma" titleStyle = {styles.titleStyle2}/>
                <Button buttonStyle = {{backgroundColor : "#DFE8EF",width : 89,marginLeft : 10,height : 31,borderRadius : 10}} title="after effect" titleStyle = {styles.titleStyle2}/>

              </View>
              <View style ={{flexDirection : 'row',top : 10}}>
                <Button buttonStyle = {{backgroundColor : "#DFE8EF",width : 87,height : 31,borderRadius : 10}} title="photoshop" titleStyle = {styles.titleStyle2}/>
                <Button buttonStyle = {{backgroundColor : "#DFE8EF",width : 125,marginLeft : 10,height : 31,borderRadius : 10}} title="Interaction Design" titleStyle = {styles.titleStyle2}/>
              

              </View>
              <View style= {{top : 30 ,flexDirection : 'row'}}>
                <View>
                  <Button buttonStyle = {{height : 39 , width : 175 , backgroundColor : "#76B72A",borderRadius : 10}} title="Postuler a cette offre"/>
                </View>
                <View style = {{marginLeft : 30}}>
                  <Button  icon={
              <Icon
                name="thumbs-down"
                size={
                  17}
                color="#EB6608"
              />}
              buttonStyle = {{height : 39 , width : 40 ,backgroundColor : "#F2F6F9", borderRadius : 10}}/>
                </View>
                <View style = {{marginLeft : 10}}>
                  <Button  icon={
              <Icon
                name="heart-o"
                size={
                  17}
                color="#76B72A"
              />}
              buttonStyle = {{height : 39 , width : 40,borderRadius : 10,backgroundColor : "#F2F6F9"  }}/>
                </View>
              </View>
                    
</Card>
                 </View>

                 <View style = {{top : 220}}>
                 <Card containerStyle = {{borderRadius : 10 ,height : 486}}>
                   <View style={{display : 'flex' , justifyContent : 'space-between' , flexDirection : 'row'}}>
                   <View>
                   <Image
                    source={{ uri:  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', }}
                    style={{ width: 50, height: 50 ,borderRadius : 5}}
                  />
                   </View>
            <View style = {{display : 'flex',flexDirection : 'column',right : 80}}>       
              <View>
                <Text style={{marginBottom: 10 ,color :'#95ADBE',fontWeight : 'bold',fontSize : 13}}>
                Experienced UI/UX designer
                </Text>
                </View>
                <View>
                <Text style={{marginBottom: 10,color :'#181818',fontWeight : 'normal',fontSize : 12}}>
                CDI - AXA - 12/09/2020
                </Text>
                </View>
              </View>
              </View>
              <Text></Text>
              <View style = {{flexDirection : 'row' , display : 'flex' , justifyContent : 'space-between'}}>
                  <View style = {{flexDirection : 'row' , display : 'flex',justifyContent : 'flex-start'}}>
                    <View>
                  <Icon
                name="map-marker"
                size={
                  17}
                color="#95ADBE"
              />
              </View>
              <View>
                  <Text style = {{color : '#95ADBE',fontWeight : 'bold',fontSize : 14}}>France entiere</Text>
              </View>
                  </View>
                  <View style = {{flexDirection : 'row' , display : 'flex',justifyContent : 'center',right : 80}}>
                    <View>
                  <Icon
                name="calendar-times-o"
                size={
                  17}
                color="#95ADBE"
              />
              </View>
          
              <View>
                <Text style = {{color : '#95ADBE',fontWeight : 'bold',fontSize : 14}}>12/09/2020</Text>
              </View>
                  </View>
              </View>
              <Text></Text>
              <View>
                <Text style = {{color : '#181818',fontWeight : 'normal' }}>
                Rejoignez une entreprise leader au sein d’un réseau en pleine croissance !</Text>
                <Text></Text>
                <Text style = {{color : '#181818',fontWeight : 'normal' }}> AXA, leader mondial de l’assurance, accompagne plus de 105 millions de clients à travers 64 pays. AXA se positionne comme la 1ère marque mondiale d’assurance pour la 8ème année consécutive (classement Interbrand).
                </Text>
              </View>
              <Text></Text>
              <Text></Text>
              <View style ={{flexDirection : 'row'}}>
                <Button buttonStyle = {{backgroundColor : "#DFE8EF",width : 65,height : 31,borderRadius : 10}} title="sketch" titleStyle = {styles.titleStyle2}/>
                <Button buttonStyle = {{backgroundColor : "#DFE8EF",width : 62,marginLeft : 10,height : 31,borderRadius : 10}} title="figma" titleStyle = {styles.titleStyle2}/>
                <Button buttonStyle = {{backgroundColor : "#DFE8EF",width : 89,marginLeft : 10,height : 31,borderRadius : 10}} title="after effect" titleStyle = {styles.titleStyle2}/>

              </View>
              <View style ={{flexDirection : 'row',top : 10}}>
                <Button buttonStyle = {{backgroundColor : "#DFE8EF",width : 87,height : 31,borderRadius : 10}} title="photoshop" titleStyle = {styles.titleStyle2}/>
                <Button buttonStyle = {{backgroundColor : "#DFE8EF",width : 125,marginLeft : 10,height : 31,borderRadius : 10}} title="Interaction Design" titleStyle = {styles.titleStyle2}/>
              

              </View>

              <View style= {{top : 30 ,flexDirection : 'row'}}>
                <View>
                  <Button buttonStyle = {{height : 39 , width : 173 , backgroundColor : "#76B72A",borderRadius : 10}} title="Postuler a cette offre"/>
                </View>
                <View style = {{marginLeft : 30}}>
                  <Button  icon={
              <Icon
                name="thumbs-down"
                size={
                  17}
                color="#EB6608"
              />}
              buttonStyle = {{height : 39 , width : 40 ,backgroundColor : "#F2F6F9", borderRadius : 10}}/>
                </View>
                <View style = {{marginLeft : 10}}>
                  <Button  icon={
              <Icon
                name="heart-o"
                size={
                  17}
                color="#76B72A"
              />}
              buttonStyle = {{height : 39 , width : 40,borderRadius : 10,backgroundColor : "#F2F6F9"  }}/>
                </View>
              </View>
                    
</Card>
                 </View>
                 <View style = {{top : 220}}>
                 <Card containerStyle = {{borderRadius : 10 ,height : 486}}>
                   <View style={{display : 'flex' , justifyContent : 'space-between' , flexDirection : 'row'}}>
                   <View>
                   <Image
                    source={{ uri:  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', }}
                    style={{ width: 50, height: 50 ,borderRadius : 5}}
                  />
                   </View>
            <View style = {{display : 'flex',flexDirection : 'column',right : 80}}>       
              <View>
                <Text style={{marginBottom: 10 ,color :'#95ADBE',fontWeight : 'bold',fontSize : 13}}>
                WP Residence WP Estate
                </Text>
                </View>
                <View>
                <Text style={{marginBottom: 10,color :'#181818',fontWeight : 'normal',fontSize : 12}}>
                CDI - AXA - 12/09/2020
                </Text>
                </View>
              </View>
              </View>
              <Text></Text>
              <View style = {{flexDirection : 'row' , display : 'flex' , justifyContent : 'space-between'}}>
                  <View style = {{flexDirection : 'row' , display : 'flex',justifyContent : 'flex-start'}}>
                    <View>
                  <Icon
                name="map-marker"
                size={
                  17}
                color="#95ADBE"
              />
              </View>
              <View>
                  <Text style = {{color : '#95ADBE',fontWeight : 'bold',fontSize : 14}}>France entiere</Text>
              </View>
                  </View>
                  <View style = {{flexDirection : 'row' , display : 'flex',justifyContent : 'center',right : 80}}>
                    <View>
                  <Icon
                name="calendar-times-o"
                size={
                  17}
                color="#95ADBE"
              />
              </View>
          
              <View>
                <Text style = {{color : '#95ADBE',fontWeight : 'bold',fontSize : 14}}>12/09/2020</Text>
              </View>
                  </View>
              </View>
              <Text></Text>
              <View>
                <Text style = {{color : '#181818',fontWeight : 'normal' }}>
                Rejoignez une entreprise leader au sein d’un réseau en pleine croissance !</Text>
                <Text></Text>
                <Text style = {{color : '#181818',fontWeight : 'normal' }}> AXA, leader mondial de l’assurance, accompagne plus de 105 millions de clients à travers 64 pays. AXA se positionne comme la 1ère marque mondiale d’assurance pour la 8ème année consécutive (classement Interbrand).
                </Text>
              </View>
              <Text></Text>
              <Text></Text>
              <View style ={{flexDirection : 'row'}}>
                <Button buttonStyle = {{backgroundColor : "#DFE8EF",width : 65,height : 31,borderRadius : 10}} title="sketch" titleStyle = {styles.titleStyle2}/>
                <Button buttonStyle = {{backgroundColor : "#DFE8EF",width : 62,marginLeft : 10,height : 31,borderRadius : 10}} title="figma" titleStyle = {styles.titleStyle2}/>
                <Button buttonStyle = {{backgroundColor : "#DFE8EF",width : 89,marginLeft : 10,height : 31,borderRadius : 10}} title="after effect" titleStyle = {styles.titleStyle2}/>

              </View>
              <View style ={{flexDirection : 'row',top : 10}}>
                <Button buttonStyle = {{backgroundColor : "#DFE8EF",width : 87,height : 31,borderRadius : 10}} title="photoshop" titleStyle = {styles.titleStyle2}/>
                <Button buttonStyle = {{backgroundColor : "#DFE8EF",width : 125,marginLeft : 10,height : 31,borderRadius : 10}} title="Interaction Design" titleStyle = {styles.titleStyle2}/>
              

              </View>

              <View style= {{top : 30 ,flexDirection : 'row'}}>
                <View>
                  <Button buttonStyle = {{height : 39 , width : 173 , backgroundColor : "#76B72A",borderRadius : 10}} title="Postuler a cette offre"/>
                </View>
                <View style = {{marginLeft : 30}}>
                  <Button  icon={
              <Icon
                name="thumbs-down"
                size={
                  17}
                color="#EB6608"
              />}
              buttonStyle = {{height : 39 , width : 40 ,backgroundColor : "#F2F6F9", borderRadius : 10}}/>
                </View>
                <View style = {{marginLeft : 10}}>
                  <Button  icon={
              <Icon
                name="heart-o"
                size={
                  17}
                color="#76B72A"
              />}
              buttonStyle = {{height : 39 , width : 40,borderRadius : 10,backgroundColor : "#F2F6F9"  }}/>
                </View>
              </View>
                    
</Card>
                 </View>

                  </View>
                  </ScrollView>
            
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor : "#E5E5E5",
    height :2150
  

  },
 viewhaut: {
    height : '15%',
    backgroundColor: "#1951A0"
  },
  header : {
    display :  'flex',
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignContent : 'space-between',
    top : '8%'
  },
  start : {
    display :  'flex',
    justifyContent : 'flex-start',
    flexDirection : 'row',

  },
  ralph : {
    color : "#FFFFFF",
    fontWeight : 'bold',
    fontSize : 15,
    top : '20%',
    left : '27%'
  },
  icones : {
    display : 'flex',
    justifyContent : 'flex-end',
    flexDirection : 'row',
    right : '5%'

  },
  avatar : { 
    left : '55%'
  },
  secondHeader : {
    top : '12%',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'space-between'
  },
  recherche : {
    right : '600%',
    top : '1%'
  },
  title : {
    color : "#FFFFFF",
    fontWeight : 'bold',
    fontFamily : 'Roboto',
    fontSize : 18
  },
  iconBack:{
    left : '95%'
  },
  firstcard:{
    top : '20%'
  },
  card:{
    height : 400,
    borderWidth : 1,
    borderColor :'#BDBDBD',
    borderRadius: 10,
  },
  innercard1 : {
    flexDirection : 'row',
    display : 'flex',
    justifyContent : 'space-between'
  },
  innercard : {
    flexDirection : 'column'
  },
  buttonStyle : {
    backgroundColor : '#F1F5F8',
    height : 40,
    width : 40
  },
  buttonsgroup : {
    flexDirection : 'row',
    display : 'flex',
    justifyContent : 'space-between'
  },
  titleStyle : {
    color : "#FFFFFF",
    fontSize : 10,
    display : 'flex',
    fontWeight : 'normal',
     
     top : 0
  },
  titleStyle2 : {
    color : "#1C1F28",
    fontSize : 10,
    display : 'flex',
    fontWeight : 'normal',
     
     top : 0
  },
  buttonStyle2 : {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor : "#76B72A",
    height : 30,
    marginLeft : 5,
    width : 100
  },
  localisation : {
    top : 20 

  },
  buttonStyle3: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor : "#DFE8EF",
    height : 30,
    width : 100,
    color : "#1C1F28"
  },
  buttongroup : {
    top : 60,
    flexDirection : 'row',
    display : 'flex',
    justifyContent : 'flex-start',
    padding : 0
  },
  buttonStyle4: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor : "#DFE8EF",
    height : 30,
    width : 52,
    color : "#1C1F28"
  },
  buttonStyle5: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor : "#DFE8EF",
    height : 30,
    width : 47,
    color : "#1C1F28"
  },
  buttonStyle6: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor : "#DFE8EF",
    height : 30,
    width : 80,
    color : "#1C1F28"
  },
  
});

export default App;
