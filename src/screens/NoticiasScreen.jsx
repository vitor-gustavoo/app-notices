import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { SectionList } from "react-native";
import { Card, Title, Paragraph, ActivityIndicator } from "react-native-paper";

export default function NoticiasScreen() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const key = "dd0096da672142e4a15691161483166b";
    fetch("https://newsapi.org/v2/top-headlines?country=br&apiKey=" + key + "&category=technology")
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const renderItem = ({ item }) => (
    <Card style={styles.card} key={item.url}>
      {item.urlToImage ? (
        <Card.Cover source={{ uri: item.urlToImage }} style={styles.cardImage} />
      ) : (
        <Image
          source={require("../../assets/placeholder.png")}
          style={styles.cardImage}
        />
      )}
      <Card.Content>
        <Title style={styles.title}>{item.title}</Title>
        {item.description && (
          <Paragraph style={styles.description}>{item.description}</Paragraph>
        )}
      </Card.Content>
    </Card>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SectionList
        sections={[{ title: "Noticias", data: news }]}
        renderItem={renderItem}
        keyExtractor={(item) => item.url}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  cardImage: {
    height: 150,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
});
