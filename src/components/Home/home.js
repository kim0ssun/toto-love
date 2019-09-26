import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { CardHeader } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import site1 from '../../images/site1.gif';
import site2 from '../../images/site2.gif';
import site3 from '../../images/site3.gif';
import site4 from '../../images/site4.gif';
import site5 from '../../images/site5.gif';
import site6 from '../../images/site6.gif';
import site7 from '../../images/site7.gif';
import site8 from '../../images/site8.gif';
import banner1 from '../../images/banner1.gif';
import banner2 from '../../images/banner2.gif';
import banner3 from '../../images/banner3.gif';
import banner4 from '../../images/banner4.gif';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // padding: "10px 20px",
    backgroundColor: "#000",
    marginTop: '-70px' 
  },
  // paper: {
  //   padding: theme.spacing(2),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // },
  container: {
    marginTop: 50,
  },
  banner: {
    width: "100%",
    height: "auto",
    padding: 2,
    textAlign: "center",
    padding: 10,
    '& :hover': {
      cursor: 'pointer',
      border: "1px solid #fff"
    },
  },
  site: {
    width: "100%",
    height: "auto",
    textAlign: "center",
    padding: 10,
    objectFit: "cover",
    '& :hover': {
      cursor: 'pointer',
      border: "1px solid #fff"
    },
  },
  item: {
    '& :hover': {
      cursor: 'pointer',
      border: "1px solid #fff"
    },
  },
  media: {
    height: 0,
    padding: "50%"
  },
  card: {
    padding: 1,
    // maxWidth: "100%",
    border: '1px solid #444',
    background: "black",
    '&:hover': {
      border: "1px solid #fff"
    },
  },
  header: {
    textAlign: "center",
    backgroundColor: "black",
    color: "white",
    
  },
  content: {
    color: 'white',
    textAlign: 'center'
  },
  banner2: {
    height: 0,
    padding: "15%"
  }

}));


export default props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box 
        px={{xs: 3, sm: 10, md: 18}}
        pt={{xs: 3}}
      >
      <Grid container spacing={2}  className={classes.container}>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.banner2}
                  image={banner1}
                  title=""
                />
              </CardActionArea>
            </Card> 
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardActionArea>           
                <CardMedia
                  className={classes.banner2}
                  image={banner2}
                  title=""
                />
              </CardActionArea>
            </Card> 
          </Grid>
        </Grid>
      <Grid container spacing={1} >
        <Grid item xs={12}>
          <Box 
            color="white"
            p={4}
            textAlign="center"
            fontWeight={600}
            fontSize={{xs:'h6.fontSize', md:'h5.fontSize',}}
          >
          사설토토:안전놀이터-메이저놀이터-토토사이트 지킴이 추천
          </Box>
          <Box color="white" textAlign='center' p={3} fontSize={16}>
            토토사이트 검증을 전문으로 하고 있는 "지킴이"입니다.
          </Box>
          <Box color="white" textAlign='center'>
          추천해드리는 사설토토사이트들은 전부 안전이 100% 검증된 안전공원들이며 이용 전 반드시 사용하시는 메신저를 통하여 선택한 업체와 닉네임을 알려주세요.
          만약 불의의 사고 발생시 정확한 정황을 파악하고 문제해결에 최선을 다해드릴 것을 약속드립니다.
          </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}  className={classes.container}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <Box 
                  fontSize={{xs:'h7.fontSize', sm: 'h6.fontSize'}}
                  p={2}
                  color="white"
                  textAlign="center"
                >
                  메이저놀이터 토토
                </Box>
                <CardMedia
                  className={classes.media}
                  image={site1}
                  title=""
                />
                <CardContent >
                  <Typography variant="body2" className={classes.content} component="p">
                    다양한 실시간 게임과 스포츠 고배당 놀이터
                  </Typography>
                  <Typography variant="body2" className={classes.content} component="p">
                    고액배터들이 이용하기 편한 놀이터
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card> 
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <Box 
                  fontSize={{xs:'h7.fontSize', sm: 'h6.fontSize'}}
                  p={2}
                  color="white"
                  textAlign="center"
                >
                  메이저사이트 추천
                </Box>            
                <CardMedia
                  className={classes.media}
                  image={site2}
                  title=""
                />
                <CardContent >
                  <Typography variant="body2" className={classes.content} component="p">
                    다양한 실시간 종목
                  </Typography>
                  <Typography variant="body2" className={classes.content} component="p">
                    특별한 스포츠 이벤트 진행중
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card> 
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <Box 
                  fontSize={{xs:'h7.fontSize', sm: 'h6.fontSize'}}
                  p={2}
                  color="white"
                  textAlign="center"
                >
                  안전공원 보안1등
                </Box>             
                <CardMedia
                  className={classes.media}
                  image={site3}
                  title=""
                />
                <CardContent >
                  <Typography variant="body2" className={classes.content} component="p">
                    야구, 농구, 배구 실시간 발매 업무 최강
                  </Typography>
                  <Typography variant="body2" className={classes.content} component="p">
                    모든 배팅 무제제 국내최고 충환전 시스템
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card> 
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <Box 
                  fontSize={{xs:'h7.fontSize', sm: 'h6.fontSize'}}
                  p={2}
                  color="white"
                  textAlign="center"
                >
                  사설추천 안전한 사이트
                </Box>             
                <CardMedia
                  className={classes.media}
                  image={site4}
                  title=""
                />
                <CardContent >
                  <Typography variant="body2" className={classes.content} component="p">
                    해외스포츠배팅사이트
                  </Typography>
                  <Typography variant="body2" className={classes.content} component="p">
                    최고의 안전한 사이트
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card> 
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                 <Box 
                  fontSize={{xs:'h7.fontSize', sm: 'h6.fontSize'}}
                  p={2}
                  color="white"
                  textAlign="center"
                >
                  최적화놀이터
                </Box>            
                <CardMedia
                  className={classes.media}
                  image={site5}
                  title=""
                />
                <CardContent >
                  <Typography variant="body2" className={classes.content} component="p">
                    메이저 그이상의 엄청난 자본력
                  </Typography>
                  <Typography variant="body2" className={classes.content} component="p">
                    높은 배당의 스포츠 최적화 놀이터
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card> 
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea> 
                 <Box 
                  fontSize={{xs:'h7.fontSize', sm: 'h6.fontSize'}}
                  p={2}
                  color="white"
                  textAlign="center"
                >
                  먹튀검증 안전한 놀이터
                </Box>          
                <CardMedia
                  className={classes.media}
                  image={site6}
                  title=""
                />
                <CardContent >
                  <Typography variant="body2" className={classes.content} component="p">
                    각종 검증업체 인증페이지
                  </Typography>
                  <Typography variant="body2" className={classes.content} component="p">
                    차별화된 수많은 이벤트 진행중
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card> 
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>  
                 <Box 
                  fontSize={{xs:'h7.fontSize', sm: 'h6.fontSize'}}
                  p={2}
                  color="white"
                  textAlign="center"
                >
                  안전한 놀이터 SIX
                </Box>         
                <CardMedia
                  className={classes.media}
                  image={site7}
                  title=""
                />
                <CardContent >
                  <Typography variant="body2" className={classes.content} component="p">
                    먹튀 확인시 10배 보상
                  </Typography>
                  <Typography variant="body2" className={classes.content} component="p">
                    최대 당첨금 5천만원
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card> 
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                 <Box 
                  fontSize={{xs:'h7.fontSize', sm: 'h6.fontSize'}}
                  p={2}
                  color="white"
                  textAlign="center"
                >
                  스포츠토토안전한 메이저
                </Box>           
                <CardMedia
                  className={classes.media}
                  image={site8}
                  title=""
                />
                <CardContent >
                  <Typography variant="body2" className={classes.content} component="p">
                    수만개의 스포츠 경기
                  </Typography>
                  <Typography variant="body2" className={classes.content} component="p">
                    다양한 실시간 라이브 경기들
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card> 
          </Grid>
         
        </Grid>
        <Grid container spacing={2}  className={classes.container}>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.banner2}
                  image={banner3}
                  title=""
                />
              </CardActionArea>
            </Card> 
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardActionArea>           
                <CardMedia
                  className={classes.banner2}
                  image={banner4}
                  title=""
                />
              </CardActionArea>
            </Card> 
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.container}>
          
          <Grid item xs={12}>
            <h2 style={{color: "white", textAlign: 'center'}}>믿을만한 안전한 토토사이트 추천</h2>
            <p style={{color: "white", textAlign: 'center'}}>수 많은 토토사이트들중에서 단언컨대 안전놀이터라고 단정지을 수 있는 사이트는 많지 않습니다.</p>
            <p style={{color: "white", textAlign: 'center'}}>
            토토사이트들의 먹튀는 오랜 시간 사설토토사이트들의 특성을 악이용한 악질수법이였습니다.</p>
            <p style={{color: "white", textAlign: 'center'}}>
            이제는 많은 방법으로 일반 사용자들도 나름대로의 검증방법을 통하여 이런 먹튀사이트를 구분하지만</p>
            <p style={{color: "white", textAlign: 'center'}}>
            여전히 사설업체들의 검증과 규모확인이 필요한 이유는 아직까지는 일반 사용자들이 100% 검증을 한 뒤</p>
            <p style={{color: "white", textAlign: 'center'}}>
            업체이용을 한다는 것이 현실적으로 어려운 부분들이 많기 때문입니다.</p>
            </Grid>
        </Grid>
        </Box>

       
    </div>
    
  )

}
  