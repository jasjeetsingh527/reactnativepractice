import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, Image } from 'react-native';

// export default class ReactNativAndroid extends Component {
//   render() {
//     let pic = {
//       uri: 'https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
//     };
//     return (
//       // <View>
//       //   <Text>Hello World!</Text>
//       // </View>
//       // 
      
//       <Image source={ pic } style={{ width: 193, height: 110 }} />
//     );
//   }
// }
// 

/*Props start*/
/*class Greeting extends Component {
  render() {
    return (
        <Text>
          Hello { this.props.name }!
        </Text>
      );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Greeting name='Jasjeet'/>
        <Greeting name='Singh'/>
        <Greeting name='Applify'/>
      </View>
    );
  }
}*/

/*Props end*/

/*State*/

/*class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true}

    setInterval(() => {
      this.setState( previousState => {
        return { isShowingText: !previousState.isShowingText };
      })
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
        <Text>
          { display }
        </Text>
      )
  }
}


export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text="line 1" />
        <Blink text="line 2" />
        <Blink text="line 3" />
        <Blink text="line 4" />
        <Blink text="line 5" />
        <Blink text="line 6" />
      </View>
    )
  }
}*/

/*State End*/


/*Style*/

/*export default class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
        <Text style={[styles.red, styles.big]}>red, then big</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  big: {
    fontWeight: 'bold',
    fontSize: 30,
  },
});
*/

/*Style End*/


/*fixed height - width*/

/*export default class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}}/>
        <View style={{width: 200, height: 200, backgroundColor: 'steelblue'}}/>
      </View>
    );
  }
}*/

/*fixed height - width End*/

/*flex width*/

/*export default class FixedDimensionsBasics extends Component {
  render() {
    return (

      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
        <View style={{flex: 2, backgroundColor: 'skyblue'}}/>
        <View style={{flex: 3, backgroundColor: 'steelblue'}}/>
      </View>
    );
  }
}*/

/*flex width end */


/*Flex Direction */

// export default class FlexDirectionBasics extends Component {
//     render() {
//       return (
//         <View style={{flex: 1, flexDirection: 'row'}}>
//           <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//           <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//           <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//         </View>
//       )
//     }
// }

/*Flex Direction end */

/*Justify Content */

/*export default class FlexDirectionBasics extends Component {
    render() {
      return (
      // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
      )
    }
}*/

/*Justify Content end */

/*Aling Item */
// export default class FlexDirectionBasics extends Component {
//     render() {
//       return (
//         <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
//           <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//           <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//           <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//         </View>
//       )
//     }
// }
/*Aling Item End*/


/*text input*/
export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height:40}}
          placeholder="Type Here"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}
/*text input End*/