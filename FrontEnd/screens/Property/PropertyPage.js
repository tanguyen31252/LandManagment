import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const properties = [
  {
    id: '1',
    title: 'Semi detached house',
    address: 'Southfield Road, Oxford OX4',
    price: '£703,250',
    bedrooms: 3,
    bathrooms: 2,
    furnished: 'Semi-furnished',
    image: 'https://1.bp.blogspot.com/-yie3_MQkEWs/XyjWdK4SiAI/AAAAAAAAAKA/KPkYKR3HlCcLnGLa2qt16cTmSI-fyFEnQCNcBGAsYHQ/s1280/z2007870698066_3d03b85a859d1f0060f86d9a2f0088a1.jpg',
  },
  {
    id: '2',
    title: 'Bungalow for rent',
    address: 'Southfield Road, Oxford OX4',
    price: '£904,250',
    bedrooms: 3,
    bathrooms: 2,
    furnished: 'Furnished',
    image: 'https://nhadatbaolocvn.com/wp-content/uploads/2021/05/dat-nen-loc-an_bao-loc-2.jpg',
  },
  {
    id: '3',
    title: 'Bungalow for rent',
    address: 'Southfield Road, Oxford OX4',
    price: '£904,250',
    bedrooms: 3,
    bathrooms: 2,
    furnished: 'Furnished',
    image: 'https://nhadatbaolocvn.com/wp-content/uploads/2021/05/dat-nen-loc-an_bao-loc-2.jpg',
  },
];

const PropertyPage = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(prev => !prev);
  };

  const hideSidebar = () => {
    setSidebarVisible(false);
  };

  const renderPropertyItem = ({ item }) => (
    <View style={styles.propertyCard}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.propertyInfo}>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.address}>{item.address}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.details}>{item.bedrooms} Bedrooms</Text>
          <Text style={styles.details}>{item.bathrooms} Bathrooms</Text>
          <Text style={styles.details}>{item.furnished}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.favoriteButton}>
        <Icon name="heart-outline" size={24} color="#FF0000" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {sidebarVisible && (
        <View style={styles.overlay} onTouchEnd={hideSidebar} />
      )}

      {sidebarVisible && (
        <View style={styles.sidebar}>
          <TouchableOpacity onPress={() => alert('Navigate to Home')} style={styles.sidebarItem}>
            <Text style={styles.sidebarText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Navigate to For Sale')} style={styles.sidebarItem}>
            <Text style={styles.sidebarText}>For Sale</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Navigate to For Rent')} style={styles.sidebarItem}>
            <Text style={styles.sidebarText}>For Rent</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Navigate to For Investment')} style={styles.sidebarItem}>
            <Text style={styles.sidebarText}>For Investment</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Navigate to Blog')} style={styles.sidebarItem}>
            <Text style={styles.sidebarText}>Blog</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Navigate to Sign In')} style={styles.sidebarItem}>
            <Text style={styles.sidebarText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      )}

      <ScrollView style={[styles.content, sidebarVisible ? styles.contentShifted : {}]}>
        <View style={styles.headerContainer}>
          {!sidebarVisible && (
            <TouchableOpacity onPress={toggleSidebar} style={styles.menuButton}>
              <Icon name="menu" size={30} color="#000" marginTop= "25" marginRight= "10"/>
            </TouchableOpacity>
          )}
          <View style={styles.breadcrumbContainer}>
            <Icon name="home" size={24} color="#000" marginTop= "20"/>
            <Text style={styles.breadcrumb}>Home / For Sale</Text>
          </View>
        </View>

        <View style={styles.innerContainer}>
          <Text style={styles.headerText}>Properties for sale</Text>
          <Text style={styles.subHeaderText}>Search for the best houses for sale in your area.</Text>

          <Image
            source={{ uri: 'https://www.thitruong.today/uploads/files/2021/06/29/M-i-gi-i-nh-t-2.jpg' }}
            style={styles.infoImage}
          />

          <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder="Enter City, Zip, Address"
              placeholderTextColor="#aaa"
            />
            <TouchableOpacity style={styles.searchButton}>
              <Icon name="magnify" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <Text style={styles.resultCount}>Properties For Sale</Text>

          <FlatList
            data={properties}
            renderItem={renderPropertyItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
          />
        </View>

        {/* Thêm phần đăng nhập vào đây */}
        <View style={styles.signInContainer}>
          <Text style={styles.signInTitle}>Sign in to enjoy much more</Text>
          <Text style={styles.additionalInfo}>
            Tired of endless tabs cluttering your browser while you search for your ideal property?{'\n'}
            We’ve got the solution for you! Say farewell to the tab chaos and hello to organization with our cutting-edge platform.
          </Text>
          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.signInButtonText}>+ Sign in</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.subscribeInput}
            placeholder="Subscribe with email"
            placeholderTextColor="#aaa"
          />
          <TouchableOpacity style={styles.subscribeButton}>
            <Text style={styles.subscribeButtonText}>Subscribe</Text>
          </TouchableOpacity>
        </View>

        {/* Footer Container */}
        <View style={styles.footerWrapper}>
          <View style={styles.footerGrid}>
            <Text style={styles.footerLink}>Sell your property</Text>
            <Text style={styles.footerLink}>Rent a property</Text>
            <Text style={styles.footerLink}>Let your property</Text>
            <Text style={styles.footerLink}>Buy a property</Text>
            <Text style={styles.footerLink}>Invest your property</Text>
          </View>

          <View style={styles.footerGrid}>
            <Text style={styles.policyLink}>Privacy policy</Text>
            <Text style={styles.policyLink}>Terms of use</Text>
            <Text style={styles.policyLink}>Contact us</Text>
            <Text style={styles.policyLink}>About us</Text>
          </View>

          <View style={styles.policyContainer}>
            <View style={styles.iconContainer}>
              <AntDesign name="facebook-square" size={24} color="#00BFFF" />
              <AntDesign name="linkedin-square" size={24} color="#00BFFF" style={styles.iconSpacing} />
              <AntDesign name="youtube" size={24} color="#00BFFF" style={styles.iconSpacing} />
              <AntDesign name="instagram" size={24} color="#00BFFF" style={styles.iconSpacing} />
            </View>
            <Text style={styles.footerText}>© 2023 Am Homes Limited. All rights reserved.</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menuButton: {
    position: 'absolute',
    top: 20,
    right: 10,
    zIndex: 100,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    zIndex: 1,
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 250,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    paddingVertical: 10,
    elevation: 5,
    zIndex: 6,
    paddingLeft: 10,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  sidebarItem: {
    padding: 20,
  },
  sidebarText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    marginLeft: 0,
    zIndex: 0,
  },
  contentShifted: {
    marginLeft: 250,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 0,
  },
  breadcrumbContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 20,
  },
  breadcrumb: {
    marginTop: 20,
    fontSize: 16,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  innerContainer: {
    padding: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 50,
    borderColor: '#FFC700',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: '#FFC700',
    borderRadius: 10,
    padding: 10,
    position: 'absolute',
    right: 3,
    top: 3,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subHeaderText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  infoImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  resultCount: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  propertyCard: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginBottom: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    position: 'relative',
    borderWidth: 1, // Độ dày viền
    borderColor: 'rgba(0, 0, 0, 0.3)', // Màu sắc viền mờ (độ trong suốt 30%)
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  propertyInfo: {
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  address: {
    fontSize: 14,
    color: '#555',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  details: {
    fontSize: 12,
    color: '#555',
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  signInContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#FFF1D0',
  },
  signInTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  additionalInfo: {
    fontSize: 14,
    color: '#555',
    marginVertical: 10,
  },
  signInButton: {
    backgroundColor: '#FFBF00',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  signInButtonText: {
    color: '#FFFFFF',
  },
  subscribeInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  subscribeButton: {
    backgroundColor: '#00A5E0',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  subscribeButtonText: {
    color: '#FFFFFF',
  },
  footerWrapper: {
    marginLeft: -20,
    marginRight: -20,
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 10,
  },
  footerGrid: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  footerLink: {
    color: '#FFFFFF',
    fontSize: 14,
    marginVertical: 5,
    width: '50%',
    textAlign: 'center',
  },
  policyContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    padding: 10,
    alignItems: 'center',
  },
  policyLink: {
    color: '#FFFFFF',
    fontSize: 14,
    marginVertical: 5,
    width: '50%',
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  iconSpacing: {
    marginLeft: 15,
  },
  footerText: {
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default PropertyPage;