export default function HomePage() {
  const styles = {
    container: {
      minHeight: 'calc(100vh - 50px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontWeight: 500,
      fontSize: 48,
      textAlign: 'center',
    },
    icon: {
      fontSize: 120,
      color: 'rgb(2, 83, 79)',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>It`s just a Phonebook App </h1>
      <div>
        <span style={styles.icon} role="img" aria-label="Phone icon">
          &#9742;
        </span>
      </div>
    </div>
  );
}
