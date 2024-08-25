import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    const INIT_URL = "https://images.unsplash.com/photo-1545134969-8debd725b007?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHVzdHl8ZW58MHx8MHx8fDA%3D"; 
    const HOT_URL = "https://media.istockphoto.com/id/1325895908/photo/asian-woman-drying-sweat-in-a-warm-summer-day.webp?b=1&s=170667a&w=0&k=20&c=VioEW1OA7M1dvqyyA0KBPj0a9m_TC69N8wgdiTM6j9I="; 
    const COLD_URL = "https://images.unsplash.com/photo-1519944159858-806d435dc86b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZHxlbnwwfHwwfHx8MA%3D%3D"; 
    const RAIN_URL = "https://images.unsplash.com/photo-1509635022432-0220ac12960b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhaW58ZW58MHx8MHx8fDA%3D";
    return(
        <div className="InfoBox">
         <div className="cardContainer">
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL :info.temp>15 ? HOT_URL :COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city} {
         info.humidity>80 ? <ThunderstormIcon/> :info.temp>15 ? <WbSunnyIcon/> :<AcUnitIcon/>
         }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
           <p>Temperature={info.temp}&deg;C</p>
           <p>Humidity={info.humidity}</p>
           <p>Min temp={info.tempMin}&deg;C</p>
           <p>Max temp={info.tempMax}&deg;C</p>
           <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
}
