/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

export default class iOSTabBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedTab: 'home' // init selected tab, 初始頁
    }
  }
  render() {
    return (
      <TabBarIOS
        unselectedTintColor="yellow"
        tintColor="white"
        unselectedItemTintColor="green"
        barTintColor="darkslateblue">
        <Icon.TabBarItemIOS
          title="Home"
         /*
          * unselected icon
          * 未被選中時的圖示
          */
          iconName="ios-home-outline"  
         /*
          * selected icon
          * 被選中時的圖示
          */
          selectedIconName="ios-home"
         /*
          * when selectedTab state is 'home', set tab selected
          * 當 selectedTab 被設成 'home' 的時候，設定本頁為被選擇頁
          */
          selected={this.state.selectedTab === 'home'}
         /*
          * when press, set selectedTab state to be 'home'
          * 當點擊時，設定 selectedTab 為 'home'
          */
          onPress={() => { 
            this.setState({
              selectedTab: 'home',
            });
          }}>
          {
            /*
             * tab content 
             * 頁面內容
             */
          }
          <View style={styles.container}>
            <Text>Home Tab Content</Text>
          </View>
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="會員"
          iconName="ios-person-outline"
          selectedIconName="ios-person"
          selected={this.state.selectedTab === 'profile'}
          onPress={() => {
            this.setState({
              selectedTab: 'profile',
            });
          }}>
          <View style={styles.container}>
            <Text>Profile Tab Content</Text>
          </View>
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})

AppRegistry.registerComponent('iOSTabBar', () => iOSTabBar)
