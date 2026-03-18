import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

class PostsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData = await data.json();
    this.setState({
      posts: jsonData,
    });
  }

  render() {
    const { posts } = this.state;
    return (
      <View>
        <Text style={styles.title}>Blog Posts</Text>
        <FlatList
          keyExtractor={(posts) => posts.id}
          data={posts}
          renderItem={({ item }) => (
            <View style={styles.postItem}>
              <Text style={styles.postId}>Post #{item.id}</Text>
              <Text style={styles.postTitle}>{item.title}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
  },
  postItem: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  postId: {
    fontSize: 12,
    color: "#666",
    marginBottom: 5,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default PostsScreen;
