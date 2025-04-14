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

const PropertySearchPage = () => {
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
              <Icon name="menu" size={30} color="#000" />
            </TouchableOpacity>
          )}
          <View style={styles.breadcrumbContainer}>
            <Icon name="home" size={24} color="#000" />
            <Text style={styles.breadcrumb}>Home / Search / For Sale</Text>
          </View>
        </View>

        <Image
          source={{ uri: 'https://sackim.com/wp-content/uploads/2018/07/voi-nhung-cong-cu-rat-huu-ich-ban-da-co-the-in-truc-tiep-ngay-tren-google-map.jpg' }}
          style={styles.mapImage}
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

        <Text style={styles.headerText}>Properties for sale in Oxford Circus Station, London</Text>
        <Text style={styles.resultCount}>13 results</Text>
        <Text style={styles.featuredTitle}>Featured Properties</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuredScroll}>
          {properties.map(property => (
            <View key={property.id} style={styles.featuredCard}>
              <Image source={{ uri: property.image }} style={styles.featuredImage} />
              <Text style={styles.price}>{property.price}</Text>
              <Text style={styles.title}>{property.title}</Text>
            </View>
          ))}
        </ScrollView>

        <FlatList
          data={properties}
          renderItem={renderPropertyItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />

        <View style={styles.signInContainer}>
          <Text style={styles.signInTitle}>Sign in to enjoy much more</Text>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFEDDD',
  },
  menuButton: {
    position: 'absolute',
    top: 20,
    right: 10,
    zIndex: 100,  // Đảm bảo menuButton nổi bật
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.95)',  // Overlay có nền tối
    zIndex: 1,
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 250,
    // backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    paddingVertical: 10,
    elevation: 5,
    zIndex: 6,  // Đặt zIndex cao hơn overlay
    paddingLeft: 10,
    paddingTop: 40,
    backgroundColor: '#FFEDDD',
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
    transition: 'margin-left 0.3s ease',
    zIndex: 0, // Đặt zIndex thấp cho content
  },
  contentShifted: {
    marginLeft: 250,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  breadcrumbContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
  },
  breadcrumb: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight: 'bold',
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
  mapImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  resultCount: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  featuredTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  featuredScroll: {
    marginBottom: 20,
  },
  featuredCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    width: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  featuredImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  propertyCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    position: 'relative',
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
    borderRadius: 10,
  },
  signInTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
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
  footerGrid: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  footerLink: {
    color: '#00BFFF',
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
    color: '#00BFFF',
    fontSize: 14,
    marginVertical: 5,
    width: '50%',
    textAlign: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#555',
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
});

export default PropertySearchPage;