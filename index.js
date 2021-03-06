import { registerRootComponent } from 'expo';
import EventsService from './src/services/events.service';
import AuthService from './src/services/auth.service';
import App from './App';

const services = {};
services.tasksService = new EventsService();
services.authService = new AuthService();

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
