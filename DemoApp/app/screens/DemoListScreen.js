import { StyleSheet, View, Text, ScrollView, SafeAreaView, StatusBar, FlatList } from "react-native";

export default function DemoListScreen() {

    const sampleListData = [ {id: 1, firstName: "John", lastName: "Cena"},
                             {id: 2, firstName: "Randy", lastName: "Orton"},
                             {id: 3, firstName: "CM", lastName: "Punk"},
                             {id: 4, firstName: "Rey", lastName: "Mysterio"}];

    return(
        <SafeAreaView style={styles.container}>
            {/* <ScrollView style={style.scrollView}>
                {sampleListData.map((item) => {
                    return (
                        <View style={styles.card} key={item.id}>
                            <Text style={styles.cardText}>{item.firstName}</Text>
                            <Text style={styles.cardText}>{item.lastName}</Text>
                        </View>
                    )
                })}
            </ScrollView> */}
            <View style={styles.ScrollView}>
                <FlatList
                    data={sampleListData}
                    renderItem={( {item} ) => {
                        return(
                            <View style={styles.card} key={item.id}>
                                <Text style={styles.cardText}>{item.firstName}</Text>
                                <Text style={styles.cardText}>{item.lastName}</Text>
                            </View>
                        )
                    }}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "grey",
        paddingTop: Statusbar.currentHeight
    },
    scollView: {
        paddingHorizontal: 16
    },
    card: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 16
    },
    cardText: {
        fontSize: 30
    }
})