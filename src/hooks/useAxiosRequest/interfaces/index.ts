import { IQuotesItems } from '../../../components/Home/interfaces'

export interface IUseAxiosRequestReturn {
  data: IQuotesItems[] | []
  error: string
  loading: boolean
}
