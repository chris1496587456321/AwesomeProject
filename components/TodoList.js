import { Component } from "react";
import { View, Text, TextInput, Button, ScrollView, FlatList } from "react-native";

class TodoList extends Component {
constructor (props){
    super(props)
}
    state = {
        list : [],
        inputTxt : "",
    }
    title = "Ma TodoList";
    insertList (){
        console.log("input : "+this.state.inputTxt)
        let listTmp = this.state.list;
        listTmp.push({key:this.state.inputTxt});
        this.setState({list:listTmp});

        this.setState({inputTxt: ""});

        console.dir(this.state.list)
    }
    deleteItem(index){
        console.log(index)
        let listTmp = this.state.list;
        listTmp.splice(index,1);
        this.setState({list:listTmp});
    }
    render(){
        return (
            <View>
                <Text>{this.title}</Text>
                <TextInput
                onChangeText={(text) => {this.setState({inputTxt:text})}}
                value={this.state.inputTxt}
                ></TextInput>
                <Button title= "ok" onPress={()=>{
                    this.state.inputTxt.length !== 0 && this.insertList()
                    }}></Button>
                <ScrollView>
                    <FlatList 
                        data={this.state.list}
                        renderItem={({ item,index }) => 
                        <Text>
                        {item.key}
                        <Button 
                        title= "X" 
                        onPress={()=>{this.deleteItem(index)}}>

                        </Button>
                        </Text>
                    }
                    />
                    
                    
                </ScrollView>
            </View>
            )
    }
    
}
export default TodoList;