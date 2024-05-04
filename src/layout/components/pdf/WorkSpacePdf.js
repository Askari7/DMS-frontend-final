import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    body: {
        padding: 20,
        paddingBottom:45,
        flexDirection: 'column',
        flexGrow: 0.9,
        backgroundColor: 'white'
    },
    divider: {
        border: 'grey',
        borderWidth: 1,
        marginBottom: 10,
        marginTop: 10
    },
    viewStyle: {
        flexDirection: 'column',
        marginBottom: 10
    },
    headingStyle: {
        fontSize: 19,
        fontWeight: 'bold',
        textDecoration: 'underline',
        marginBottom: 10,
        color: 'blue'
    },
    subView: {
        flexDirection: 'column',
        marginBottom: 60
    },
    subHeading: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
        textDecoration: 'underline',
    },
    rowItems:{
        flexDirection:'row'
    },
    bodyStyle: {
        fontSize: 13,
        whiteSpace:'preWrap'
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
});



// Create Document Component
const WorkSpacePdf = (props) => {
    const { aiRecommendation, context, question, results } = props;
    return (
        <Document>
            <Page style={styles.body}>

                <View style={styles.viewStyle}>
                    <Text style={styles.headingStyle}>Context</Text>
                    <Text style={styles.bodyStyle}>{context}</Text>
                </View>

                {
                    question
                    &&
                    <View style={styles.viewStyle}>
                        <Text style={styles.headingStyle}>Question</Text>
                        <Text style={styles.bodyStyle}>{question}</Text>
                    </View>
                }
                <View style={styles.divider} />



                <View style={styles.viewStyle}>
                    <Text style={styles.headingStyle}>AI Recommendation</Text>
                    <Text style={styles.bodyStyle}>{aiRecommendation}</Text>
                </View>


                <View style={styles.viewStyle}>
                    <Text style={styles.headingStyle}>Search Results</Text>
                    {
                        results?.map(result => (
                            <View style={styles.subView}>
                                <View style={styles.rowItems}>
                                    <Text style={styles.subHeading}>{result?.verdictId}</Text>
                                    <Text style={styles.subHeading}> on </Text>
                                    <Text style={styles.subHeading}>{result?.verdictDate}</Text>
                                </View>
                                <Text style={styles.bodyStyle}>{result?.pageContent}</Text>
                            </View>
                        ))
                    }

                </View>

                <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                    `${pageNumber} / ${totalPages}`
                )} fixed />
            </Page>
        </Document>
    )

};

export default React.memo(WorkSpacePdf)