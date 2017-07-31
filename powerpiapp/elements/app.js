import React, { Component } from 'react';
import {
  View,
  LayoutAnimation
} from 'react-native';
import Banner from './banner';
import Menu from './menu';

const FBSDK = require('react-native-fbsdk');

const {
  AccessToken,
  LoginButton,
  GraphRequest,
  GraphRequestManager,
} = FBSDK;

export default class app extends Component {

  constructor(props) {
        super(props);
        this.state = { animatedBanner: true, colors: ['#4ECDC4', '#F7FFF7', '#FF6B6B', '#FFE66D'], whichColor: 0, screen: 'welcome', userDetail: '' };

        if (this.state.animatedBanner) {
                setInterval(() => {
                    this.setState({ whichColor: (this.state.whichColor + 1) % this.state.colors.length });
                }, 1000);
            }
        }

  renderButton() {
    return (
    <View>
      <LoginButton
        onLoginFinished={
          (error, result) => {
            if (error) {
              alert('login has error: ' + result.error);
            } else if (result.isCancelled) {
              alert('login is cancelled.');
            } else {
              AccessToken.getCurrentAccessToken().then(
                (data) => {
                  let accessToken = data.accessToken

                  const responseInfoCallback = (error, result) => {
                    if (error) {
                      console.log(error);
                      alert('Error fetching data: ' + error.toString());
                    } else {
                      console.log(result);
                      this.setState({ userDetail: result, screen: 'menu', animatedBanner: false });
                    }
                  };

                  const infoRequest = new GraphRequest(
                    '/me',
                    {
                      accessToken,
                      parameters: {
                        fields: {
                          string: 'email,name,first_name,middle_name,last_name'
                        }
                      }
                    },
                    responseInfoCallback
                  );
                  new GraphRequestManager().addRequest(infoRequest).start();
                }
              );
            }
          }
        }
        onLogoutFinished={() => {
          this.setState({ userDetail: '', screen: 'welcome', animatedBanner: true });
          }
        }
      />
    </View>
      );
  }

  renderScreen() {
    switch (this.state.screen) {
      case 'welcome':
        {
          return (
            <View style={{ flex: 1 }}>
              <Banner color={this.state.colors[this.state.whichColor]} />
            </View>
          );
        }
      case 'menu':
          return (
            <Menu userDetail={this.state.userDetail} />
          );
      default:
    }
  }
    
  render() {
    LayoutAnimation.easeInEaseOut();
    return (
      <View style={styles.container}>
        {this.renderScreen()}
        <View style={styles.buttonContainer}>{this.renderButton()}</View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#011627',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
};
