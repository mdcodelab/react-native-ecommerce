import React from 'react';
import { vs, s } from 'react-native-size-matters';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { sharedStyles } from '../../styles/sharedStyles';
import { AppColors } from '../../styles/colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AppText from '../../components/texts/AppText';
import AntDesign from '@expo/vector-icons/AntDesign';
import { products } from '../../data/products';

function CartItem() {
  const [quantity, setQuantity] = React.useState(1);
  const image = products[0].imageURL;

  function onDelete() {
    // logică de ștergere (temporar goală)
  }

  return (
    <View style={styles.container}>
      {/* imaginea produsului */}
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>

      {/* detalii produs + butoane */}
      <View style={styles.details}>
        {/* titlu + preț */}
        <View style={styles.textContainer}>
          <AppText style={styles.title}>Headphones</AppText>
          <AppText style={styles.price}>$24</AppText>
        </View>

        {/* butoane de cantitate și delete */}
        <View style={styles.buttons}>
          <View style={styles.buttonsQuantity}>
            <TouchableOpacity onPress={() => setQuantity(q => q + 1)}>
              <AntDesign name="plus-circle" size={26} color="black" />
            </TouchableOpacity>

            <Text style={styles.quantity}>{quantity}</Text>

            <TouchableOpacity onPress={() => setQuantity(q => Math.max(0, q - 1))}>
              <AntDesign name="minus-circle" size={26} color="black" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
            <MaterialIcons name="delete" size={26} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default CartItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: vs(120),
    flexDirection: 'row',
    alignItems: 'center',
    padding: vs(10),
    backgroundColor: AppColors.whiteColor,
    borderRadius: vs(10),
    marginVertical: vs(10),
    ...sharedStyles.shadow,
  },
  imageContainer: {
    flex: 1,
    height: '100%',
    borderRadius: vs(10),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  details: {
    flex: 1,
    height: '100%',
    paddingLeft: s(10),
    justifyContent: 'space-between',
  },
  textContainer: {
    marginBottom: vs(5),
  },
  title: {
    fontSize: s(16),
    fontWeight: '600',
    color: AppColors.primaryColor,
  },
  price: {
    fontSize: s(15),
    color: AppColors.primaryColor,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonsQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(10),
  },
  quantity: {
    fontSize: s(24),
    fontWeight: '500',
  },
  deleteButton: {
    width: vs(40),
    height: vs(40),
    borderRadius: vs(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
