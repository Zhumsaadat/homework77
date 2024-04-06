export interface Message {
  author: string,
  message: string,
  image: File | null
}

export interface MessageWithIdAndImage {
  id: string,
  author: string,
  message: string,
  image: string | null
}