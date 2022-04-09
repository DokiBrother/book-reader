import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
  Dimensions
} from 'react-native';
import bookImages from '../component/bookImages';

const HomeScreen = ({navigation}) => {

  const bookOtherWordsForHome = {
    id: 1,
    bookName: "Other Words For Home",
    bookCover: bookImages.otherWordsForHome,
    rating: 4.5,
    language: "Eng",
    pageNo: 341,
    author: "Jasmine Warga",
    genre: [
        "Romance", "Adventure", "Drama"
    ],
    readed: "12k",
    description: "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.",
    backgroundColor: "rgba(240,240,232,0.9)",
    navTintColor: "#000"
}

const bookTheMetropolis = {
    id: 2,
    bookName: "The Metropolis",
    bookCover: bookImages.theMetropolist,
    rating: 4.1,
    language: "Eng",
    pageNo: 272,
    author: "Seith Fried",
    genre: [
        "Adventure", "Drama"
    ],
    readed: "13k",
    description: "In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence. Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around us and the technologies guiding us into the future.",
    backgroundColor: "rgba(247,239,219,0.9)",
    navTintColor: "#000"
}

const bookTheTinyDragon = {
    id: 3,
    bookName: "The Tiny Dragon",
    bookCover: bookImages.theTinyDragon,
    rating: 3.5,
    language: "Eng",
    pageNo: 110,
    author: "Ana C Bouvier",
    genre: [
        "Drama", "Adventure", "Romance"
    ],
    readed: "13k",
    description: "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
    backgroundColor: "rgba(119,77,143,0.9)",
    navTintColor: "#FFF"
}

const myBooksData = [
    {
        ...bookOtherWordsForHome,
        completion: "75%",
        lastRead: "3d 5h",

    },
    {
        ...bookTheMetropolis,
        completion: "23%",
        lastRead: "10d 5h",

    },
    {
        ...bookTheTinyDragon,
        completion: "10%",
        lastRead: "1d 2h",

    }
]

  const [myBooks, setMyBooks] = React.useState(myBooksData);

  function renderMyBookSection(myBooks) {

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    marginLeft: index == 0 ? 24 : 0,
                    marginRight: 12
                }}
                onPress={() => navigation.navigate("BookDetail", {
                    book: item
                })}
            >
                {/* Book Cover */}
                <Image
                    source={item.bookCover}
                    resizeMode="cover"
                    style={{
                        width: 130,
                        height: 180,
                        borderRadius: 20
                    }}
                />

                {/* Book Info */}
                <View style={{ marginTop: 12, flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={require('../assets/image/logo.png')}
                        style={{
                            width: 20,
                            height: 20,
                        }}
                    />
                    <Text style={{ marginLeft: 5, color: 'black' }}>{item.lastRead}</Text>

                    <Image
                        source={require('../assets/image/logo.png')}
                        style={{
                            marginLeft: 12,
                            width: 20,
                            height: 20,
                        }}
                    />
                    <Text style={{ marginLeft: 5, color: 'black' }}>{item.completion}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            {/* Header */}
            <View style={{
                    paddingHorizontal: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderLeftColor: 'green',
                    borderLeftWidth: 5
                }}>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold'}}>New Releases</Text>
            </View>

            {/* Books */}
            <View style={{ flex: 1, marginTop: 24 }}>
                <FlatList
                    data={myBooks}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

  return (
    <SafeAreaView style={{flex: 1}}>
            <ImageBackground source={require('../assets/image/BGapp.jpg')} resizeMode = "cover" style={{flex: 1, justifyContent: 'center'}} >
                <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false} >
                    <View 
                        style={{
                            flex: 2,
                            marginTop: Dimensions.get('window').height/3.5,
                            borderTopStartRadius: 15,
                            borderTopRightRadius: 15, 
                            backgroundColor: 'white'}}>

                    <ScrollView style={{ margin: 20, borderRadius: 10}}>

                        {/*Render Book List*/}
                        <View>
                        {renderMyBookSection(myBooks)}
                        </View>

                    </ScrollView>
                    <ScrollView style={{ margin: 20, borderRadius: 10}}>

                        {/*Render Book List*/}
                        <View>
                        {renderMyBookSection(myBooks)}
                        </View>

                    </ScrollView>
                    <ScrollView style={{ margin: 20, borderRadius: 10}}>

                        {/*Render Book List*/}
                        <View>
                        {renderMyBookSection(myBooks)}
                        </View>

                    </ScrollView>
                    <ScrollView style={{ margin: 20, borderRadius: 10}}>

                        {/*Render Book List*/}
                        <View>
                        {renderMyBookSection(myBooks)}
                        </View>

                    </ScrollView>
                    <ScrollView style={{ margin: 20, borderRadius: 10}}>

                        {/*Render Book List*/}
                        <View>
                        {renderMyBookSection(myBooks)}
                        </View>

                    </ScrollView>
                    <ScrollView style={{ margin: 20, borderRadius: 10}}>

                        {/*Render Book List*/}
                        <View>
                        {renderMyBookSection(myBooks)}
                        </View>

                    </ScrollView>
                    </View>
                </ScrollView>
            </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#38b000",
  },
});

export default HomeScreen;
