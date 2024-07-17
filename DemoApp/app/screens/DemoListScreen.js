import { StyleSheet, View, Text, ScrollView, SafeAreaView, StatusBar, FlatList, SectionList } from "react-native";

export default function DemoListScreen() {

    const sampleSectionData = [
                            {
                                "brand":"NIKE",
                                "data":["Air Jordan", "Air Force", "Nike SB"]
                            },
                            {
                                "brand":"ADIDAS",
                                "data":["Samba", "Superstar", "Stan Smith"]
                            }
    ];

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
                {/* <FlatList
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
                    ItemSeparatorComponent={<View style={{height: 16}}/>}
                    ListEmptyComponent={<Text>empty</Text>}
                    ListHeaderComponent={<Text style={styles.headerText}>User List</Text>}
                    ListFooterComponent={<Text style={styles.footerText}>End of List</Text>}
                /> */}
                <SectionList
                    sections={sampleSectionData}
                    renderItem={({ item }) => {
                        return(
                            <View style={styles.card}>
                                <Text style={styles.carText}>{item}</Text>
                            </View>
                        )
                    }}
                    renderSectionHeader={({ section }) => {
                        <Text style={styles.sectionHeaderText}>{section.type}</Text>
                    }}
                    ItemSeparatorComponent={() => <View style={{ height: 16}}/>}
                    SectionSeparatorComponent={() => <View style={{ height: 16}}/>}
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
        /* marginBottom: 16 */
    },
    cardText: {
        fontSize: 30
    },
    headerText: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 12
    },
    footerText: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 12
    },
    sectionHeaderText: {
        backgroundColor: "white",
        fontSize: 24,
        fontWeight: "bold"
    }
})