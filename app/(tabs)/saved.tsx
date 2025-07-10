import React from "react";
import { Image, Text, View } from "react-native";

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

const Saved = () => {
   return (
      <View className="flex-1 bg-primary">
         <Image source={images.bg} className="absolute w-full z-0" />

         <View className="flex-1 justify-center items-center gap-y-5 ">
            <Image source={icons.save} className="h-[50] w-[50]" />

            <Text className="text-white text-center text-2xl">Saved</Text>
         </View>
      </View>
   );
};

export default Saved;
