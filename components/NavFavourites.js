import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const data = [
  {
    id: "123",
    icon: "home",
    locs: {
      lat: 36.2073612,
      lng: 36.1300969,
    },
    location:"Home",
    destination: "Çekmece, Defne/Hatay, Turkey",
  },
  {
    id: "456",
    icon: "briefcase",
    locs: {
      lat: 40.82217319999999,
      lng: 29.92165169999999,
    },
    location:"School",
    destination: "Kabaoğlu, Kocaeli Üniversitesi, İzmit/Kocaeli, Turkey",
  },
];

const NavFavourites = () => {
  const navigation=useNavigation()
  const dispatch=useDispatch()
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={({ item: { location,locs, destination, icon } }) => (
        <TouchableOpacity 
        style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}> {location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
