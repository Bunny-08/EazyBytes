import "./Footer.css";
export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} SK BADRUJAMA — Portfolio</p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    padding: "2rem 0",
    background: "#eee",
    marginTop: "2rem"
  }
};
