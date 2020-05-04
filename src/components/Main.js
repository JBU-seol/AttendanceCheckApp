import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import Home from '../routes/Home'
import Sub from '../routes/Sub'
import SubDetail from '../routes/SubDetail'

const MainNavigator = createStackNavigator({
    Home: Home,
    Sub: Sub,
    SubDetail: SubDetail
});

class Main extends React.Component{
    render(){
        return <MainNavigator />;
    }
}

export default createAppContainer(MainNavigator);
