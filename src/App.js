function App() {
  return (
    <div className="App" >

      <div className="top_bar" style={{height:"65px",width:"100%",backgroundColor:"black",position:"absolute",top:0}}> left bar content here</div>



      <div className="left_bar" style={{width:"80px",height:"100%",backgroundColor:"red",position:"absolute",top:0,left:0}}> </div>

      {/* //youtube div section */}
      <div style={{bottom:47,position:"absolute",right:0}} className="youtube_player">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/9sE138cu_LU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div style={{height:"45px",width:"560px",backgroundColor:"purple",position:"absolute",bottom:5,right:0}}>youtube section</div>
      
    </div>
  );
}

export default App;
