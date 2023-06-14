import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularjobCard from '../../common/cards/popular/PopularJobCard'

const Popularjobs = () => {
  const router = useRouter()
  const isLoading = false
  const error = false

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {/* if loading, show loading icon */}
        {isLoading ? (
          <ActivityIndicator size='large' colors={COLORS.primary} />
          // if error, show error message
        ) : error ? (
          <Text>Something went wrong.</Text>
        ) : (
          // else show list of jobs in horizontal row
          <FlatList
            data={[1, 2, 3, 4]}
            renderItem={({ item }) => (
              <PopularjobCard
                item={item}
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs