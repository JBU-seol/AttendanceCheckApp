import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import ProHome from '../routes/ProHome';
import ProSub from '../routes/ProSub';
import ProSubDetail from '../routes/ProSubDetail';
import ProSubDetailWeek from '../routes/ProSubDetailWeek';

const ProMainNavigator = createStackNavigator({
    ProHome: ProHome,
    ProSub : ProSub,
    ProSubDetail : ProSubDetail,
    ProSubDetailWeek : ProSubDetailWeek
});

const MainAppContainer = createAppContainer(ProMainNavigator);

export default MainAppContainer;