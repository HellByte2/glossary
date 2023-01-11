import React, { useEffect, useState } from "react";
import ButtonAppBar from './appbar';
import TermCard from './Сard';
import Grid from '@mui/material/Grid'; 
import { Routes, Route } from "react-router-dom";
import ForceGraph2D from 'react-force-graph-2d';


function App() {
  return (
    <div>
      <Routes>
          <Route index element={<Home />} />
          <Route path="mindmap" element={<Mindmap />} />
      </Routes>
    </div>
  );
	
}

function Mindmap() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:9090/api2")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);
  
  return (
    <div>
		<ButtonAppBar />
		
			{typeof backendData.nodes === "undefined" ? (<p>Loading...</p>) : 
			(
				<div>
					<ForceGraph2D
						width = {1900}
						height = {900}
						graphData={backendData}
						nodeAutoColorBy="group"
						nodeCanvasObject={(node, ctx, globalScale) => {
							const label = node.id;
							const fontSize = 12/globalScale;
							ctx.font = `${fontSize}px Sans-Serif`;
							const textWidth = ctx.measureText(label).width;
							const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2); 

							ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
							ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);
							
							
							ctx.textAlign = 'center';
							ctx.textBaseline = 'middle';
							ctx.fillStyle = node.color;
							ctx.fillText(label, node.x, node.y);

							node.__bckgDimensions = bckgDimensions; 
						}}
						
						nodePointerAreaPaint={(node, color, ctx) => {
							ctx.fillStyle = color;
							const bckgDimensions = node.__bckgDimensions;
							bckgDimensions && ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);
						}}
					/>
				</div>
			)}

    </div>
  );
  
	
  
}


function Home() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:9090/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div>
	<ButtonAppBar />
	
      {typeof backendData.terms === "undefined" ? (
        <p>Loading...</p>
      ) : (
	    <div>
            <Grid
                container
                spacing={4}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
				paddingTop="4em"
				paddingLeft="4em"
            >
                {backendData.terms.map((term, i) => (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                        <TermCard  key={i} termData={term} />
                    </Grid>
                ))}
            </Grid>
		</div>)
	  }

    </div>
	
  );
}

export default App;
