import Reactotron from 'reactotron-react-native';

export default {
  start: (ip) => {
    if (__DEV__ && ip) {
      const tron = Reactotron.configure({
        name: 'Git Manager',
        host: ip,
        port: 9090,
      })
        .useReactNative({
          asyncStorage: false,
        })
        .connect();

      // eslint-disable-next-line no-console
      console.tron = tron.log;
      tron.clear();
      return tron;
    }
  },
};
