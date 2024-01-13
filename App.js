import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { useState } from "react";


export default function App() {
  const [input, setInput] = useState("");
const [tasks, setTasks] = useState([
  {
    id: 1,
    isDone: false,
    text: "Daily meeting with team",
  },
]);
  return (
    <View className="mt-[50] ml-[22] mr-[22] bg-white">
      <View className="flex-row justify-between items-center">
        <Image source={require("./assets/new-icons/2.png")}/>
        <Image source={require("./assets/new-icons/bell.png")}/>
      </View>
      <View className="mt-[25] ">
        <Text className="font-bold text-[#1A2134]" style={{fontSize:36}}>What's Up!</Text>
        <Text className="font-normal text-[#B0B5C7] mt-[25]" style={{fontSize:14}}>ADD NEW TASK</Text>
      </View>
      <View className="mt-[25] flex-row justify-between items-center">
        <TextInput
        value={input}
        className="bg-[#FFFFFF] p-[16] rounded-full flex-1"
        placeholder="Type Here..."
        onChangeText={(text) => {
          setInput(text);
        }} 
        />
        <TouchableOpacity onPress={()=>{
          setTasks([
            ...tasks,{
              id:Math.random(),
              idDone:false,
              text:input,
            }
          ])
        }}>
        <View className="bg-[#0067FF] h-[55] w-[55] rounded-full flex-row justify-center items-center ">
         <Image source={require("./assets/new-icons/right-icon.png")}/>
        </View>
        </TouchableOpacity> 
        
        
      </View>
      <Text className="font-normal text-[#B0B5C7] mt-[25]" style={{fontSize:14}}>TODAY'S TASKS</Text>
      <View className="mt-[25]">
        {tasks.map((task) => (
           <View 
           key={task.id}
           className="p-[18] bg-white flex-row items-center w-full rounded-md">
          <Image
           source={
            task.isDone?
            require("./assets/new-icons/right.png") :
            require("./assets/new-icons/round.png")}/>
          <Text className="text-[#1A2134]">{task.text}</Text>
        </View>

        ))}
       
      </View>






    
    </View>
  );
}
