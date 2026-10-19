import { StyleSheet, View, Text, type ViewStyle } from
    'react-native';

const shadow: ViewStyle = {
    shadowColor: '#000',
    shadowOpacity: 0.2
};

const styles = StyleSheet.create({
    card: { ...shadow, padding: 8 },
    label: { fontSize: 14 },
});

export function Repro() {
    return (
        <View style={styles.card}>
            <Text style={styles.label}>repro</Text>
        </View>
    );
}