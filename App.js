import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button, TextInput, ScrollView, SafeAreaView,FlatList,  Image } from 'react-native';
import {useState} from 'react';
export default function App() {
  const [isShow, setShow] = useState(false);
  const [data, setData] = useState([
    {
      url: "https://caodang.fpt.edu.vn/wp-content/uploads/18198154_10208600482868814_3469513_n-234x375.png",
      name: "NGuyễn Minh Nhật",
      moTa: "PH25821",
    },
    {
      url: "https://caodang.fpt.edu.vn/wp-content/uploads/18198154_10208600482868814_3469513_n-234x375.png",
      name: "NGuyễn Minh Nhật1",
      moTa: "PH25821",
    },
    {
      url: "https://caodang.fpt.edu.vn/wp-content/uploads/18198154_10208600482868814_3469513_n-234x375.png",
      name: "NGuyễn Minh Nhật2",
      moTa: "PH25821",
    },
    {
      url: "https://caodang.fpt.edu.vn/wp-content/uploads/18198154_10208600482868814_3469513_n-234x375.png",
      name: "NGuyễn Minh Nhật3",
      moTa: "PH25821",
    },
    {
      url: "https://caodang.fpt.edu.vn/wp-content/uploads/18198154_10208600482868814_3469513_n-234x375.png",
      name: "NGuyễn Minh Nhật4",
      moTa: "PH25821",
    },
  ]);
  return (
     <SafeAreaView>
      <ScrollView>
      <View style={styles.container}>
     <>
     <Text style={styles.text}>Họ và tên: Nguyễn Minh Nhật</Text>
      <Text style= {styles.text}>Mã sinh viên: PH25821</Text>
     </>
     <Button
          title={'Thêm mới'}
          onPress={() => setShow(!isShow)}
        />
     {
          isShow
            ? <View style={styles.container}>
               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Họ và Tên"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
            />
              <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Mã số sinh viên"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
            />
              <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Link ảnh"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
            />
            <View
            style={styles.boder}>
              <>
              <Button
              title='Hủy'
              onPress={() => setShow(!isShow)}
              />
              <Button
              title='Lưu'
              />
              </>
            </View>
            </View>
            : null
        }
        <Text style={styles.text1}>Danh sách học sinh</Text>

<FlatList
 data={data}
 keyExtractor={(item) => item.name}
 renderItem={({ item }) => {
   return (
     <View style={{ flex: 1, flexDirection: "row" }}>
       <View>
         <Image
           style={{
             height: 80,
             width: 50,
             borderRadius: 25,
             marginTop: 10,
           }}
           source={{ uri: item.url }}
         />
       </View>
       <View style={{ marginLeft: 30 }}>
         <Text style={{ marginTop: 25 }}>{item.name}</Text>
         <Text>{item.moTa}</Text>
       </View>
     </View>
   );
 }}
/>
       
      <StatusBar style="auto" />
    </View>
  
     </ScrollView>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'center',
  },
  text:{
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color:"green"
  },
  text1:{
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color:"red"
  },
  input: {
    margin: 15,
    width:300,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
 },
 boder:{
  flex: 1,
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-evenly'
 },
 boder1:{
  flex: 1,
  margin:10,
  alignItems: 'left',
  flexDirection: 'column'
 },
});


