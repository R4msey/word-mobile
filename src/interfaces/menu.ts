export interface IWordInformation {
  id: number
  round: number
  nameWord: string
  information: string
}

export interface IMenu {
  name: string
  blocked: boolean
  word: IWordInformation[] | IWordInformation
}