import { useTheme } from '@mui/material';
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Environment } from '../../environment'
import styles from './styles.module.css'

interface IFeedItem {
  id: string;
  media_url: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM' ;
  permalink: string;
  alt?: string;
  loading?: string;
}

export const InstaFeed: React.FC = () => {

  const [feedList, setFeedList] = useState<IFeedItem[]>([])
  const theme = useTheme()

  async function getInstaFeed() {
    const token = Environment.IG_TOKEN 
    const fields = 'media_url, media_type, permalink'    
    const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`
    const {data} = await axios.get(url)
    setFeedList(data.data)
  }
  useEffect(() => {
    getInstaFeed()
  },[])

  return (
    <section className={styles.container}>
      {feedList.map(item => (
        <a key={item.id} href={item.permalink} className={styles.item}>
          {item.media_type === 'IMAGE' ? <img src={item.media_url} /> : 
            item.media_type === 'VIDEO' ? (
              <video controls>
                <source src={item.media_url} />
              </video>) : <img src={item.media_url} />
          } 
        </a>
      ))}
    </section> 
  )
  /*
  <ImageList 
      sx={{ width: 900, height: 900 }} 
      cols={4} 
      rowHeight={364}
    >
      {feedList.map(item => (
        <ImageListItem key={item.id}
          component={Box}
          height={350} 
          width={350} 
          display='block' 
          padding={2} 
          paddingX={2} 
          gap={2}
        >
          <img 
            src={`${item.media_url}`} 
            srcSet={`${item.permalink}?w=564&h=564&fit=crop&auto=format&dpr=2 2x`}
            //src={`${item.media_url}?w=164&h=164&fit=crop&auto=format`} 
            //srcSet={`${item.permalink}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          />
        </ImageListItem>
      ))}
    </ImageList>

*/
}