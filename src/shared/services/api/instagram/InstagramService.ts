import { Environment } from '../../../environment'
import { ApiInsta } from '../axios-config/indexinstagram'

export interface IListagemInstagram {
  id: string
  media_url: string
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM' 
  permalink: string
  caption: string
  username: string
  alt?: string
  loading?: string
}

type InstagramComTotalCount = {
  datas: IListagemInstagram[]
  totalCount: number
}

const getFeedInstagram = async (): Promise<InstagramComTotalCount | Error> => {
  try {
    const token = Environment.IG_TOKEN     
    const fields = 'media_url, media_type, permalink, caption, username'   
    const urlRelativa = `?access_token=${token}&fields=${fields}` 
    const { data, headers } = await ApiInsta.get(urlRelativa)
    
    const datas = data.data
    
    if (data) {
      return {
        datas, 
        totalCount: Number(headers['x-total-count']),
      }
    }
    return new Error('Erro ao consultar os registros.')
  } catch (error) { 
    return new Error( (error as {message: string}).message || 'Erro ao consultar os registros.' )
  }
}

export const InstagramService = {
  getFeedInstagram,
}