import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import ResturantCard from './resturantCard'
import { getFeaturedResturantById } from '../api'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme'

export default function FeatureRow({title, description, restaurants}) {

  // const [resturants, setResturants] = useState([]);

  // useEffect(() => {
  //   getFeaturedResturantById(id).then(data=>{
  //     // console.log('got data: ',data);
  //     setResturants(data?.restaurants);
  //   })
  // }, [id])
  // // console.log(resturants);
  
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">
            {description}
          </Text>
        </View>
        
        <TouchableOpacity>
          <Text style={{color: themeColors.text}} className="font-semibold">See All</Text>
        </TouchableOpacity>
      </View>

      

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:15,
        }}
        className="overflow-visible py-5"
       >
        {
          restaurants.map((resturant,index)=>{
            return (
                <ResturantCard
                  item={resturant}
                  key={index}
                />    
            )
          })
        }           
       </ScrollView>
    
    </View>
  )
}