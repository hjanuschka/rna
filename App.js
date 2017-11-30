import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, Dimensions, WebView, NavigatorIOS, ScrollView } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import {
  StackNavigator,
} from 'react-navigation';


const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const f1 = () => <WebView source={{uri: 'http://mobil.krone.at/601137'}} style={[ styles.container, { backgroundColor: '#ff4081' } ]} />;
const f2 = () => <WebView source={{uri: 'http://mobil.krone.at/nachrichten'}} style={[ styles.container, { backgroundColor: '#ff4081' } ]} />;
const f3 = () => <WebView source={{uri: 'http://mobil.krone.at/xthemenuebersichtx'}} style={[ styles.container, { backgroundColor: '#ff4081' } ]} />;
const f4 = () => <WebView source={{uri: 'http://mobil.krone.at/themen/orf'}} style={[ styles.container, { backgroundColor: '#ff4081' } ]} />;
const f5 = () => <WebView source={{uri: 'http://mobil.krone.at/welt'}} style={[ styles.container, { backgroundColor: '#ff4081' } ]} />;
const f6 = () => <WebView source={{uri: 'http://mobil.krone.at/digital'}} style={[ styles.container, { backgroundColor: '#ff4081' } ]} />;
const f7 = () => <WebView source={{uri: 'http://mobil.krone.at/'}} style={[ styles.container, { backgroundColor: '#ff4081' } ]} />;
const f8 = () => <WebView source={{uri: 'http://mobil.krone.at/sport'}} style={[ styles.container, { backgroundColor: '#ff4081' } ]} />;
const f9 = () => <WebView source={{uri: 'http://mobil.krone.at/themen/angela-merkel'}} style={[ styles.container, { backgroundColor: '#ff4081' } ]} />;
const f10 = () => <WebView source={{uri: 'http://mobil.krone.at/oesterreich'}} style={[ styles.container, { backgroundColor: '#ff4081' } ]} />;




export  class NavigatorIOSApp extends React.Component {
  render() {
    return (
      <Navigator
        initialRoute={{
          component: TabbedBrowsers,
          title: 'My Initial Scene',
        }}

        style={{flex: 1}}
      />
    );
  }
}

class TabbedBrowsers extends PureComponent {

  state = {
    index: 0,
    routes: [
      { key: 'f1', title: 'f1' },
      { key: 'f2', title: 'f2' },
      { key: 'f3', title: 'f3' },
      { key: 'f4', title: 'f4' },
      { key: 'f5', title: 'f5' },
      { key: 'f6', title: 'f6' },
      { key: 'f7', title: 'f7' },
      { key: 'f8', title: 'f8' },
      { key: 'f9', title: 'f9' },
      { key: 'f10', title: 'f10' },
    ],
  };


  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar useNativeDriver={true}  scrollEnabled={true} {...props} />;

  _renderScene = SceneMap({
    f1: f1,
    f2: f2,
    f3: f3,
    f4: f4,
    f5: f5,
    f6: f6,
    f7: f7,
    f8: f8,
    f9: f9,
    f10: f10,

  });

  render() {
    return (
      <ScrollView scrollEnabled={false}  contentContainerStyle={{flex:1}}>
      <TabViewAnimated
        navigationState={this.state}
        renderHeader={this._renderHeader}
        renderScene={this._renderScene}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
        lazy={true}
      />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
const App = StackNavigator({
  Home: { screen: TabbedBrowsers , title: "Kronen Zeitung"}
}, {
  navigationOptions: {
    titel: "Kronen Zeitung"
  }
});
export default App;