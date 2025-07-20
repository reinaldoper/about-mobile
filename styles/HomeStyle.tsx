import { StyleSheet } from "react-native";
import { tintColorLight, lightGrey, gray11, gray12 } from '../constants/Colors';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: lightGrey },
  image: { width: 200, height: 200, borderRadius: 100, marginTop: 20, marginLeft: 10 },
  imageBackGround: {
    width: "100%",
    height: "40%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: gray12,
  },
  about: { textAlign: 'center', fontFamily: 'Roboto_700Bold', color: gray11, fontSize: 20, marginTop: 10 },
  item: {
    backgroundColor: gray12,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderStartEndRadius: 20,
    borderEndEndRadius: 20,
    borderBottomColor: '#E5BF3C',
    borderBottomWidth: 5,
  },
  title: {
    fontSize: 32,
  },
  flastList:{textAlign: 'center', width: '100%', backgroundColor: '#474347ff', fontSize: 20, marginTop: 10, fontFamily: 'Roboto_700Bold', color: '#f8f8f1ff'},
  scrollView:{ marginHorizontal: 20, textAlign: 'center', fontSize: 20, marginTop: 10, fontFamily: 'Roboto_700Bold', color: '#E5BF3C' },
  software:{
    fontFamily: 'Roboto_700Bold',
    color: tintColorLight,
  }
});
