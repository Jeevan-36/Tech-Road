import React from "react";
import { pdf } from "@react-pdf/renderer"; // Import `pdf` from react-pdf



import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 30,
    paddingRight: 30,
    fontFamily: "Helvetica",
    backgroundColor: "#f7f7f7",
  },
  border: {
    borderWidth: 3,
    borderColor: "#005B96",
    margin: -3,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: "900",
    color: "#38B2AC",
    textAlign: "center",
    marginBottom: 20,
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "900",
    color: "#F56565",
    marginBottom: 8,
    textTransform: "capitalize",
    letterSpacing: 1,
  },
  question: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#2C3E50",
    marginBottom: 8,
    lineHeight: 1.4,
  },
  link: {
    fontSize: 14,
    color: "#1E90FF",
    textDecoration: "underline",
    marginBottom: 8,
    fontWeight: "bold",
  },
  notesLabel: {
    fontSize: 14,
    fontWeight: "900",
    color: "#F56565",
    marginBottom: 8,
  },
  notes: {
    fontSize: 13,
    color: "#2C3E50",
    marginBottom: 15,
    lineHeight: 1.6,
  },
  section: {
    marginBottom: 30,
  },
  footer: {
    fontSize: 10,
    color: "#BDC3C7",
    textAlign: "center",
    marginTop: 20,
  },
});

const generatePDF = (data) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.border}>
        <Text style={styles.header}>TechRoad</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        > 
          <Text style={[styles.subHeader, { textAlign: "left" }]}>
            {data[0].technology}
          </Text>
          <Text style={[styles.subHeader, { textAlign: "right" }]}>
            {data[0].title}
          </Text>
        </View>

        {data.map((item, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.question}>Q: {item.questionName}</Text>
            <Text style={styles.link} onPress={() => window.open(item.link, "_blank")}>
              {item.link}
            </Text>
            <Text style={styles.notesLabel}>Notes:</Text>
            <Text style={styles.notes}>{item.notes}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

const triggerPDFDownload = async (data) => {
  const blob = await pdf(generatePDF(data)).toBlob();
  const url = URL.createObjectURL(blob);
  return url; // Return the generated PDF URL
};

export default triggerPDFDownload;