import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    const INIT_URL="https://cdn.pixabay.com/photo/2023/10/28/09/20/darling-8346954_1280.jpg";
    const HOT_URL="https://unsplash.com/photos/gray-clouds-with-sun-rays-at-daytime-EGKnOydwJbc";
    const COLD_URL="https://unsplash.com/photos/trees-with-fogs-PDtJt8Cp-4Q";
    const RAIN_URL="https://www.istockphoto.com/photo/adorable-little-boy-playing-at-rainy-day-gm1066533618-285199944?utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frainy-weather&utm_medium=affiliate&utm_source=unsplash&utm_term=rainy+weather%3A%3A%3A";

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