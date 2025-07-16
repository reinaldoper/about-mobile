import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1e1e1e',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 16,
  },
  categoryButton: {
    backgroundColor: '#dcdcdc',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    margin: 4,
  },
  activeCategoryButton: {
    backgroundColor: '#1e90ff',
  },
  categoryButtonText: {
    color: '#333333',
    fontWeight: '500',
  },
  activeCategoryButtonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  listContent: {
    paddingBottom: 24,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#aaa',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e90ff',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#4f4f4f',
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: '#999999',
    marginBottom: 8,
  },
  link: {
    fontSize: 14,
    color: '#1e90ff',
    fontWeight: '600',
  },
});
