import * as React from 'react';
//import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
//import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
//import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CardActionArea } from '@mui/material';



export default function TermCard(termData) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
	
  return (
    <Card sx={{ maxWidth: 420 }}>
	
		<CardActionArea onClick={handleExpandClick}>
			<CardHeader title={termData.termData.title} subheader={termData.termData.engTerm}/>
		</CardActionArea>
      
		<Collapse in={expanded} timeout="auto" unmountOnExit>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{termData.termData.def}
				</Typography>
			</CardContent>
		</Collapse>
      
    </Card>
  );
}