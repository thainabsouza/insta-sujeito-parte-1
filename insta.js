import React, { Component } from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      feed:[
        {id: '1',nome: 'Thaina', idade: 25, email: 'thaina@thaina.com'},
        {id: '2',nome: 'João', idade: 22, email: 'João@João.com'},
        {id: '3',nome: 'Andreia', idade: 24, email: 'Andreia@Andreia.com'},
        {id: '4',nome: 'Ingrid', idade: 25, email: 'ingrid@ingrid.com'},
        {id: '4',nome: 'stefany', idade: 25, email: 'tiffy@tiffy.com'},
        {id: '5',nome: 'Neymar', idade: 16, email: 'ney@ney.com'},
        {id: '6',nome: 'Jessy', idade: 15, email: 'jessy@jessy.com'}
      ]
    }
  }

  render(){  
    return(
      <View style={styles.container}>
        
      <FlatList
      data={this.state.feed}
      keyExtractor={(item) => item.id}
      renderItem={ ({item}) => <Pessoa data={item} /> }
      />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  areaPessoa:{
    backgroundColor: '#222',
    height: 200,
    marginBottom: 15
  },
  textoPessoa:{
    color: '#FFF',
    fontSize: 20,
  }

});
    
export default App;

class Pessoa extends Component{
  render(){
    return(
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}> Nome: {this.props.data.nome} </Text>
        <Text style={styles.textoPessoa}> Idade: {this.props.data.idade} </Text>
        <Text style={styles.textoPessoa}> Email: {this.props.data.email} </Text>
      </View>
    )
  }
}
