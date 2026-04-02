import ListHeading from "@/components/ListHeading";
import SubscriptionCard from "@/components/SubscriptionCard";
import UpcomingSubscriptionCard from "@/components/UpcomingSubscriptionCard";
import {
  HOME_BALANCE,
  HOME_SUBSCRIPTIONS,
  HOME_USER,
  UPCOMING_SUBSCRIPTIONS,
} from "@/constants/data";
import { icons } from "@/constants/icons";
import images from "@/constants/images";
import "@/global.css";
import { formatCurrency } from "@/lib/utils";
import dayjs from "dayjs";
import { styled } from "nativewind";
import { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function Home() {
  const [expandedSubscriptionId, setExpandedSubscriptionId] = useState<
    string | null
  >(null);

  const handleSubscriptionPress = (id: string) => {
    setExpandedSubscriptionId((prev) => (prev === id ? null : id));
  };

  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      {/* All Subscriptions */}
      <FlatList
        data={HOME_SUBSCRIPTIONS}
        ListHeaderComponent={
          <>
            {/* Header */}
            <View className="home-header">
              <View className="home-user">
                <Image source={images.avatar} className="home-avatar" />
                <Text className="home-user-name">{HOME_USER.name}</Text>
              </View>
              <TouchableOpacity className="rounded-full border border-gray-300 p-[2px]">
                <Image source={icons.plus} className="home-add-icon" />
              </TouchableOpacity>
            </View>

            {/* Balance Card */}
            <View className="home-balance-card">
              <Text className="home-balance-label">Balance</Text>
              <View className="home-balance-row">
                <Text className="home-balance-amount">
                  {formatCurrency(HOME_BALANCE.amount)}
                </Text>
                <Text className="home-balance-date">
                  {dayjs(HOME_BALANCE.nextRenewalDate).format("MM/DD")}
                </Text>
              </View>
            </View>

            {/* Upcoming Subscriptions */}
            <View className="mb-5">
              <ListHeading title="Upcoming" />
              <FlatList
                data={UPCOMING_SUBSCRIPTIONS}
                renderItem={({ item }) => (
                  <UpcomingSubscriptionCard data={item} />
                )}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={
                  <Text className="home-empty-state">
                    No upcoming renewals yet.
                  </Text>
                }
              />
            </View>

            {/* All Subscriptions List Heading */}
            <ListHeading title="All Subscriptions" />
          </>
        }
        renderItem={({ item }) => (
          <SubscriptionCard
            name={item.name}
            price={item.price}
            currency={item.currency}
            billing={item.billing}
            icon={item.icon}
            status={item.status}
            paymentMethod={item.paymentMethod}
            startDate={item.startDate}
            renewalDate={item.renewalDate}
            color={item.color}
            expanded={expandedSubscriptionId === item.id}
            onPress={() => handleSubscriptionPress(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        extraData={expandedSubscriptionId}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="h-4" />}
        contentContainerClassName="pb-20"
        ListEmptyComponent={
          <Text className="home-empty-state">No subscriptions yet.</Text>
        }
      />
    </SafeAreaView>
  );
}
