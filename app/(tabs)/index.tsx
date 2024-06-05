import OnboardingScreen from '@/components/Onboarding';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image, StyleSheet, Platform, SafeAreaView, Text, Button, View, TextInput, ScrollView, Pressable, FlatList } from 'react-native';
import { Brands, NewArrivals } from "../../helpers/Datahub"
import BrandIcons from '@/components/BrandIcons';
import ProductPost from '@/components/ProductPost';
import { StatusBar } from 'expo-status-bar';
export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", }}>
      <ScrollView>
        {/* header portion  */}
        <View style={{
          width: '100%',
          display: 'flex',
          marginTop: 10,
          height: 100,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 20,
          paddingHorizontal: 10,
          alignItems: 'center',
        }}>
          <View style={{
            borderRadius: 50,
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#fff',
            borderWidth: 1,
            flex: 1,
            borderColor: 'lightgray',
          }}>
            <Ionicons name='search' style={{ padding: 15 }} size={22} />
            <TextInput style={{ flex: 1, fontFamily: 'poppins' }} placeholder='Search By Brand etc...' />
          </View>
          <Pressable style={{

          }}>
            <Image
              source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F76502%2Fscreenshots%2F16131905%2F3d_character_user_pic_4x.png&f=1&nofb=1&ipt=573ecbd584f6c36dd6ae2259f62ac94abfa65c91415785d0610ee0ca8498ae7a&ipo=images' }}
              style={{
                width: 50,
                height: 50,
                marginLeft: 10,
                borderRadius: 50,
              }} 
            />
          </Pressable>
        </View>


        {/* Brands */}
        <Text style={{ paddingHorizontal: 10, fontFamily: 'poppinsbold', fontSize: 18 }}>Brands</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            paddingHorizontal: 10,
            marginTop: 10,
          }}>
          {
            Brands.map((brandImage) => {
              return <BrandIcons ImageData={brandImage} />
            })
          }
        </ScrollView>

        {/* discount Sale */}


        <Image
          source={require("../../assets/images/big-sale-discount.jpg")}
          style={{
            width: '95%',
            alignSelf: 'center',
            height: 150,
            marginTop: 15,
            borderRadius: 10,

          }}
        />


        {/* new Arrival  */}

        <View style={{
          paddingVertical: 15,
          display: 'flex',
          paddingHorizontal: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
          <Text style={{ fontFamily: 'poppinsbold', fontSize: 18 }}>New Arrival</Text>
          <Pressable>
            <Text style={{ color: "green", fontFamily: 'poppins' }}>see all</Text>
          </Pressable>
        </View>
        <ScrollView style={{
          width: '100%',
        }}
          contentContainerStyle={{
            flex: 1,
            display: 'flex',
            flexWrap: 'wrap',
            paddingBottom: "30%",
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          {
            NewArrivals.map((data) => {
              return <ProductPost key={data.id} Imageurl={data.ProductImages} price={data.price} ProductName={data.ProductName} Data={data} />
            })
          }
        </ScrollView>


      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
