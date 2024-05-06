const Footer = () => {
    return (

      <footer className="footer">
        <div className="flex items-center justify-center"
            style={{
                width: "100%",
                display: "flex",
                paddingTop:"10px",
                paddingBottom:"10px",
                alignItems: "center", 
                backgroundColor: "var(--sub6)", 
                fontSize:"12px",
                color: "var(--sub10)", 
                }}
        >
          <div>© Crossing 2024</div>
        </div>
      </footer>
    );
  };
  
  export default Footer;