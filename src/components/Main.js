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

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;