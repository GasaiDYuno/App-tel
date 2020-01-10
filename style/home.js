import { StyleSheet} from 'react-native';

export const homeStyle = StyleSheet.create({
  productContainer : {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#DC7661'
  },
  scrollProductView : {
    width: '90%',
    alignSelf: 'center',
    borderWidth:3,
    borderColor: '#FFA07A',
    borderRadius: 40,
    padding: 10,
    marginBottom: 10,
  },
  scanButtonView : {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    backgroundColor: '#E1315B',
    marginBottom: 30,
  },
  scanButton: {
    backgroundColor: '#DC7661',
    width: "90%",
    borderRadius: 20,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
})