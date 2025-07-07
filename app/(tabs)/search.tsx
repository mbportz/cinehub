import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";

const Search = () => {
   const [searchQuery, setSearchQuery] = useState("");

   const {
      data: movies,
      loading,
      error,
      refetch: loadMovies,
      reset,
   } = useFetch(() => fetchMovies({ query: searchQuery }));

   useEffect(() => {
      const timeoutId = setTimeout(async () => {
         if (searchQuery.trim()) {
            await loadMovies();
         } else {
            reset();
         }
      }, 500);

      return () => clearTimeout(timeoutId);
   }, [searchQuery]);

   return (
      <View className="flex-1 bg-primary">
         <Image
            source={images.bg}
            className="flex-1 absolute w-full z-0"
            resizeMode="cover"
         />

         <FlatList
            data={movies}
            renderItem={({ item }) => <MovieCard {...item} />}
            keyExtractor={(item) => item.id.toString()}
            className="px-5"
            numColumns={3}
            columnWrapperStyle={{
               justifyContent: "center",
               gap: 16,
               marginVertical: 16,
            }}
            contentContainerStyle={{ paddingBottom: 100 }}
            ListHeaderComponent={
               <>
                  <View className="w-full flex-row justify-center mt-20">
                     <Image source={icons.logo} className="w-12 h10" />
                  </View>

                  <View className="my-5">
                     <SearchBar
                        placeholder="Search Movies..."
                        value={searchQuery}
                        onChangeText={(item: string) => setSearchQuery(item)}
                     />
                  </View>

                  {loading && (
                     <ActivityIndicator size="large" color="#0000ff" />
                  )}

                  {error && (
                     <Text className="text-red-500 px-5 my-3">
                        Error: {error.message}
                     </Text>
                  )}

                  {!loading &&
                     !error &&
                     searchQuery.trim() &&
                     movies?.length > 0 && (
                        <Text className="text-xl text-white font-bold">
                           Search Result for{" "}
                           <Text className="text-screen">{searchQuery}</Text>
                        </Text>
                     )}
               </>
            }
         />
      </View>
   );
};

export default Search;
