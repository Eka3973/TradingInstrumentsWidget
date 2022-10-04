import Reactotron from 'reactotron-react-native'

const reactotron = Reactotron.configure({
  host: 'localhost',
  port: 9090
})
  .configure()
  .useReactNative()
  .connect()

export default reactotron
